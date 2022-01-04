/*
 *   Copyright 2022  SenX S.A.S.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import {Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch} from '@stencil/core';
import {ChartType, ECharts} from "../../model/types";
import {Param} from "../../model/param";
import {EChartsOption, init} from "echarts";
import {Logger} from "../../utils/logger";
import {GTSLib} from "../../utils/gts.lib";
import {Utils} from "../../utils/utils";
import {ColorLib} from "../../utils/color-lib";
import {SeriesOption} from "echarts/lib/util/types";
import {DataModel} from "../../model/dataModel";

@Component({
  tag: 'discovery-annotation',
  styleUrl: 'discovery-annotation.scss',
  shadow: true,
})
export class DiscoveryAnnotation {
  @Prop({mutable: true}) result: DataModel | string;
  @Prop() type: ChartType;
  @Prop() options: Param | string = new Param();
  @Prop() width: number;
  @State() @Prop() height: number;
  @Prop() debug: boolean = false;
  @Prop() unit: string;

  @Element() el: HTMLElement;

  @Event() draw: EventEmitter<void>;
  @Event() dataZoom: EventEmitter<{ start: number, end: number, min: number, max: number }>;
  @Event() dataPointOver: EventEmitter;

  @State() parsing: boolean = false;
  @State() rendering: boolean = false;
  @State() chartOpts: EChartsOption;
  @State() expanded: boolean = false;
  @State() innerOptions: Param;

  private graph: HTMLDivElement;
  private defOptions: Param = {...new Param(), timeMode: 'date'};
  private LOG: Logger;
  private displayExpander: boolean = false;
  private myChart: ECharts;
  private divider: number = 1000;
  private hasFocus: boolean = false;
  private gtsList = [];

  @Watch('result')
  updateRes() {
    this.chartOpts = this.convert(GTSLib.getData(this.result) || new DataModel());
    this.LOG.debug(['updateRes'], {chartOpts: this.chartOpts});
    setTimeout(() => {
      if (!!this.myChart) {
        this.myChart.resize({width: this.width, height: this.height});
        this.myChart.setOption(this.chartOpts || {});
      }
    });
  }

  @Watch('options')
  optionsUpdate(newValue: string, oldValue: string) {
    this.LOG.debug(['optionsUpdate'], newValue, oldValue);
    if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
      if (!!this.options && typeof this.options === 'string') {
        this.innerOptions = JSON.parse(this.options);
      } else {
        this.innerOptions = {...this.options as Param};
      }
      if (!!this.myChart) {
        this.chartOpts = this.convert(this.result as DataModel || new DataModel());
        setTimeout(() => this.myChart.setOption(this.chartOpts || {}));
      }
      if (this.LOG) {
        this.LOG.debug(['optionsUpdate 2'], {options: this.innerOptions, newValue, oldValue}, this.chartOpts);
      }
    }
  }

  @Method()
  async resize() {
    if (this.myChart) {
      this.myChart.resize();
    }
  }

  @Method()
  async show(regexp: string) {
    this.myChart.dispatchAction({
      type: 'legendSelect',
      batch: (this.myChart.getOption().series as any[]).map(s => {
        return {name: s.name}
      }).filter(s => new RegExp(regexp).test(s.name))
    });
  }

  @Method()
  async hide(regexp: string) {
    this.myChart.dispatchAction({
      type: 'legendUnSelect',
      batch: (this.myChart.getOption().series as any[]).map(s => {
        return {name: s.name}
      }).filter(s => new RegExp(regexp).test(s.name))
    });
  }

  componentWillLoad() {
    this.parsing = true;
    this.LOG = new Logger(DiscoveryAnnotation, this.debug);
    if (typeof this.options === 'string') {
      this.innerOptions = JSON.parse(this.options);
    } else {
      this.innerOptions = this.options;
    }
    this.expanded = !!this.innerOptions.expandAnnotation;
    this.result = GTSLib.getData(this.result);
    this.divider = GTSLib.getDivider(this.innerOptions.timeUnit || 'us');
    this.LOG.debug(['componentWillLoad'], {type: this.type, options: this.innerOptions});
    this.chartOpts = this.convert(this.result as DataModel || new DataModel())
  }

  convert(data: DataModel) {
    let options = Utils.mergeDeep<Param>(this.defOptions, this.innerOptions || {}) as Param;
    options = Utils.mergeDeep<Param>(options || {} as Param, data.globalParams) as Param;
    this.innerOptions = {...options};
    const series: any[] = [];
    const gtsList = GTSLib.flatDeep(GTSLib.flattenGtsIdArray(data.data as any[], 0).res);
    this.gtsList = [];
    this.LOG.debug(['convert'], {options: this.innerOptions, gtsList});
    const gtsCount = gtsList.length;
    let linesCount = 1;
    for (let i = 0; i < gtsCount; i++) {
      const gts = gtsList[i];
      if (GTSLib.isGtsToAnnotate(gts) && !!gts.v) {
        this.gtsList.push(gts);
        const c = ColorLib.getColor(gts.id, this.innerOptions.scheme);
        const color = ((data.params || [])[i] || {datasetColor: c}).datasetColor || c;
        this.displayExpander = i > 1;
        if (this.expanded) linesCount++;
        series.push({
          type: 'scatter',
          name: GTSLib.serializeGtsMetadata(gts),
          data: gts.v.map(d => [this.innerOptions.timeMode === 'date'
            ? d[0] / this.divider
            : d[0]
            , (this.expanded ? i : 0) + 0.5]),
          animation: false,
          large: true,
          showSymbol: true,
          symbol: 'rect',
          symbolSize: [2, 30],
          clip: true,
          showAllSymbol: true,
          itemStyle: {color},
        } as SeriesOption);
      }
    }
    this.height = 50 + (linesCount * (this.expanded ? 26 : 30)) + (!!this.innerOptions.showLegend ? 30 : 0) + (this.innerOptions.fullDateDisplay ? 50 : 0);
    this.LOG.debug(['convert'], {
      expanded: this.expanded,
      series,
      height: this.height,
      linesCount,
      opts: this.innerOptions
    });
    return {
      animation: false,
      grid: {
        height: this.height - (!!this.innerOptions.showLegend ? 60 : 30) - (this.innerOptions.fullDateDisplay ? 40 : 0),
        right: 10,
        top: 20,
        bottom: (!!this.innerOptions.showLegend ? 30 : 10) + (this.innerOptions.fullDateDisplay ? 0 : 0),
        left: (this.innerOptions.leftMargin || 10),
        containLabel: true
      },
      throttle: 70,
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          return `<div style="font-size:14px;color:#666;font-weight:400;line-height:1;">${params[0].axisValueLabel}</div>
               ${params.map(s => {
            const value = this.gtsList[s.seriesIndex].v[s.dataIndex];
            return `${s.marker} <span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">${s.seriesName}</span>
            <span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">${value[value.length - 1]}</span>`
          }).join('<br>')}`;
        },
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: Utils.getCSSColor(this.el, '--warp-view-bar-color', 'red')
          }

        },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: (pos, params, el, elRect, size) => {
          const obj = {top: 10};
          if (this.hasFocus) {
            const date = this.innerOptions.timeMode === 'date'
              ? (params[0]?.axisValue || 0) * this.divider
              : params[0]?.axisValue;
            const regexp = '(' + (params as any[]).map(s => s.seriesName).join('|') + ')';
            this.dataPointOver.emit({date, name: regexp, value: 0, meta: {}});
          }
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
          return obj;
        }
      },
      toolbox: {
        show: this.innerOptions.showControls,
        feature: {
          saveAsImage: {type: 'png', excludeComponents: ['toolbox']}
        }
      },
      xAxis: {
        type: this.innerOptions.timeMode === 'date' ? 'time' : 'category',
        splitLine: {show: false, lineStyle: {color: Utils.getGridColor(this.el)}},
        axisLine: {show: true, lineStyle: {color: Utils.getGridColor(this.el)}},
        axisLabel: {
          color: Utils.getLabelColor(this.el),
          formatter: this.innerOptions.fullDateDisplay ? value => GTSLib.toISOString(value, 1, this.innerOptions.timeZone).replace('T', '\n') : undefined
        },
        axisTick: {show: true, lineStyle: {color: Utils.getGridColor(this.el)}},
        scale: !(this.innerOptions.bounds && (!!this.innerOptions.bounds.minDate || !!this.innerOptions.bounds.maxDate)),
        min: !!this.innerOptions.bounds && !!this.innerOptions.bounds.minDate ? this.innerOptions.bounds.minDate / this.divider : undefined,
        max: !!this.innerOptions.bounds && !!this.innerOptions.bounds.maxDate ? this.innerOptions.bounds.maxDate / this.divider : undefined,
      },
      yAxis: {
        show: true,
        min: 0,
        axisTick: {show: false},
        axisLabel: {show: false},
        max: this.expanded ? linesCount - 1 : 1,
        type: 'value',
        splitNumber: linesCount,
        interval: 1,
        boundaryGap: [0, 0],
        splitLine: {
          lineStyle: {
            color: Utils.getGridColor(this.el)
          }
        },
        axisLine: {
          lineStyle: {
            color: Utils.getGridColor(this.el)
          }
        }
      },
      legend: {bottom: 0, left: 'center', show: !!this.innerOptions.showLegend, height: 30, type: 'scroll'},
      dataZoom: [
        this.innerOptions.showRangeSelector ? {
          type: 'slider',
          height: '20px'
        } : undefined,
        {
          type: 'inside'
        }
      ],
      series
    } as EChartsOption;
  }

  componentDidLoad() {
    setTimeout(() => {
      this.parsing = false;
      this.rendering = true;
      let initial = false;
      this.myChart = init(this.graph, null, {
        width: this.width,
        height: this.height
      });
      this.myChart.on('finished', () => {
        this.rendering = false;
        if (initial) {
          setTimeout(() => this.draw.emit());
          initial = false;
        }
      });
      this.myChart.on('mouseover', (event: any) => {
        this.dataPointOver.emit({date: event.value[0], name: event.seriesName, value: event.value[1], meta: {}});
      });
      this.myChart.on('dataZoom', (event: any) => {
        const {start, end} = (event.batch || [])[0] || {};
        if (start && end) {
          const dataZoom = this.myChart.getOption().dataZoom[1];
          this.dataZoom.emit({start, end, min: dataZoom.startValue, max: dataZoom.endValue});
        }
      });
      this.el.addEventListener('mouseover', () => this.hasFocus = true);
      this.el.addEventListener('mouseout', () => this.hasFocus = false);
      initial = true;
      this.myChart.setOption(this.chartOpts || {});
    });
  }

  @Method()
  async setZoom(dataZoom: { start: number, end: number }) {
    if (this.myChart) {
      this.myChart.dispatchAction({type: 'dataZoom', ...dataZoom});
    }
  }

  @Method()
  async export(type: 'png' | 'svg' = 'png') {
    return this.myChart ? this.myChart.getDataURL({type, excludeComponents: ['toolbox']}) : undefined;
  }

  @Method()
  async setFocus(regexp: string, ts: number) {
    if (!this.myChart || this.gtsList.length === 0) return;
    if (typeof ts === 'string') ts = parseInt(ts, 10);
    let ttp = [];
    const date = this.innerOptions.timeMode === 'date'
      ? ts / this.divider
      : ts;
    let seriesIndex = 0;
    let dataIndex = 0;
    if (!!regexp) {
      (this.chartOpts.series as any[])
        .filter(s => new RegExp(regexp).test(s.name))
        .forEach(s => {
          seriesIndex = (this.chartOpts.series as any[]).indexOf(s);
          const data = s.data.filter(d => d[0] === date);
          if (data && data[0]) {
            dataIndex = s.data.indexOf(data[0])
            s.markPoint = {
              symbol: 'rect',
              symbolSize: [4, 30],
              data: [{
                name: s.name,
                itemStyle: {
                  color: '#fff',
                  borderColor: s.itemStyle.color,
                },
                yAxis: data[0][1],
                xAxis: date
              }]
            }
            ttp = [date, data[0][1]]
          }
        });
      this.myChart.dispatchAction({
        type: 'highlight',
        seriesName: (this.chartOpts.series as any[]).filter(s => new RegExp(regexp).test(s.name)).map(s => s.name)
      });
    }
    (this.chartOpts.xAxis as any).axisPointer = {
      ...(this.chartOpts.xAxis as any).axisPointer || {},
      value: date,
      status: 'show'
    };
    (this.chartOpts.tooltip as any).show = true;
    if (ttp.length > 0) {
      this.myChart.dispatchAction({type: 'showTip', dataIndex, seriesIndex});
    } else {
      this.myChart.dispatchAction({type: 'hideTip'});
    }
    setTimeout(() => this.myChart.setOption(this.chartOpts || {}));
  }

  @Method()
  async unFocus() {
    if (!this.myChart) return;
    (this.chartOpts.series as any[]).forEach(s => s.markPoint = undefined);
    (this.chartOpts.xAxis as any).axisPointer = {
      ...(this.chartOpts.xAxis as any).axisPointer || {},
      status: 'hide'
    };

    (this.chartOpts.yAxis as any).axisPointer = {
      ...(this.chartOpts.yAxis as any).axisPointer || {},
      status: 'hide'
    };
    this.myChart.dispatchAction({type: 'hideTip'});
    setTimeout(() => this.myChart.setOption(this.chartOpts || {}));
  }

  private hideMarkers() {
    if (!this.myChart) return;
    (this.chartOpts.series as any[]).forEach(s => s.markPoint = undefined);
    setTimeout(() => this.myChart.setOption(this.chartOpts || {}));
  }

  render() {
    return <Host style={{width: this.width + 'px', height: (this.height + (this.expanded ? 50 : 0)) + 'px'}}>
      {this.displayExpander
        ?
        <button class="expander" onClick={() => this.toggle()} title="collapse/expand">+/-</button>
        : ''}
      <div class="chart-area"
           style={{
             width: this.width + 'px',
             height: (this.height + (!!this.innerOptions.showLegend ? 50 : 0) + (!!this.innerOptions.fullDateDisplay ? 50 : 0)) + 'px'
           }}>
        {this.parsing ? <div class="discovery-chart-spinner">
          <discovery-spinner>Parsing data...</discovery-spinner>
        </div> : ''}
        {this.rendering ? <div class="discovery-chart-spinner">
          <discovery-spinner>Rendering data...</discovery-spinner>
        </div> : ''}
        <div ref={(el) => this.graph = el as HTMLDivElement} onMouseOver={() => this.hideMarkers()}/>
      </div>
    </Host>
  }

  private toggle() {
    this.expanded = !this.expanded;
    this.chartOpts = this.convert(this.result as DataModel || new DataModel())
    setTimeout(() => {
      this.myChart.resize({
        width: this.width,
        height: this.height,
      });
      this.myChart.setOption(this.chartOpts || {})
    });
  }
}
