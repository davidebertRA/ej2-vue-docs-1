

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y' name='USA'> </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y1' name='UK'> </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y2' name='Canada'> </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y3' name='China'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, StackingColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData:[
             { x: '2006', y: 900, y1: 190, y2: 250, y3: 150 },
             { x: '2007', y: 544, y1: 226, y2: 145, y3: 120 },
             { x: '2008', y: 880, y1: 194, y2: 190, y3: 115 },
             { x: '2009', y: 675, y1: 250, y2: 220, y3: 125 },
             { x: '2010', y: 765, y1: 222, y2: 225, y3: 132 },
             { x: '2011', y: 679, y1: 181, y2: 135, y3: 137 },
             { x: '2012', y: 770, y1: 128, y2: 152, y3: 110 },
        ],
        primaryXAxis: {
            title: 'Years',
            interval: 1,
            valueType: 'Category'
        },
         title: "Gross Domestic Product Growth"
    };
  },
  provide: {
    chart: [StackingColumnSeries, Category]
  },
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


