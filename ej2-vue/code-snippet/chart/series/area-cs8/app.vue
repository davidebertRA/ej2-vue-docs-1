

<template>
    <div id="app">
         <ejs-chart :title='title'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='MultiColoredArea' xName='x' yName='y' name='England'
                 segmentAxis='X' :segments='segments'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, MultiColoredAreaSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData:[
          { x: 2005, y: 28 }, { x: 2006, y: 25},
          { x: 2007, y: 26 }, { x: 2008, y: 27 },
          { x: 2009, y: 32}, { x: 2010, y: 35 },
          { x: 2011, y: 25 }
          ],
    title: 'England - Run Rate',
    segments: [{
                    value: 2007,
                    color: 'blue'
                }, {
                    value: 2009,
                    color: 'lightgreen'
                }, {
                    color: 'orange'
        }],
    };
  },
  provide: {
    chart: [MultiColoredAreaSeries]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


