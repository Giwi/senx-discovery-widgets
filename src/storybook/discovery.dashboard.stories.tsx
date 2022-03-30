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

import {Param} from "../model/param";
import {action, configureActions} from '@storybook/addon-actions';
import {ColorLib} from "../utils/color-lib";

configureActions({
  depth: 10,
// Limit the number of items logged into the actions panel
  limit: 5,
  allowFunction: true
});

// noinspection JSUnusedGlobalSymbols
export default {
  title: 'Dashboards/Dashboard',
  argTypes: {
    url: {control: 'text'},
    ws: {control: 'text'},
    title: {control: 'text'},
    options: {control: 'object'},
    onDraw: {action: 'clicked'}
  },
};

[
  'statusHeaders',
  'statusError',
  'execResult',
  'draw',
  'rendered',
].forEach(evt => window.addEventListener(evt, (e: CustomEvent) => action(evt)(e.detail)));

// @ts-ignore
const Template = ({url, ws, options, title, cols, cellHeight}) => `<div class="card" style="width: 100%;min-height: 500px">
<div class="card-body">
<discovery-dashboard url="${url}"
dashboard-title="${title ? title : ''}"
@draw="${event => console.error('foo', 'bar', event)}"
cols="${cols}" cell-height="${cellHeight}"
debug options='${JSON.stringify(options)}'
>${ws}</discovery-dashboard>
</div>
</div>`;

const KitchenSinkTemplate = ({url, ws, options, title, cellHeight}) => `
    <button id="pdf" class="btn btn-primary">PDF in new TAB</button>
<div class="card"  style="min-width: 100%;">
<div class="card-body">
<discovery-dashboard url="${url}"
id="dash"
dashboard-title="${title ? title : ''}"
@draw="${event => console.error('foo', 'bar', event)}"
cols="12" cell-height="${cellHeight}"
debug options='${JSON.stringify(options)}'
>${ws}</discovery-dashboard>
</div>
</div>
</div>
<!--suppress JSUnresolvedFunction -->
<script>
    const dash = document.getElementById('dash');
    document.getElementById('pdf').addEventListener('click', () => {
      dash.getPDF(false, 'blob').then(data => {
        console.log("PDF done");
       const file = new Blob([data.data], {type: 'application/pdf'});
       const fileURL = URL.createObjectURL(file);
       window.open(fileURL, data.filename);
      }).catch(e => console.error(e));
    });
</script>`;


export const KitchenSink = KitchenSinkTemplate.bind({});
KitchenSink.args = {
  url: 'https://warp.senx.io/api/v0/exec',
  type: 'dashboard',
  cellHeight: 120,
  ws: `{
  'title' 'My Dashboard'
  'description' 'Kitchen Sink'
  'tiles' [
    { 'type' 'display' 'data' 'Charts' 'x' 0 'y' 0 'w' 12 'h' 1 }
    {
      'type' 'line'
      'title' 'line'
      'x' 0 'y' 1 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'area'
      'title' 'area'
      'x' 4 'y' 1 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'scatter'
      'title' 'scatter'
      'x' 8 'y' 1 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'step-area'
      'title' 'step-area'
      'x' 0 'y' 3 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'spline-area'
      'title' 'spline-area'
      'x' 4 'y' 3 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'spline'
      'title' 'spline'
      'x' 8 'y' 3 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'step'
      'title' 'step'
      'x' 0 'y' 5 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'step-before'
      'title' 'step-before'
      'x' 4 'y' 5 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'step-after'
      'title' 'step-after'
      'x' 8 'y' 5 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'annotation'
      'title' 'annotation'
      'x' 0 'y' 7 'w' 4 'h' 2
      'macro' <% 1 4 <% DROP NEWGTS 'g' STORE
  1 10 <% 'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN T ADDVALUE DROP %> FOR
  $g %> FOR %>
    }
    {
      'type' 'bar'
      'title' 'bar'
      'x' 4 'y' 7 'w' 4 'h' 2
      'macro' <% NOW 'now' STORE
1 4 <% 'i' STORE NEWGTS 'data-' $i TOSTRING + RENAME  'g' STORE
  1 10 <% 'ts' STORE $g $now $ts STU * - NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g
%> FOR %>
    }
    {
      'type' 'gauge'
      'title' 'gauge'
      'x' 8 'y' 7 'w' 4 'h' 2
      'data' { 'data' RAND 100 * ROUND 'params' [ { 'maxValue' 100 } ] }
    }
    {
      'type' 'circle'
      'title' 'circle'
      'x' 0 'y' 9 'w' 4 'h' 2
      'data' { 'data' RAND 100 * ROUND 'params' [ { 'maxValue' 100 } ] }
    }
    {
      'type' 'compass'
      'title' 'compass'
      'x' 4 'y' 9 'w' 4 'h' 2
      'data' { 'data' RAND 100 * ROUND 'params' [ { 'maxValue' 100 } ] }
    }
    {
      'type' 'linear-gauge'
      'title' 'linear-gauge'
      'x' 8 'y' 9 'w' 4 'h' 2
      'data' { 'data' 42 'params' [ { 'maxValue' 100 } ] }
    }
    {
      'type' 'pie'
      'title' 'pie'
      'x' 0 'y' 11 'w' 4 'h' 2
      'macro' <% 0 2 <% 'j' STORE
    NEWGTS 'serie' $j TOSTRING + RENAME NOW NaN NaN NaN RAND ADDVALUE
%> FOR %>
    }
    {
      'type' 'doughnut'
      'title' 'doughnut'
      'x' 4 'y' 11 'w' 4 'h' 2
      'macro' <% 0 2 <% 'j' STORE
    NEWGTS 'serie' $j TOSTRING + RENAME NOW NaN NaN NaN RAND ADDVALUE
%> FOR %>
    }
    {
      'type' 'rose'
      'title' 'rose'
      'x' 8 'y' 11 'w' 4 'h' 2
      'macro' <% 0 2 <% 'j' STORE
    NEWGTS 'serie' $j TOSTRING + RENAME NOW NaN NaN NaN RAND ADDVALUE
%> FOR %>
    }

    { 'type' 'display' 'data' 'Displays' 'x' 0 'y' 13 'w' 12 'h' 1 }
    {
      'type' 'display'
      'title' 'display'
      'x' 0 'y' 14 'w' 4 'h' 2
      'data' RAND 100 * ROUND
    }
    {
      'type' 'image'
      'title' 'image'
      'x' 4 'y' 14 'w' 4 'h' 2
      'macro' <% 300 200 '2D3' PGraphics
255 Pbackground
16 PtextSize

50 'x1' STORE
50 'y1' STORE
200 'x2' STORE
130 'y2' STORE

100 'cx1' STORE
40 'cy1' STORE

110 'cx2' STORE
140 'cy2' STORE


4 PstrokeWeight
$x1 $y1 Ppoint //first anchor
$x2 $y2 Ppoint //second anchor

2 PstrokeWeight
$x1 $y1 $cx1 $cy1 Pline
$x2 $y2 $cx2 $cy2 Pline

2 PstrokeWeight
0xffff0000 Pstroke
$x1 $y1 $cx1 $cy1 $cx2 $cy2 $x2 $y2 Pbezier

0 10
<%
10.0 / 't' STORE

$x1 $cx1 $cx2 $x2 $t PbezierPoint 'x' STORE
$y1 $cy1 $cy2 $y2 $t PbezierPoint 'y' STORE
$x1 $cx1 $cx2 $x2 $t PbezierTangent 'tx' STORE
$y1 $cy1 $cy2 $y2 $t PbezierTangent 'ty' STORE
$ty $tx ATAN2 PI 2.0 / - 'angle' STORE
0xff009f00 Pstroke
$x
$y
$x $angle COS 12 * +
$y $angle SIN 12 * +
Pline

0x9f009f00 Pfill
PnoStroke
'CENTER' PellipseMode
$x $y 5 5 Pellipse
%> FOR
Pencode %>
    }
    {
      'type' 'svg'
      'title' 'svg'
      'x' 8 'y' 14 'w' 4 'h' 2
      'macro' <%
     @xav/nuclear
             %>
    }
    {
      'type' 'tabular'
      'title' 'tabular'
      'x' 0 'y' 16 'w' 6 'h' 2
      'macro' <% 0 2 <% 'j' STORE
  NEWGTS 'serie' $j TOSTRING + RENAME 'g' STORE
  1 1000 <%
    'ts' STORE
    NOW $ts STU * 50.0 / - 'ts' STORE
    $g $ts NaN NaN NaN $ts 50 * STU / 60.0 / SIN ADDVALUE DROP %> FOR
  $g
%> FOR %>
    }
    {
      'type' 'calendar'
      'title' 'calendar'
      'x' 6 'y' 16 'w' 6 'h' 2
      'macro' <% NEWGTS 'serie' RENAME 'g' STORE
   1 500 <% 'i' STORE $g NOW $i d - NaN NaN NaN RAND ADDVALUE DROP %> FOR
   $g SORT %>
    }
    { 'type' 'display' 'data' 'Maps' 'x' 0 'y' 18 'w' 12 'h' 1 }
    {
      'type' 'map'
      'title' 'map'
      'x' 0 'y' 19 'w' 6 'h' 4
      'macro' <% NEWGTS 'g' STORE
1 6 <% 'ts' STORE $g $ts RAND 30 * RAND 30 * RAND RAND ADDVALUE DROP %> FOR
$g %>
    }
    {
      'type' 'marauder'
      'title' 'marauder'
      'x' 6 'y' 19 'w' 6 'h' 4
      'macro' <%  'yaw2XlsczxtKdzZpxYA5DXvE0w9sRQHjJPnyJ2MVZrjf1HK7bH82rkVfuhdkxYuLT1kGGC6DpsFskCTfReqgVsN4nFbpZqLlmgDRncN9oJtEHTkYMDDiQADNpyE5OHww90Ia3SYge3ORSk.NwvjOX.' 'token' STORE
  $token AUTHENTICATE
  20000000 LIMIT
  100000000 MAXOPS
  2000000 MAXPIXELS
  [ $token 'fr.trains' {  } NOW 12 h ] FETCH
  [ 1 ] { 1 'train' } MVINDEXSPLIT FLATTEN ->GTS VALUELIST FLATTEN [ 0 50 ] SUBLIST 'data' STORE
  {
    'data' $data
    'globalParams' {
      'map' {
        'step' 10 m
        'delay' 1000 // ms
      }
    }
  } %>
    }
    { 'type' 'display' 'data' 'Inputs' 'x' 0 'y' 23 'w' 12 'h' 1 }
    {
      'type' 'input:text'
      'title' 'input:text'
      'x' 0 'y' 24 'w' 4 'h' 1
      'macro' <% { 'data' 'Hello' } %>
    }
    {
      'type' 'input:secret'
      'title' 'input:secret'
      'x' 4 'y' 24 'w' 4 'h' 1
      'macro' <% { 'data' 'Hello' } %>
    }
    {
      'type' 'input:list'
      'title' 'input:list'
      'x' 8 'y' 24 'w' 4 'h' 1
      'macro' <%
      {
        'data' [ "admiring" "adoring" "agitated" "amazing" "angry" "awesome" "backstabbing" "berserk" "big" "boring" "clever" "cocky" "compassionate" "condescending" "cranky" "desperate" "determined" "distracted" "dreamy" "drunk" "ecstatic" "elated" "elegant" "evil" "fervent" "focused" "furious" "gigantic" "gloomy" "goofy" "grave" "happy" "high" "hopeful" "hungry" "insane" "jolly" "jovial" "kickass" "lonely" "loving" "mad" "modest" "naughty" "nauseous" "nostalgic" "pedantic" "pensive" "prickly" "reverent" "romantic" "sad" "serene" "sharp" "sick" "silly" "sleepy" "small" "stoic" "stupefied" "suspicious" "tender" "thirsty" "tiny" "trusting"  ]
        'globalParams' { 'input' { 'value' 'cranky' } }
      }
      %>
    }
    {
      'type' 'input:autocomplete'
      'title' 'input:autocomplete'
      'x' 0 'y' 25 'w' 4 'h' 1
      'macro' <%
      {
        'data' [ "admiring" "adoring" "agitated" "amazing" "angry" "awesome" "backstabbing" "berserk" "big" "boring" "clever" "cocky" "compassionate" "condescending" "cranky" "desperate" "determined" "distracted" "dreamy" "drunk" "ecstatic" "elated" "elegant" "evil" "fervent" "focused" "furious" "gigantic" "gloomy" "goofy" "grave" "happy" "high" "hopeful" "hungry" "insane" "jolly" "jovial" "kickass" "lonely" "loving" "mad" "modest" "naughty" "nauseous" "nostalgic" "pedantic" "pensive" "prickly" "reverent" "romantic" "sad" "serene" "sharp" "sick" "silly" "sleepy" "small" "stoic" "stupefied" "suspicious" "tender" "thirsty" "tiny" "trusting"  ]
        'globalParams' { 'input' { 'value' 'cranky' } }
      }
      %>
    }
    {
      'type' 'input:slider'
      'title' 'input:slider'
      'x' 0 'y' 26 'w' 4 'h' 1
      'macro' <%
      { 'data' 42 'globalParams' { 'input' { 'min' 0 'max' 50 } } }
      %>
    }
    {
      'type' 'input:multi'
      'title' 'input:multi'
      'x' 4 'y' 25 'w' 4 'h' 2
      'macro' <%
      {
        'data' [ "admiring" "adoring" "agitated" "amazing" "angry" "awesome" "backstabbing" "berserk" "big" "boring" "clever" "cocky" "compassionate" "condescending" "cranky" "desperate" "determined" "distracted" "dreamy" "drunk" "ecstatic" "elated" "elegant" "evil" "fervent" "focused" "furious" "gigantic" "gloomy" "goofy" "grave" "happy" "high" "hopeful" "hungry" "insane" "jolly" "jovial" "kickass" "lonely" "loving" "mad" "modest" "naughty" "nauseous" "nostalgic" "pedantic" "pensive" "prickly" "reverent" "romantic" "sad" "serene" "sharp" "sick" "silly" "sleepy" "small" "stoic" "stupefied" "suspicious" "tender" "thirsty" "tiny" "trusting"  ]
        'globalParams' { 'input' { 'value' [ 'cranky' 'angry' ] } }
      }
      %>
    }
    {
      'type' 'input:multi-cb'
      'title' 'input:multi-cb'
      'x' 8 'y' 25 'w' 4 'h' 2
      'macro' <%
      {
        'data' [ "admiring" "adoring" "agitated" "amazing" "angry" "awesome" "backstabbing" "berserk" "big" "boring" "clever" "cocky" "compassionate" "condescending" "cranky" "desperate" "determined" "distracted" "dreamy" "drunk" "ecstatic" "elated" "elegant" "evil" "fervent" "focused" "furious" "gigantic" "gloomy" "goofy" "grave" "happy" "high" "hopeful" "hungry" "insane" "jolly" "jovial" "kickass" "lonely" "loving" "mad" "modest" "naughty" "nauseous" "nostalgic" "pedantic" "pensive" "prickly" "reverent" "romantic" "sad" "serene" "sharp" "sick" "silly" "sleepy" "small" "stoic" "stupefied" "suspicious" "tender" "thirsty" "tiny" "trusting"  ]
        'globalParams' { 'input' { 'value' [ 'cranky' 'angry' ] } }
      }
      %>
    }
    {
      'type' 'input:date'
      'title' 'input:date'
      'x' 0 'y' 27 'w' 4 'h' 2
      'macro' <%
      {
        'data' NOW
      }
      %>
    }
    {
      'type' 'input:date-range'
      'title' 'input:date-range'
      'x' 4 'y' 27 'w' 4 'h' 2
      'macro' <%
      {
        'data' [ NOW 10 d - NOW ]
      }
      %>
    }
    {
      'type' 'button'
      'title' 'button'
      'x' 8 'y' 27 'w' 4 'h' 2
      'macro' <% 2 2 + %>
    }
  ]
}`
}

export const Usage = Template.bind({});
Usage.args = {
  url: 'https://warp.senx.io/api/v0/exec',
  cols: 8,
  type: 'dashboard',
  cellHeight: 220,
  ws: `{
  'title' 'My Dashboard'
  'description' 'Dashboard over 8 columns (default is 12)'

     'tiles' [
       {
         'type' 'display'
         'w' 2 'h' 1 'x' 3 'y' 0
         'data' 'Hello Discovery'
       }
        {
         'type' 'area'
         'w' 3 'h' 1 'x' 0 'y' 0
         'data' [
           NEWGTS 'data' RENAME
           0.0 'v' STORE
           1 500
           <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %>
           FOR
         ]
       }
        {
         'type' 'tabular'
         'title' 'Title'
         'w' 3 'h' 1 'x' 5 'y' 0
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'macro' <%
           NEWGTS 'serie' RENAME 'g' STORE
  1 16 <%
    'ts' STORE
    NOW $ts STU * 50.0 / - 'ts' STORE
    $g $ts NaN NaN NaN $ts 50 * STU / 60.0 / SIN ADDVALUE DROP %> FOR
  $g
         %>
       }
        {
         'type' 'annotation'
         'w' 8 'h' 1 'x' 0 'y' 2
         'options' { 'timeMode' 'timestamp' }
         'data' [
           NEWGTS 'annot1' RENAME 1 500 <% RAND 0.09 < <% NaN NaN NaN T ADDVALUE %> <% DROP %> IFTE %> FOR
           NEWGTS 'annot2' RENAME 1 500 <% RAND 0.09 < <% NaN NaN NaN T ADDVALUE %> <% DROP %> IFTE %> FOR
           NEWGTS 'annot3' RENAME 1 500 <% RAND 0.09 < <% NaN NaN NaN T ADDVALUE %> <% DROP %> IFTE %> FOR
         ]
       }
        {
          'type' 'circle'
          'unit' '%25'
          'w' 1 'h' 1 'x' 0 'y' 1
          'data'
            RAND 100 * ROUND 'v' STORE
  {
    'data' $v
    'params' [
      {
        'maxValue' 100
        'datasetColor'
        <% $v 33 < %> <% '#77BE69' %>
        <% $v 66 < %> <% '#FF9830' %>
        <% '#F24865' %> 2 SWITCH
      }
    ]
  }
       }
       {
          'type' 'display'
          'unit' '%25'
          'w' 1 'h' 1 'x' 1 'y' 1
          'data'
            RAND 100 * ROUND 'v' STORE
  {
    'data' $v
    'globalParams' {
      'bgColor'
      <% $v 33 < %> <% '#77BE69' %>
      <% $v 66 < %> <% '#FF9830' %>
      <% '#F24865' %> 2 SWITCH
      'timeMode' 'custom'
      'fontColor' 'white'
    }
  }
       }
       {
          'type' 'gauge'
          'unit' '%25'
          'w' 1 'h' 1 'x' 2 'y' 1
          'data'
            RAND 100 * ROUND 'v' STORE
  {
    'data' $v
    'params' [
      {
        'maxValue' 100
        'datasetColor'
        <% $v 33 < %> <% '#77BE69' %>
        <% $v 66 < %> <% '#FF9830' %>
        <% '#F24865' %> 2 SWITCH
      }
    ]
  }
       }
       {
         'type' 'bar'
         'w' 3 'h' 1 'x' 3 'y' 1
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'data' [
           NEWGTS 'data' RENAME
           0.0 'v' STORE
           1 5
           <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %>
           FOR
         ]
       }
       {
         'type' 'map'
         'w' 2 'h' 1 'x' 6 'y' 1
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'data'
           NEWGTS 'g' STORE
0 10 <% 'ts' STORE $g NOW $ts 10000 - * RAND 10 * RAND 10 * RAND RAND ADDVALUE DROP %> FOR
{
  'data' $g
  'globalParams' {
    'map' {
      'mapType' 'STADIA_DARK'
    }
  }
}
       }
     ]
   }`,
  options: new Param()
}


export const CustomStylePerTile = Template.bind({});
CustomStylePerTile.args = {
  ...Usage.args,
  ws: `
{
  'title' 'test'
  'tiles' [
    {
      'type' 'display'
      'x' 0 'y' 0 'w' 1 'h' 1
      'options' {
        'customStyles' {
          '.discovery-tile '
          <'
           --warp-view-bg-color: #FAFBFF linear-gradient(40deg, #3BBC7D, #1D434C);
           --warp-view-font-color: white;
          '>
        }
      }
      'data' 'A'
    }
    {
      'type' 'display'
      'x' 1 'y' 0 'w' 1 'h' 1
      'options' {
        'customStyles' {
          '.discovery-tile'
          <'
           background: radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%) !important;
            --warp-view-font-color: red;
          '>
        }
      }
      'data' 'B'
    }
  ]
}
  `
}

export const TileOverFlow = Usage.bind({});
TileOverFlow.args = {
  ...Usage.args,
  cols: 12,
  ws: `{
        'title' 'Covid Tracker'
        'cellHeight' 120
        'options' {
          'scheme' 'CHARTANA'
          'customStyles' {
            '.discovery-dashboard-main'
            <'
            --wc-split-gutter-color: #404040;
            --warp-view-pagination-bg-color: #343a40 !important;
            --warp-view-pagination-border-color: #6c757d;
            --warp-view-datagrid-odd-bg-color: rgba(255, 255, 255, .05);
            --warp-view-datagrid-odd-color: #FFFFFF;
            --warp-view-datagrid-even-bg-color: #212529;
            --warp-view-datagrid-even-color: #FFFFFF;
            --warp-view-font-color: #FFFFFF;
            --warp-view-chart-label-color: #FFFFFF;
            --gts-stack-font-color: #FFFFFF;
            --warp-view-resize-handle-color: #111111;
            --warp-view-chart-legend-bg: #000;
            --gts-labelvalue-font-color: #ccc;
            --gts-separator-font-color: #FFFFFF;
            --gts-labelname-font-color: rgb(105, 223, 184);
            --gts-classname-font-color: rgb(126, 189, 245);
            --warp-view-chart-legend-color: #FFFFFF;
            --wc-tab-header-color: #FFFFFF;
            --wc-tab-header-selected-color: #404040;
            --warp-view-tile-background: #40404066;
            --warp-view-font-color: #fff;
            font-size: 12px !important;
            background-color: #FAFBFF !important;
            line-height: 1.52 !important;
            background: linear-gradient(40deg, #3BBC7D, #1D434C) !important;
            '>
            }
         }
        'vars' {
            'token' 'zizNn2DCXw0qtsbWx_F4WvA9ORyQBAtDScaTVaGGqJ1f5DMhE1ijFr6JDQQhPncn1bE4WQZrUN.ZIaJtCl_SOlx9oZ8H0e83U3afcX.iUPodyj.vqSgjHgToKfeO1_ZaG5fNfi3e7l71mlmJhs8Fl.'
            'country' 'France'
            'mapping' {
                1 'total_cases'
                2 'new_cases'
                3 'new_cases_smoothed'
                4 'total_deaths'
                5 'new_deaths'
                6 'new_deaths_smoothed'
                7 'total_cases_per_million'
                8 'new_cases_per_million'
                9 'new_cases_smoothed_per_million'
                10 'total_deaths_per_million'
                11 'new_deaths_per_million'
                12 'new_deaths_smoothed_per_million'
                13 'reproduction_rate'
                14 'icu_patients'
                15 'icu_patients_per_million'
                16 'hosp_patients'
                17 'hosp_patients_per_million'
                18 'weekly_icu_admissions'
                19 'weekly_icu_admissions_per_million'
                20 'weekly_hosp_admissions'
                21 'weekly_hosp_admissions_per_million'
                22 'new_tests'
                23 'total_tests'
                24 'total_tests_per_thousand'
                25 'new_tests_per_thousand'
                26 'new_tests_smoothed'
                27 'new_tests_smoothed_per_thousand'
                28 'positive_rate'
                29 'tests_per_case'
                30 'tests_units'
                31 'total_vaccinations'
                32 'people_vaccinated'
                33 'people_fully_vaccinated'
                34 'new_vaccinations'
                35 'new_vaccinations_smoothed'
                36 'total_vaccinations_per_hundred'
                37 'people_vaccinated_per_hundred'
                38 'people_fully_vaccinated_per_hundred'
                39 'new_vaccinations_smoothed_per_millions'
                40 'tringency_index'
                41 'population'
                42 'population_density'
                43 'median_age'
                44 'aged_65_older'
                45 'aged_70_older'
                46 'gdp_per_capita'
                47 'extreme_poverty'
                48 'cardiovasc_death_rate'
                49 'diabetes_prevalence'
                50 'female_smokers'
                51 'male_smokers'
                52 'handwashing_facilities'
                53 'hospital_beds_per_thousand'
                54 'life_expectancy'
                55 'human_development_index'
                56 'excess_mortality'
              }
        }
        'tiles' [
            {
                'title' 'Country'
                'x' 0 'y' 0 'w' 2 'h' 1
                'type' 'input:autocomplete'
                'macro' <% [ $token '~.*' {} ] FINDSETS STACKTOLIST 1 GET 'country' GET LSORT 'data' STORE
                    {
                        'data' $data
                        'globalParams' { 'input' { 'value' $country } }
                        'events' [ { 'type' 'variable' 'tags' [ 'country' ] 'selector' 'country' }  ]
                    }
                %>
            }
            {
                'title' 'Deaths/Cases per million'
                'x' 2 'y' 0 'w' 3 'h' 2
                'type' 'area'
                'options' { 'eventHandler' 'type=(variable),tag=country' }
                'macro' <%
                    [ $token 'covid'  { 'country' $country }  NOW 365 d 5 * ] FETCH
                    [ 8 11 39 ] $mapping MVTICKSPLIT FLATTEN ->GTS VALUELIST FLATTEN
                    [ SWAP bucketizer.sum NOW 1 d 0 ] BUCKETIZE
                    [ SWAP mapper.mean 7 0 0 ] MAP
                    [ SWAP mapper.abs 0 0 0 ] MAP 'gts' STORE
                    [ $gts [] $mapping '8' GET filter.byclass ] FILTER [ SWAP [] reducer.sum ] REDUCE
                    [ $gts [] $mapping '11' GET filter.byclass ] FILTER [ SWAP [] reducer.sum ] REDUCE
                %>
            }
            {
                'title' 'Vaccination'
                'x' 5 'y' 0 'w' 3 'h' 2
                'type' 'area'
                'options' { 'eventHandler' 'type=(variable),tag=country' }
                'macro' <%
                    [ $token 'covid'  { 'country' $country }  NOW 365 d 5 * ] FETCH
                    [ 32 33 41 ] $mapping MVTICKSPLIT FLATTEN ->GTS VALUELIST FLATTEN
                    [ SWAP bucketizer.sum NOW 1 d 0 ] BUCKETIZE 'gts' STORE
                    [ $gts [] $mapping '32' GET filter.byclass ] FILTER [ SWAP [] reducer.sum ] REDUCE
                    [ $gts [] $mapping '33' GET filter.byclass ] FILTER [ SWAP [] reducer.sum ] REDUCE
                    [ $gts [] $mapping '41' GET filter.byclass ] FILTER [ SWAP [] reducer.sum ] REDUCE
                    STACKTOLIST 'data' STORE
                    { 'data' $data 'params' [ { 'type' 'area' } { 'type' 'area' } { 'type' 'line' } ] }
                %>
            }
            {
                'title' 'ICU patients'
                'x' 8 'y' 0 'w' 4 'h' 2
                'type' 'bar'
                'options' { 'eventHandler' 'type=(variable),tag=country' }
                'macro' <%
                    [ $token 'covid'  { 'country' $country }  NOW 365 d 5 * ] FETCH
                    [ 14 ] $mapping MVTICKSPLIT FLATTEN ->GTS VALUELIST FLATTEN
                    [ SWAP bucketizer.mean NOW 7 d 0 ] BUCKETIZE [ SWAP [] reducer.sum ] REDUCE
                %>
            }
            {
              'title' 'Deaths'
              'x' 0 'y' 1 'w' 2 'h' 1
              'type' 'display'
              'options' { 'eventHandler' 'type=(variable),tag=country' }
              'macro' <%
                [ $token 'covid'  { 'country' $country }  NOW -1 ] FETCH
                [ 4 ] MVTICKSPLIT 0 GET VALUES 0 GET 'v' STORE
                { 'data' [ $v ] 'globalParams' { 'timeMode' 'custom' } }
              %>
            }
            {
              'x' 4 'y' 2 'w' 8 'h' 4
              'options'  { 'scheme' 'CHARTANA' 'map'  { 'mapType' 'GRAYSCALE' } }
              'type' 'map'
              'macro' <%
                [ $token 'covid'  {}  NOW -1 ] FETCH
                [ 4 ] $mapping MVTICKSPLIT FLATTEN ->GTS VALUELIST FLATTEN 'data' STORE
                [] 'last' STORE
                $data <%
                  [ SWAP bucketizer.last NOW 0 1 ] BUCKETIZE 0 GET VALUES 0 GET 'lastValue' STORE
                  $last $lastValue +! DROP
                %> FOREACH
                $last MAX 'max' STORE
                [] 'params' STORE
                $data <%
                  $params {
                    'key' 'Total death'
                    'render' 'weightedDots'
                    "color" "#f44336cc"
                    "borderColor" "#f44336"
                    "maxValue" $max
                    "minValue" 0
                  } +! DROP
                %> FOREACH
                { 'data' $data 'params' $params 'globalParams' { "map" { "startZoom" 4 } } }
            %>
          }
          {
              'title' 'Deaths per million top 10 countries'
              'x' 0 'y' 2 'w' 4 'h' 4
              'type' 'rose'
              'options' { 'eventHandler' 'type=(variable),tag=country' }
              'macro' <%
                [ $token 'covid'  { 'country' $country }  ] FINDSETS STACKTOLIST 1 GET 'continent' GET 0 GET 'continent' STORE
                [ $token 'covid'  { 'continent' $continent }  NOW -1 ] FETCH [ 10 ] $mapping MVTICKSPLIT FLATTEN  <%
                  'g' STORE $g LABELS 'country' GET 'c' STORE $g $c RENAME { NULL NULL } RELABEL
                %> F LMAP
                <%
                  [ 'a' 'b' ] STORE
                  <% $a VALUES 0 GET $b VALUES 0 GET > %>
                  <% -1 %> <% 1 %> IFTE
                %> SORTWITH  [ 0 10 ] SUBLIST
              %>
            }
        ]
    }`
}

export const CustomStyle = ({url, ws, options, title}) => `<div>
<style>
:root {
    --warp-view-chart-grid-color: blue;
    --warp-view-chart-label-color: red;
    --warp-view-font-color: white;
    --warp-view-tile-border: none;
    --warp-view-tile-shadow: none;
    }
</style>
    <div class="card" style="width: 100%;min-height: 500px; background-color: #404040">
        <div class="card-body">
            <discovery-dashboard url="${url}"
                dashboard-title="${title ? title : ''}" cols="8"
                @draw="${event => console.error('foo', 'bar', event)}"
                debug options='${JSON.stringify(options)}'
            >${ws}</discovery-dashboard>
        </div>
    </div>
</div>
`;
CustomStyle.args = {
  ...Usage.args,
  options: {...Usage.args.options, scheme: 'BELIZE'}
}

export const withAutoRefresh = Usage.bind({});
withAutoRefresh.args = {
  ...Usage.args,
  ws: `{
  'title' 'Discovery test'
  'description' 'little test dashboard'
  'options' { 'autoRefresh' 5 }
  'tiles' [    // Tiles here
    {
      'title' 'FLoWS test'
      'x' 0 'y' 0 'w' 10 'h' 2
      'type' 'area'
      'macro' <%
        // FLoWS here
        <'
        g = NEWGTS()
        RENAME(g, "test")
        FOR(0, 100, (i) => {
        ADDVALUE(g, i, NaN, NaN, NaN, SIN(i / 5.0 + RAND()));
        });
        return g
        '>
        FLOWS

      %>
    }
  ]
}`,
  options: {autoRefresh: 5}
}

export const tileRefresh = Usage.bind({});
tileRefresh.args = {
  ...Usage.args,
  ws: `{
  'title' 'Discovery tileRefresh'
  'tiles' [
    {
      'x' 0 'y' 0 'w' 10 'h' 2
      'type' 'area'
      'options' { 'autoRefresh' 1 }
      'macro' <%
        NEWGTS 'data' RENAME 'gts' STORE
        NOW  'now' STORE
        $now 10 s - $now
        <% 200 ms + %>
        <%
          'i' STORE
          $i 1e-6 * SIN 'v' STORE
          $gts $i RAND 10.0 * RAND 10.0 * NaN $v ADDVALUE DROP
        %> FORSTEP
        $gts SORT 'data' STORE
        { 'data' $data 'globalParams' { 'type' <% $now 1 s / 2 % 0 == %> <% 'scatter' %> <% 'area' %> IFTE } }
      %>
    }
  ]
}`,
  options: new Param()
}
export const tileRefreshAndEvents = Usage.bind({});
tileRefreshAndEvents.args = {
  ...Usage.args,
  ws: `{
  'title' 'Discovery tileRefresh'
  'cellHeight' 50
  'vars' {
    'dataset' [ NEWGTS ] WRAP
  }
  'tiles' [
    {
      'x' 3 'y' 0 'w' 2 'h' 1
      'type' 'display'
      'endpoint' 'wss://warp.senx.io/api/v0/mobius' // Uses WebSockets
      'options' { 'autoRefresh' 1000 }
      'macro' <%
        NEWGTS 'data' RENAME 'gts' STORE
        NOW  'now' STORE
        $now 10 s - $now
        <% 200 ms + %>
        <%
          'i' STORE
          $i 1e-6 * SIN 'v' STORE
          $gts $i RAND 10.0 * RAND 10.0 * NaN $v ADDVALUE DROP
        %> FORSTEP
        $gts SORT 'data' STORE
        {
          'data' NOW ISO8601
          'events' [ { 'type' 'variable' 'tags' 'dataset' 'value' { 'dataset' $data WRAP } } ]
        }
      %>
    }
    {
      'type' 'area'
      'x' 0 'y' 1 'w' 8 'h' 4
      'options' { 'unit' '%25' 'eventHandler' 'type=variable,tag=dataset' }
      'macro' <% $dataset UNWRAP %>
    }
  ]
}`,
  options: new Param()
}

export const tileFocusEvents = Usage.bind({});
tileFocusEvents.args = {
  ...Usage.args,
  ws: `{
  'title' 'Discovery focus'
  'cellHeight' 50
  'vars' {
    'NOW' NOW
    'start' [ 2021 01 01 ] TSELEMENTS->
     'end' [ 2021 02 01 ] TSELEMENTS->
  }
  'tiles' [
    {
      'x' 3 'y' 0 'w' 2 'h' 1
      'type' 'display'
      'endpoint' 'wss://warp.senx.io/api/v0/mobius' // Uses WebSockets
      'options' { 'autoRefresh' 1000 }
      'macro' <%
           NOW $NOW - 1 s / 1 +  'd' STORE
           $end $start $d d + MIN 'val' STORE
        {
          'data' $val ISO8601
          'events' [
            { 'type' 'focus' 'tags' 'dataset' 'value' { 'date' $val 'name' '.*'  } }
          ]
        }
      %>
    }
    {
      'type' 'area'
      'x' 0 'y' 1 'w' 8 'h' 4
      'options' { 'unit' '%25' 'eventHandler' 'type=focus,tag=dataset' }
      'macro' <%
          NEWGTS 'data' RENAME 'g' STORE
          $start $end <% 1 d + %> <%
            'i' STORE
            $g $i NaN NaN NaN RAND 100.0 * ROUND ADDVALUE DROP
          %> FORSTEP
          $g
       %>
    }
  ]
}`,
  options: new Param()
}

export const withWebSocket = Usage.bind({});
withWebSocket.args = {
  ...Usage.args,
  ws: `{
  'title' 'Discovery WebSocket'
  'description' 'little test dashboard'
  'tiles' [    // Tiles here
    {
      'title' 'WebSocket test'
      'x' 0 'y' 0 'w' 10 'h' 2
      'type' 'area'
      'options' { 'autoRefresh' 200 }
      'endpoint' 'wss://warp.senx.io/api/v0/mobius'
      'macro' <%
        NEWGTS 'data' RENAME 'gts' STORE
        NOW  'now' STORE
        $now 10 s - $now
        <% 200 ms + %>
        <%
          'i' STORE
          $i 1e-6 * SIN 'v' STORE
          $gts $i RAND 10.0 * RAND 10.0 * NaN $v ADDVALUE DROP
        %> FORSTEP
        $gts SORT 'data' STORE
        { 'data' $data 'globalParams' { 'type' <% $now 1 s / 2 % 0 == %> <% 'scatter' %> <% 'area' %> IFTE } }
      %>
    }
  ]
}`,
  options: new Param()
}
export const polymorphic = Usage.bind({});
polymorphic.args = {
  ...Usage.args,
  cols: 12,
  cellHeight: 110,
  ws: `
  RAND 100 * ROUND 'value' STORE
  {
  'title' 'My Polymorphic Dashboard'
  'description' 'Change over a random value each 10 seconds with 1 second tile refresh'
     'tiles' [
       {
         'type' 'area'
         'w' 6 'h' 3 'x' 0 'y' 2
         'data' { 'data' [
           NEWGTS 'data' RENAME
           0.0 'v' STORE
           1 500
           <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %>
           FOR
         ] 'params' [ {
      'datasetColor'
      <% $value 33 < %> <% '#77BE69' %>
      <% $value 66 < %> <% '#FF9830' %>
      <% '#F24865' %> 2 SWITCH
    } ]
         }
       }
       {
       'type' 'rose'
       'w' 2 'h' 2 'x' 1 'y' 0
         'options' { 'scheme' 'ECTOPLASM'  'autoRefresh' 1 }
       'macro' <% NOW 'now' STORE
1 4 <% 'i' STORE NEWGTS 'serie #' $i TOSTRING + RENAME 'g' STORE
  1 10 <% 'ts' STORE $g $now $ts STU * - NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g
%> FOR %>
}
       <% $value 50.0 <= %>
       <%
       {
         'type' 'line'
         'title' 'Value <= 50'
         'w' 5 'h' 2 'x' 3 'y' 0
         'options' {  'autoRefresh' 1 }
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'macro' <%
           NEWGTS 'macro' RENAME
           0.0 'v' STORE
           1 500
           <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %>
           FOR
         %>
       }
        {
         'type' 'scatter'
         'title' 'Value <= 50'
         'options' { 'scheme' 'ECTOPLASM' 'autoRefresh' 1 }
         'w' 5 'h' 2 'x' 8 'y' 0
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'macro' <%  NEWGTS 0.0 'v' STORE 1 50 <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %> FOR %>
       }
       %>
       <%
       {
         'type' 'bar'
         'title' 'Value > 50'
         'w' 9 'h' 2 'x' 3 'y' 0
         'options' { 'scheme' 'CTHULHU'  'autoRefresh' 1 }
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'macro' <%
           NEWGTS 'data' RENAME
           0.0 'v' STORE
           1 30
           <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %>
           FOR
         %>
       }
       %>
       IFTE

       {
          'type' 'gauge'
          'unit' '%25'
          'w' 1 'h' 1 'x' 0 'y' 0
          'data'  {
    'data' $value
    'params' [
      {
        'maxValue' 100
        'datasetColor'
        <% $value 33 < %> <% '#77BE69' %>
        <% $value 66 < %> <% '#FF9830' %>
        <% '#F24865' %> 2 SWITCH
      }
    ]
  }
       }
       {
          'type' 'display'
          'unit' '%25'
          'w' 1 'h' 1 'x' 0 'y' 1
          'data'
  {
    'data' $value
    'globalParams' {
      'bgColor'
      <% $value 33 < %> <% '#77BE69' %>
      <% $value 66 < %> <% '#FF9830' %>
      <% '#F24865' %> 2 SWITCH
      'timeMode' 'custom'
      'fontColor' 'white'
    }
  }
       }
       {
         'type' 'map'
         'w' 6 'h' 3 'x' 6 'y' 2
         'options' { 'scheme' 'VIRIDIS' 'map' { 'mapType' 'STADIA' } 'autoRefresh' 1 }
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'macro' <%
         NEWGTS 'mapgts' STORE
         0 10 <% 'ts' STORE $mapgts NOW $ts 10000 - * RAND 10 * RAND 10 * RAND RAND ADDVALUE DROP %> FOR
         $mapgts %>
       }
     ]
   }`,
  options: {autoRefresh: 10}
}

export const polymorphicWithMacroTiles = Usage.bind({});
polymorphicWithMacroTiles.args = {
  ...Usage.args,
  cols: 12,
  cellHeight: 110,
  ws: `{
  'endpoint' 'https://sandbox.senx.io/api/v0/exec'
  'title' 'My Polymorphic Dashboard'
  'description' 'Change over a random value each 10 seconds with 1 second tile refresh'
     'tiles' <% [
        RAND 10 * ROUND 'value' STORE
        0 $value <%
          'i' STORE
          {
          'type' 'display'
          'w' 1 'h' 1 'x' $i 'y' 0
          'data' $i
          }
        %> FOR
     ]
     %>
    'options' {
      'autoRefresh' 3
    }
}`,
  options: {autoRefresh: 3}
}

export const staticPolymorphic = Usage.bind({});
staticPolymorphic.args = {
  ...polymorphic.args,
  ws: `
  18 'value' STORE
  {
  'title' 'My Polymorphic Dashboard'
  'description' 'Change over a random value each 5 seconds'
     'tiles' [
       {
         'type' 'area'
         'w' 6 'h' 3 'x' 0 'y' 2
         'data' { 'data' [
           NEWGTS 'data' RENAME
           0.0 'v' STORE
           1 500
           <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %>
           FOR
         ] 'params' [ {
      'datasetColor'
      <% $value 33 < %> <% '#77BE69' %>
      <% $value 66 < %> <% '#FF9830' %>
      <% '#F24865' %> 2 SWITCH
    } ]
         }
       }
       {
       'type' 'rose'
       'w' 2 'h' 2 'x' 1 'y' 0
         'options' { 'scheme' 'ECTOPLASM' }
       'data' [ NOW 'now' STORE
1 4 <% 'i' STORE NEWGTS 'serie #' $i TOSTRING + RENAME 'g' STORE
  1 10 <% 'ts' STORE $g $now $ts STU * - NaN NaN NaN RAND ADDVALUE DROP %> FOR
  $g
%> FOR ]
}
       <% $value 50.0 <= %>
       <%
       {
         'type' 'line'
         'title' 'Value <= 50'
         'w' 4 'h' 2 'x' 3 'y' 0
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'macro' <%
           NEWGTS 'macro' RENAME
           0.0 'v' STORE
           1 500
           <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %>
           FOR
         %>
       }
        {
         'type' 'scatter'
         'title' 'Value <= 50'
         'options' { 'scheme' 'ECTOPLASM' }
         'w' 5 'h' 2 'x' 7 'y' 0
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'data' [ NEWGTS 0.0 'v' STORE 1 50 <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %> FOR ]
       }
       %>
       <%
       {
         'type' 'bar'
         'title' 'Value > 50'
         'w' 9 'h' 2 'x' 3 'y' 0
         'options' { 'scheme' 'CTHULHU' }
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'data' [
           NEWGTS 'data' RENAME
           0.0 'v' STORE
           1 30
           <% 1 s * NOW SWAP - NaN NaN NaN $v RAND 0.5 - + DUP 'v' STORE ADDVALUE %>
           FOR
         ]
       }
       %>
       IFTE

       {
          'type' 'gauge'
          'unit' '%25'
          'w' 1 'h' 1 'x' 0 'y' 0
          'data'  {
    'data' $value
    'params' [
      {
        'maxValue' 100
        'datasetColor'
        <% $value 33 < %> <% '#77BE69' %>
        <% $value 66 < %> <% '#FF9830' %>
        <% '#F24865' %> 2 SWITCH
      }
    ]
  }
       }
       {
          'type' 'display'
          'unit' '%25'
          'w' 1 'h' 1 'x' 0 'y' 1
          'data'
  {
    'data' $value
    'globalParams' {
      'bgColor'
      <% $value 33 < %> <% '#77BE69' %>
      <% $value 66 < %> <% '#FF9830' %>
      <% '#F24865' %> 2 SWITCH
      'timeMode' 'custom'
      'fontColor' 'white'
    }
  }
       }
       {
         'type' 'map'
         'w' 6 'h' 3 'x' 6 'y' 2
         'options' { 'scheme' 'VIRIDIS' }
         'endpoint' 'https://sandbox.senx.io/api/v0/exec'
         'data'
           NEWGTS 'g' STORE
0 10 <% 'ts' STORE $g NOW $ts 10000 - * RAND 10 * RAND 10 * RAND RAND ADDVALUE DROP %> FOR
{
  'data' $g
  'globalParams' {
    'map' {
      'mapType' 'STADIA'
    }
  }
}
       }
     ]
   }`,

  options: {autoRefresh: -1}
}

export const differentSizesAndPositionAndCustomCellHeight = Usage.bind({});
differentSizesAndPositionAndCustomCellHeight.args = {
  ...Usage.args,
  cols: 12,
  cellHeight: 110,
  ws: `
  {
    'title' 'Test'
    'tiles' [
      {
        'type' 'display'
        'x' 0 'y' 0 'w' 1 'h' 1
        'title' '1'
        'data' '1x1'
      }
      {
        'type' 'display'
        'x' 1 'y' 0 'w' 2 'h' 2
        'title' '2'
        'data' '2x2'
      }
      {
        'type' 'display'
        'x' 3 'y' 0 'w' 1 'h' 2
        'title' '3'
        'data' '1x2'
      }
      {
        'type' 'display'
        'x' 4 'y' 1 'w' 2 'h' 1
        'title' '4'
        'data' '2x1'
      }
      {
        'type' 'display'
        'x' 6 'y' 0 'w' 6 'h' 4
        'title' '5'
        'data' '6x4'
      }
      {
        'type' 'display'
        'x' 0 'y' 1 'w' 1 'h' 1
        'title' '6'
        'data' '1x1'
      }
      {
        'type' 'display'
        'x' 1 'y' 2 'w' 2 'h' 2
        'title' '7'
        'data' '2x2'
      }
      {
        'type' 'display'
        'x' 3 'y' 2 'w' 1 'h' 2
        'title' '8'
        'data' '1x2'
      }
    ]
  }
  `,
  options: {...Usage.args.options, scheme: ColorLib.color.CHARTANA}
}


export const AnnotationResize = Usage.bind({});
AnnotationResize.args = {
  ...Usage.args,

  cols: 12,
  cellHeight: 220,
  ws: `{
  'title' 'Resizing'
     'tiles' [

        {
         'type' 'annotation'
         'w' 8 'h' 1 'x' 3 'y' 0
         'options' { 'timeMode' 'timestamp' }
         'data'
         [ 0 10 <%
            'i' STORE
            NEWGTS 'annot' $i TOSTRING + RENAME 1 500 <% RAND 0.09 < <% NaN NaN NaN T ADDVALUE %> <% DROP %> IFTE %> FOR
            %> FOR
         ]
       }
        {
          'type' 'circle'
          'unit' '%25'
          'w' 3 'h' 1 'x' 0 'y' 0
          'data'
            RAND 100 * ROUND 'v' STORE
            {
              'data' $v
              'params' [
                {
                  'maxValue' 100
                  'datasetColor'
                  <% $v 33 < %> <% '#77BE69' %>
                  <% $v 66 < %> <% '#FF9830' %>
                  <% '#F24865' %> 2 SWITCH
                }
              ]
            }
       }
     ]
   }`,
  options: new Param()
}

export const FullSample = Usage.bind({});
FullSample.args = {
  ...Usage.args,
  cols: 12,
  cellHeight: 120,
  ws: `@training/dataset0
[ $TOKEN '~warp.*committed' { 'cell' 'prod' } ] FINDSETS
STACKTOLIST  1 GET 'hname' GET 'hnames' STORE

$NOW 2 d - 12 h - 'start'  STORE
1 d 'duration' STORE
{
    'title' 'My Cluster'
    'cellHeight' 50
    'options' {
        'eventHandler' 'type=.*,tag=popup'
    }
    'vars' {
        'TOKEN' $TOKEN
        'NOW' $NOW
        'start' $start
        'duration' $duration
    }
    'tiles' [
        {
            'type' 'area'
            'x' 0 'y' 1 'w' 12 'h' 6
            'options' {
                'thresholds' [ { 'value' 20000 } ]
                'bounds' { 'yRanges' [ 0 30000 ] }
            }
            'macro' <%
                [ $TOKEN '~warp.*committed' { 'cell' 'prod' }
                $start $duration ] FETCH 'gts' STORE [ $gts
                mapper.rate 1 0 0 ] MAP 'data' STORE
                { 'data' $data 500 LTTB  'globalParams' { } }
            %>
        }

        $hnames <%
            'i' STORE
            'h' STORE
            {
                'x' $i 3 *  'y' 0 'h' 1 'w' 3
                'type' 'display'
                'data'
                    [ $TOKEN '~warp.*committed' { 'cell' 'prod' 'hname' $h }
                    $start $duration ] FETCH 'gts' STORE
                    [ $gts mapper.rate 1 0 0 ] MAP 0 GET 'd' STORE
                    $d 20000.0 THRESHOLDTEST SIZE 'outliers' STORE
                    $d TICKLIST 'ticks' STORE
                    { 'maxDate' $ticks $ticks SIZE 1 - GET 'minDate' $ticks 0 GET } 'bounds' STORE
                    {
                        'data' $h
                        'globalParams' {
                            'fontColor' '#ffffff'
                            'bgColor'  $outliers 0 >  <% '#D32F2F' %> <% '#689F38' %> IFTE
                        }
                        $outliers 0 >
                        <%
                            'events' [
                                { 'tags' [ 'popup' ] 'type' 'popup'

                                'value'
                                {
                                    'title' $h
                                    'cellHeight' 120
                                    'options' { 'bounds' $bounds }
                                    'vars' {
                                        'TOKEN' $TOKEN
                                        'NOW' $NOW
                                        'start' $start
                                        'duration' $duration
                                        'h' $h
                                        'gts' $gts WRAP
                                    }
                                    'tiles' [
                                        {
                                            'type' 'annotation'
                                            'w' 12 'h' 1 'x' 0 'y' 0
                                            'options' { 'eventHandler' 'type=(zoom|focus|margin),tag=chart1' }
                                            'macro' <%
                                                $gts UNWRAP 'gts' STORE
                                                [ $gts mapper.rate 1 0 0 ] MAP 0 GET 'gts' STORE
                                                NEWGTS
                                                $gts NAME '' +  RENAME
                                                $gts LABELS RELABEL
                                                'g' STORE
                                                $gts 20000.0 THRESHOLDTEST <%
                                                    't' STORE
                                                    $g $t NaN NaN NaN T ADDVALUE DROP
                                                %> FOREACH
                                                {
                                                    'data' $g
                                                    'params' [ { 'datasetColor' '#D32F2F' } ]
                                                    'events' [
                                                        { 'tags' [ 'chart2' ] 'type' 'zoom' }
                                                        { 'tags' [ 'chart2' ] 'type' 'focus' }
                                                    ]
                                                }
                                            %>

                                        }
                                        {
                                        'type' 'area'
                                        'w' 12 'h' 2 'x' 0 'y' 1
                                        'options' {
                                            'eventHandler' 'type=(zoom|focus),tag=chart2'
                                            'thresholds' [ { 'value' 20000 } ]
                                        }
                                        'macro' <%

                                            [ $gts UNWRAP mapper.rate 1 0 0 ] MAP 0 GET 'gts' STORE
                                            {
                                                'data' $gts
                                                'params' [ { 'datasetColor' '#D32F2F' } ]
                                                'events' [
                                                    { 'tags' [ 'chart1' ] 'type' 'zoom' }
                                                    { 'tags' [ 'chart1' ] 'type' 'focus' }
                                                    { 'tags' [ 'chart1' ] 'type' 'margin' }
                                                ]
                                            }
                                        %>
                                        }
                                        {
                                        'type' 'area'
                                        'w' 6 'h' 2 'x' 0 'y' 3
                                        'macro' <%
                                            {
                                                'data' $gts UNWRAP
                                            }
                                        %>
                                        }
                                        {
                                        'type' 'area'
                                        'w' 6 'h' 2 'x' 6 'y' 3
                                        'macro' <%
                                            {
                                                'data' [ $gts UNWRAP mapper.delta 1 0 0 ] MAP
                                            }
                                        %>
                                        }
                                    ]
                                }
                            }
                            ]
                        %> IFT
                    }

            }
        %> T FOREACH
    ]
}`,
}

export const EmptyDataAndErrors = Usage.bind({});
EmptyDataAndErrors.args = {
  ...Usage.args,
  cols: 12,
  ws: `
{
  'title' 'test'
  'tiles' [
    {
      'title' 'Empty'
      'type' 'line'
      'x' 0 'y' 0 'h' 1 'w' 4
      'macro' <% %>
    }
    {
      'title' 'Empty GTS'
      'type' 'line'
      'x' 4 'y' 0 'h' 1 'w' 4
      'macro' <% NEWGTS %>
    }
    {
      'title' 'Error'
      'type' 'line'
      'x' 8 'y' 0 'h' 1 'w' 4
      'macro' <% 'Arg' MSGFAIL %>
    }
  ]
}
  `
};


export const MapTrackingOnEvent = Usage.bind({});
MapTrackingOnEvent.args = {
  ...Usage.args,
  cols: 12,
  ws: `@training/dataset1
  [ $TOKEN 'data.fuel' {} ] FINDSETS
  STACKTOLIST 1 GET 'labels' STORE
{
  'title' 'Prix carburant'
  'cellHeight' 80
  'vars' {
    'cp' '29200'
    'type' 'sp95'
    'labels' $labels
  }
  'tiles' [
  {
    'title' 'Code postal'
    'type' 'input:autocomplete'
    'x' 0 'y' 0 'w' 4 'h' 1
    'macro' <%
      $labels 'cp' GET 'data' STORE
      {
        'data' $data
        'globalParams' { 'input' { 'value' $cp } }
        'events' [
          {
            'type' 'variable'
            'tags' [ 'cp' ] 'selector' 'cp' }
        ]
      }
    %>
  }
  {
    'title' 'Carburant'
    'type' 'input:list'
    'x' 4 'y' 0 'w' 4 'h' 1
    'macro' <%
      $labels 'type' GET 'data' STORE
      {
        'data' $data
        'globalParams' { 'input' { 'value' $type } }
        'events' [
          {
            'type' 'variable'
            'tags' [ 'type' ] 'selector' 'type'
          }
        ]
      }
    %>
  }
  {
    'type' 'display'
    'x' 8 'y' 0 'w' 4 'h' 1
    'title' 'Tarif au plus bas'
    'unit' '€'
    'options' {
      'eventHandler' 'type=variable,tag=(cp|type)'
    }
    'macro' <%
    @training/dataset1
    [
      $TOKEN 'data.fuel'
      { 'type' $type 'cp' $cp }
       NOW -1
    ] FETCH NOW 30 d TIMECLIP NONEMPTY 'gts' STORE
    [ $gts bucketizer.last NOW 0 1 ] BUCKETIZE 'gts' STORE
    [ $gts [] reducer.min  ] REDUCE VALUES 0 GET
    %>
  }
  {
    'x' 0 'y' 1 'w' 12 'h' 2
    'type' 'line'
    'options' {
      'eventHandler' 'type=variable,tag=(cp|type)'
    }
    'macro' <%
        @training/dataset1
        [
          $TOKEN 'data.fuel'
          { 'type' $type 'cp' $cp }
          NOW 15 d
        ] FETCH 'gts' STORE
        [ $gts bucketizer.last NOW 1 d 0 ] BUCKETIZE
        FILLPREVIOUS SORT 'gts' STORE
        [ $gts [] reducer.mean ] REDUCE
      %>
    }
    {
      'type' 'map'
      'x' 0 'y' 3 'w' 12 'h' 4
      'options' {
        'eventHandler' 'type=variable,tag=cp'
        'map' {
          'track' 'true'
        }
      }
      'macro' <%
      @training/dataset1
      [
        $TOKEN 'data.fuel'
        { 'type' $type 'cp' $cp }
         NOW -1
      ] FETCH NOW 30 d TIMECLIP NONEMPTY 'gts' STORE
      [ $gts bucketizer.last NOW 1 d 0 ] BUCKETIZE
        FILLPREVIOUS SORT
      %>
    }
  ]
}`
}
export const SpecialChars = Usage.bind({});
SpecialChars.args = {
  ...Usage.args,
  cols: 12,
  ws: `{
  'title' 'Tést'
  'description' 'Dashboard test'
  'tiles' [
  {
    'title' 'test'
    'options' { 'autoRefresh' 1 }
    'x' 0 'y' 0 'w' 12 'h' 2
    'type' 'display' 'macro' <%
        'démo'
      %>
    }
  ]
}`
}
export const Test = Usage.bind({});
Test.args = {
  ...Usage.args,
  cols: 12,
  ws: `
  {
  'title' 'Dashboard tableau'
  'description' "Températures de chauffage de la maison"
  'vars' {
    'NOW' NOW 365 d -
    'txt' 'Hello'
  }
  'tiles' [
  {
    'type' 'input:date' 'x' 0 'y' 0 'w' 6 'h' 1
    'macro' <%
      { 'data' $NOW ->TSELEMENTS [ 0 2 ] SUBLIST TSELEMENTS-> 'events' [
    { 'type' 'variable' 'tags' 'NOW' 'selector' 'NOW' }
  ] }
  %>
  }
  {
    'type' 'input:text' 'x' 6 'y' 0 'w' 6 'h' 1
    'macro' <%
      { 'data' $txt 'events' [
    { 'type' 'variable' 'tags' 'txt' 'selector' 'txt' }
  ] }
  %>
  }
    {
      'x' 0 'y' 1 'w' 12 'h' 1
      'type' 'display'
      'options' {
        'eventHandler' 'type=variable,tag=(txt|NOW)'
        'mutedVars' [ 'NOW' ]
        'map' {
          'track' 'true'
        }
      }
      'macro' <% { 'data' $txt $NOW ISO8601 + 'events' [
    { 'type' 'variable' 'tags' 'res' 'selector' 'res' 'value' 'a' }
  ] } %>
    }
  ]
}`
}

// @ts-ignore
const FlexTemplate = ({url, ws, options, title, cols, cellHeight}) => `<div style="width: 100%;min-height: 500px">
<discovery-dashboard url="${url}"
type="flex"
dashboard-title="${title ? title : ''}"
@draw="${event => console.error('foo', 'bar', event)}"
cols="${cols}" cell-height="${cellHeight}"
debug options='${JSON.stringify(options)}'
>${ws}</discovery-dashboard>
</div>`;

export const Responsive = FlexTemplate.bind({});
Responsive.args = {
  ...differentSizesAndPositionAndCustomCellHeight.args,
  type: 'flex'
}
export const ResponsiveWhithCharts = FlexTemplate.bind({});
ResponsiveWhithCharts.args = {
  ...Usage.args,
  type: 'flex'
}
