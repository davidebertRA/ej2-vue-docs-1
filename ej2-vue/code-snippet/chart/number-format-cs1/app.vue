

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :zoomSettings='zoom' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Product X'  :marker='marker'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y1' name='Product Y' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Tooltip, Zoom, DataLabel } from "@syncfusion/ej2-vue-charts";
import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
setCurrencyCode('EUR');

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
                { x: 1900, y: 4, y1: 2.6, y2: 2.8 }, { x: 1920, y: 3.0, y1: 2.8, y2: 2.5 },
                { x: 1940, y: 3.8, y1: 2.6, y2: 2.8 }, { x: 1960, y: 3.4, y1: 3, y2: 3.2 },
                { x: 1980, y: 3.2, y1: 3.6, y2: 2.9 }, { x: 2000, y: 3.9, y1: 3, y2: 2 }
              ],
        primaryXAxis: {
            title: 'Year',
            edgeLabelPlacement: 'Shift'
        },
        primaryYAxis: {
           title: 'Sales Amount in Millions',
           labelFormat: 'c'
        },
        zoom: {
            enableMouseWheelZooming: true,
            enableDeferredZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true
        },
        marker: {
            dataLabel: {
                visible: true
            }
        },
        tooltip: {
            enable: true, format: '${point.x} : ${point.y}'
        },
      title: "Average Sales Comparison"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Tooltip, Zoom, DataLabel]
  }
};
</script>
<style>
 #container {
     height: 350px;
 }
</style>


