

<template>
    <div id="app">
         <ejs-chart id="container" :title='title'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='India'
                fill='green' width=3 dashArray='5,5' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData:[
             { x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 }, { x: 2008, y: 27 },
             { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
        ],
      title: "Efficiency of oil-fired power production",
      marker: { visible: true },
    };
  },
  provide: {
    chart: [LineSeries]
  },
};
</script>
<style>
#container {
   height: 350px;
 }
</style>


