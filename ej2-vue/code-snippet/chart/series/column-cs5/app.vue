

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :annotations='annotations'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, ChartAnnotation } from "@syncfusion/ej2-vue-charts";

    let contentVue = Vue.component("contentTemplate", {
  template: '<div id="text" style="transform: rotate(-90deg);">Speed Rate</div>',
  data() {
    return {
      data: {}
    };
  }
});
let contentTemplate = function() {
  return { template: contentVue };
};
Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
             { country: "USA", gold: 50 },
             { country: "China", gold: 40 },
             { country: "Japan", gold: 70 },
             { country: "Australia", gold: 60 },
             { country: "France", gold: 50 },
             { country: "Germany", gold: 40 },
             { country: "Italy", gold: 40 },
             { country: "Sweden", gold: 30 }
              ],
        annotations:[{
        content: contentTemplate,
        coordinateUnits: 'Pixel',
        x: 13,
        y: 180,
        region: 'Chart'
        }],
        primaryXAxis: {
           valueType: 'Category',
           title: 'Countries'
        },
          primaryYAxis:
        {
            minimum: 0, maximum: 80,
            interval: 20, title: '(m2/min)'
        },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, ChartAnnotation]
  },
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


