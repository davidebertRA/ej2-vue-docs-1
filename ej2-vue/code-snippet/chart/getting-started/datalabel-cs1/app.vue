

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Category, DataLabel, Legend } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data() {
    return {
      seriesData: [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
              ],
        primaryXAxis: {
           valueType: 'Category'
        },
        primaryYAxis:{
            labelFormat: '${value}K'
        },
        legendSettings: {
            visible: true
        },
        marker: {
        dataLabel:{
                visible: true
            }
        },
      title: "Sales Analysis"
    };
  },
  provide: {
    chart: [LineSeries, Category, DataLabel, Legend]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


