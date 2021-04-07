/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DataModel } from "./model/dataModel";
import { ChartType } from "./model/types";
import { Param } from "./model/param";
export namespace Components {
    interface DiscoveryAnnotation {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryBar {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryButton {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "url": string;
        "width": number;
    }
    interface DiscoveryDashboard {
        "autoRefresh": number;
        "cellHeight": number;
        "cols": number;
        "dashboardTitle": string;
        "debug": boolean;
        "options": Param | string;
        "url": string;
    }
    interface DiscoveryDisplay {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryGauge {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryImage {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryLine {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryMap {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "width": number;
    }
    interface DiscoveryPageable {
        "data": { name: string, values: any[], headers: string[] };
        "debug": boolean;
        "elemsCount": number;
        "options": Param;
        "windowed": number;
    }
    interface DiscoveryPie {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoverySpinner {
        "message": string;
    }
    interface DiscoveryTabular {
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "type": ChartType;
        "unit": string;
        "width": number;
    }
    interface DiscoveryTile {
        "autoRefresh": number;
        "chartTitle": string;
        "debug": boolean;
        "language": 'warpscript' | 'flows';
        "options": Param | string;
        "type": ChartType;
        "unit": string;
        "url": string;
    }
    interface DiscoveryTileResult {
        "chartTitle": string;
        "debug": boolean;
        "height": number;
        "options": Param | string;
        "result": DataModel | string;
        "start": number;
        "type": ChartType;
        "unit": string;
        "url": string;
        "width": number;
    }
}
declare global {
    interface HTMLDiscoveryAnnotationElement extends Components.DiscoveryAnnotation, HTMLStencilElement {
    }
    var HTMLDiscoveryAnnotationElement: {
        prototype: HTMLDiscoveryAnnotationElement;
        new (): HTMLDiscoveryAnnotationElement;
    };
    interface HTMLDiscoveryBarElement extends Components.DiscoveryBar, HTMLStencilElement {
    }
    var HTMLDiscoveryBarElement: {
        prototype: HTMLDiscoveryBarElement;
        new (): HTMLDiscoveryBarElement;
    };
    interface HTMLDiscoveryButtonElement extends Components.DiscoveryButton, HTMLStencilElement {
    }
    var HTMLDiscoveryButtonElement: {
        prototype: HTMLDiscoveryButtonElement;
        new (): HTMLDiscoveryButtonElement;
    };
    interface HTMLDiscoveryDashboardElement extends Components.DiscoveryDashboard, HTMLStencilElement {
    }
    var HTMLDiscoveryDashboardElement: {
        prototype: HTMLDiscoveryDashboardElement;
        new (): HTMLDiscoveryDashboardElement;
    };
    interface HTMLDiscoveryDisplayElement extends Components.DiscoveryDisplay, HTMLStencilElement {
    }
    var HTMLDiscoveryDisplayElement: {
        prototype: HTMLDiscoveryDisplayElement;
        new (): HTMLDiscoveryDisplayElement;
    };
    interface HTMLDiscoveryGaugeElement extends Components.DiscoveryGauge, HTMLStencilElement {
    }
    var HTMLDiscoveryGaugeElement: {
        prototype: HTMLDiscoveryGaugeElement;
        new (): HTMLDiscoveryGaugeElement;
    };
    interface HTMLDiscoveryImageElement extends Components.DiscoveryImage, HTMLStencilElement {
    }
    var HTMLDiscoveryImageElement: {
        prototype: HTMLDiscoveryImageElement;
        new (): HTMLDiscoveryImageElement;
    };
    interface HTMLDiscoveryLineElement extends Components.DiscoveryLine, HTMLStencilElement {
    }
    var HTMLDiscoveryLineElement: {
        prototype: HTMLDiscoveryLineElement;
        new (): HTMLDiscoveryLineElement;
    };
    interface HTMLDiscoveryMapElement extends Components.DiscoveryMap, HTMLStencilElement {
    }
    var HTMLDiscoveryMapElement: {
        prototype: HTMLDiscoveryMapElement;
        new (): HTMLDiscoveryMapElement;
    };
    interface HTMLDiscoveryPageableElement extends Components.DiscoveryPageable, HTMLStencilElement {
    }
    var HTMLDiscoveryPageableElement: {
        prototype: HTMLDiscoveryPageableElement;
        new (): HTMLDiscoveryPageableElement;
    };
    interface HTMLDiscoveryPieElement extends Components.DiscoveryPie, HTMLStencilElement {
    }
    var HTMLDiscoveryPieElement: {
        prototype: HTMLDiscoveryPieElement;
        new (): HTMLDiscoveryPieElement;
    };
    interface HTMLDiscoverySpinnerElement extends Components.DiscoverySpinner, HTMLStencilElement {
    }
    var HTMLDiscoverySpinnerElement: {
        prototype: HTMLDiscoverySpinnerElement;
        new (): HTMLDiscoverySpinnerElement;
    };
    interface HTMLDiscoveryTabularElement extends Components.DiscoveryTabular, HTMLStencilElement {
    }
    var HTMLDiscoveryTabularElement: {
        prototype: HTMLDiscoveryTabularElement;
        new (): HTMLDiscoveryTabularElement;
    };
    interface HTMLDiscoveryTileElement extends Components.DiscoveryTile, HTMLStencilElement {
    }
    var HTMLDiscoveryTileElement: {
        prototype: HTMLDiscoveryTileElement;
        new (): HTMLDiscoveryTileElement;
    };
    interface HTMLDiscoveryTileResultElement extends Components.DiscoveryTileResult, HTMLStencilElement {
    }
    var HTMLDiscoveryTileResultElement: {
        prototype: HTMLDiscoveryTileResultElement;
        new (): HTMLDiscoveryTileResultElement;
    };
    interface HTMLElementTagNameMap {
        "discovery-annotation": HTMLDiscoveryAnnotationElement;
        "discovery-bar": HTMLDiscoveryBarElement;
        "discovery-button": HTMLDiscoveryButtonElement;
        "discovery-dashboard": HTMLDiscoveryDashboardElement;
        "discovery-display": HTMLDiscoveryDisplayElement;
        "discovery-gauge": HTMLDiscoveryGaugeElement;
        "discovery-image": HTMLDiscoveryImageElement;
        "discovery-line": HTMLDiscoveryLineElement;
        "discovery-map": HTMLDiscoveryMapElement;
        "discovery-pageable": HTMLDiscoveryPageableElement;
        "discovery-pie": HTMLDiscoveryPieElement;
        "discovery-spinner": HTMLDiscoverySpinnerElement;
        "discovery-tabular": HTMLDiscoveryTabularElement;
        "discovery-tile": HTMLDiscoveryTileElement;
        "discovery-tile-result": HTMLDiscoveryTileResultElement;
    }
}
declare namespace LocalJSX {
    interface DiscoveryAnnotation {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryBar {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryButton {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "onExecResult"?: (event: CustomEvent<any[]>) => void;
        "onStatusError"?: (event: CustomEvent<any>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "url"?: string;
        "width"?: number;
    }
    interface DiscoveryDashboard {
        "autoRefresh"?: number;
        "cellHeight"?: number;
        "cols"?: number;
        "dashboardTitle"?: string;
        "debug"?: boolean;
        "onStatusError"?: (event: CustomEvent<any>) => void;
        "onStatusHeaders"?: (event: CustomEvent<string[]>) => void;
        "options"?: Param | string;
        "url"?: string;
    }
    interface DiscoveryDisplay {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryGauge {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryImage {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryLine {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryMap {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "width"?: number;
    }
    interface DiscoveryPageable {
        "data"?: { name: string, values: any[], headers: string[] };
        "debug"?: boolean;
        "elemsCount"?: number;
        "options"?: Param;
        "windowed"?: number;
    }
    interface DiscoveryPie {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoverySpinner {
        "message"?: string;
    }
    interface DiscoveryTabular {
        "debug"?: boolean;
        "height"?: number;
        "onDraw"?: (event: CustomEvent<void>) => void;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "type"?: ChartType;
        "unit"?: string;
        "width"?: number;
    }
    interface DiscoveryTile {
        "autoRefresh"?: number;
        "chartTitle"?: string;
        "debug"?: boolean;
        "language"?: 'warpscript' | 'flows';
        "onStatusError"?: (event: CustomEvent<any>) => void;
        "onStatusHeaders"?: (event: CustomEvent<string[]>) => void;
        "options"?: Param | string;
        "type"?: ChartType;
        "unit"?: string;
        "url"?: string;
    }
    interface DiscoveryTileResult {
        "chartTitle"?: string;
        "debug"?: boolean;
        "height"?: number;
        "options"?: Param | string;
        "result"?: DataModel | string;
        "start"?: number;
        "type"?: ChartType;
        "unit"?: string;
        "url"?: string;
        "width"?: number;
    }
    interface IntrinsicElements {
        "discovery-annotation": DiscoveryAnnotation;
        "discovery-bar": DiscoveryBar;
        "discovery-button": DiscoveryButton;
        "discovery-dashboard": DiscoveryDashboard;
        "discovery-display": DiscoveryDisplay;
        "discovery-gauge": DiscoveryGauge;
        "discovery-image": DiscoveryImage;
        "discovery-line": DiscoveryLine;
        "discovery-map": DiscoveryMap;
        "discovery-pageable": DiscoveryPageable;
        "discovery-pie": DiscoveryPie;
        "discovery-spinner": DiscoverySpinner;
        "discovery-tabular": DiscoveryTabular;
        "discovery-tile": DiscoveryTile;
        "discovery-tile-result": DiscoveryTileResult;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "discovery-annotation": LocalJSX.DiscoveryAnnotation & JSXBase.HTMLAttributes<HTMLDiscoveryAnnotationElement>;
            "discovery-bar": LocalJSX.DiscoveryBar & JSXBase.HTMLAttributes<HTMLDiscoveryBarElement>;
            "discovery-button": LocalJSX.DiscoveryButton & JSXBase.HTMLAttributes<HTMLDiscoveryButtonElement>;
            "discovery-dashboard": LocalJSX.DiscoveryDashboard & JSXBase.HTMLAttributes<HTMLDiscoveryDashboardElement>;
            "discovery-display": LocalJSX.DiscoveryDisplay & JSXBase.HTMLAttributes<HTMLDiscoveryDisplayElement>;
            "discovery-gauge": LocalJSX.DiscoveryGauge & JSXBase.HTMLAttributes<HTMLDiscoveryGaugeElement>;
            "discovery-image": LocalJSX.DiscoveryImage & JSXBase.HTMLAttributes<HTMLDiscoveryImageElement>;
            "discovery-line": LocalJSX.DiscoveryLine & JSXBase.HTMLAttributes<HTMLDiscoveryLineElement>;
            "discovery-map": LocalJSX.DiscoveryMap & JSXBase.HTMLAttributes<HTMLDiscoveryMapElement>;
            "discovery-pageable": LocalJSX.DiscoveryPageable & JSXBase.HTMLAttributes<HTMLDiscoveryPageableElement>;
            "discovery-pie": LocalJSX.DiscoveryPie & JSXBase.HTMLAttributes<HTMLDiscoveryPieElement>;
            "discovery-spinner": LocalJSX.DiscoverySpinner & JSXBase.HTMLAttributes<HTMLDiscoverySpinnerElement>;
            "discovery-tabular": LocalJSX.DiscoveryTabular & JSXBase.HTMLAttributes<HTMLDiscoveryTabularElement>;
            "discovery-tile": LocalJSX.DiscoveryTile & JSXBase.HTMLAttributes<HTMLDiscoveryTileElement>;
            "discovery-tile-result": LocalJSX.DiscoveryTileResult & JSXBase.HTMLAttributes<HTMLDiscoveryTileResultElement>;
        }
    }
}
