

<template>
    <div id="app">
         <ejs-chart id="container" :title='title'>
            <e-series-collection>
              <e-series :dataSource='seriesData' columnSpacing=0.25 columnWidth=0.75 type='Bar' xName='x' yName='y' name='India' fill='green' opacity='0.8' dashArray='4' :border='border'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, BarSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
             { x: 2006, y: 7.8 }, { x: 2007, y: 7.2},
             { x: 2008, y: 6.8 }, { x: 2009, y: 10.7 },
             { x: 2010, y: 10.8}, { x: 2011, y: 9.8 }
              ],
       border: {
            width: 2,
            color: 'red'
        },
      title: "Unemployment rate (%)"
    };
  },
  provide: {
    chart: [BarSeries]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


