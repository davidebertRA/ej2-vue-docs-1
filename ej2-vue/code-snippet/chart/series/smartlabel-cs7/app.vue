

<template>
    <div id="app">
         <ejs-accumulationchart id="container" :textRender='onTextRender'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' :dataLabel='datalabel'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

export default {
  data() {
    return {
      seriesData: [
                { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
                { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
                { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
                { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' }],
                datalabel: { visible: true, name: 'text', position: 'Outside' }
           };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationDataLabel]
  },
   methods: {
   onTextRender: function (args) {
        if (args.text.indexOf('Mar') > -1) {
            args.color = 'red';
            args.border.width = 1;
        }
    }
   }
};
</script>
<style>
 #container {
     height: 350px;
 }
</style>


