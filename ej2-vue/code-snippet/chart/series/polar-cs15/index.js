
import Vue from "vue";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { ChartPlugin, ColumnSeries, LineSeries, Category, Export } from "@syncfusion/ej2-vue-charts";
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
Vue.use(ButtonPlugin);
Vue.use(AccumulationChartPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-button cssClass="e-flat" iconCss='e-icons e-export-icon' isPrimary=true v-on:click.native='onClick' id="exportBtn">EXPORT</ejs-button>
      <ejs-chart ref="chart" id="container" :title='title1' :primaryXAxis='primaryXAxis1' :primaryYAxis='primaryYAxis1'>
        <e-series-collection>
          <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' width=2 name='Germany' :marker='marker'> </e-series>
          <e-series :dataSource='seriesData2' type='Line' xName='x' yName='y' width=2 name='England' :marker='marker'> </e-series>
        </e-series-collection>
      </ejs-chart>
      <ejs-chart ref="chart" id="container1" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' width=2> </e-series>
        </e-series-collection>
      </ejs-chart>
      <ejs-accumulationchart id="container2" :title='title2' enableSmartLabels='enableSmartLabels' :legendSettings='legendSettings'>
        <e-accumulation-series-collection>
          <e-accumulation-series :dataSource='seriesData3' xName='x' yName='y' :dataLabel='datalabel'> </e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>
`,

  data: function () {
    return {
      seriesData: [
        { x: 'John', y: 10000 },
        { x: 'Jake', y: 12000 },
        { x: 'Peter', y: 18000 },
        { x: 'James', y: 11000 },
        { x: 'Mary', y: 9700 }
      ],
      seriesData1: [
        { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
        { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
        { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
        { x: new Date(2011, 0, 1), y: 70 }
      ],
      seriesData2: [
        { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
        { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
        { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 },
        { x: new Date(2011, 0, 1), y: 84 }
      ],
      primaryXAxis: {
        title: 'Manager',
        valueType: 'Category',
        majorGridLines: { width: 0 }
      },
      primaryYAxis: {
        title: 'Sales',
        minimum: 0,
        maximum: 20000,
        majorGridLines: { width: 0 }
      },
      marker: {
        visible: true,
        width: 10,
        height: 10
      },
      primaryXAxis1: {
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
      },
      primaryYAxis1: {
        labelFormat: '{value}%',
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      title: "Sales Comparision",
      title1: "Medal Count",
      title2: "Project Cost Breakdown",
      enableSmartLabels: true,
      datalabel: { visible: true, name: 'text' },
      legendSettings: {
        visible: true
      }
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Export, LineSeries],
    accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationLegend]
  },
  methods: {
    onClick: function (args) {
      let chart1 = document.getElementById("container").ej2_instances[0];
      let chart2 = document.getElementById("container1").ej2_instances[0];
      let chart3 = document.getElementById("container2").ej2_instances[0];
      chart1.exportModule.export('PDF', 'Chart', null, [chart1, chart2, chart3], null, null, true, undefined, undefined, true);
    },
  }

});