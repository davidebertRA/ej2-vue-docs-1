

<template>
    <div id="app">
         <ejs-chart id="container">
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Bubble' size='size' xName='x' yName='y' name='pound' fill="blue" :border="border"> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, BubbleSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData1:  [
        { x: 92.2, y: 7.8, size: 1.347, text: 'China' },
        { x: 74, y: 6.5, size: 1.241, text: 'India' },
        { x: 90.4, y: 6.0, size: 0.238, text: 'Indonesia' },
        { x: 99.4, y: 2.2, size: 0.312, text: 'US' },
        { x: 88.6, y: 1.3, size: 0.197, text: 'Brazil' },
        { x: 99, y: 0.7, size: 0.0818, text: 'Germany' },
        { x: 72, y: 2.0, size: 0.0826, text: 'Egypt' },
        { x: 99.6, y: 3.4, size: 0.143, text: 'Russia' },
        { x: 99, y: 0.2, size: 0.128, text: 'Japan' },
        { x: 86.1, y: 4.0, size: 0.115, text: 'Mexico' },
        { x: 92.6, y: 6.6, size: 0.096, text: 'Philippines' },
        { x: 61.3, y: 14.5, size: 0.162, text: 'Nigeria' }],
        border:{
          width: 2,
          color : 'black'
        }
    };
  },
  provide: {
    chart: [BubbleSeries]
  },
};
</script>
<style>
  #container {
   height: 350px;
 }
</style>


