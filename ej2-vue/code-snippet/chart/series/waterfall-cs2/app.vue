

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' name='Male' summaryFillColor='#e56590' negativeFillColor='#f8b883'
                :intermediateSumIndexes:='intermediate' :sumIndexes='sum'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, WaterfallSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
            { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
            { x: 'Development', y: -688 },
            { x: 'Revenue', y: 1030 }, {x: 'Balance'},
            { x: 'Administrative', y: -780 },
            { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
            { x: 'Net Profit'}
              ],
        primaryXAxis: {
           valueType: 'Category'
        },
        sum: [7],
        intermediate: [4]
      title: "Company Revenue and Profit"
    };
  },
  provide: {
    chart: [WaterfallSeries, Category]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


