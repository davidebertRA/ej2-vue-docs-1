
import Vue from "vue";
import { ChartPlugin, LineSeries, SplineAreaSeries, DateTime, Zoom } from "@syncfusion/ej2-vue-charts";
import { synchronizedData } from './dataSource';
import { Browser } from '@syncfusion/ej2-base';

Vue.use(ChartPlugin);

let zoomFactor = 0;
let zoomPosition = 0;

new Vue({
  el: '#app',
  template: `
    <div class="control-section">
        <div class="chart-row">
            <div class="col" id="container1">
                <ejs-chart style='display:block' align='center' id='chartcontainer1' :title='title1'
                    :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis1'
                    :zoomSettings='zoomSettings' :titleStyle='titleStyle' :zoomComplete='zoomComplete' ref="chart1">
                    <e-series-collection>
                        <e-series :dataSource='seriesData' type='Line' xName='USD' yName='EUR' width = 2
                            :emptyPointSetting='emptyPointSettings'> </e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
            <div class="col" id="container2">
                <ejs-chart style='display:block' align='center' id='chartcontainer2' :title='title2'
                    :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis2'
                    :zoomSettings='zoomSettings' :titleStyle='titleStyle' :zoomComplete='zoomComplete' ref="chart2">
                    <e-series-collection>
                        <e-series :dataSource='seriesData' type='SplineArea' xName='USD' yName='INR' opacity=0.6
                            :border='border'>
                        </e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
        </div>
    </div>
`,

  data() {
    return {
      seriesData: synchronizedData,
      primaryXAxis: {
        minimum: new Date(2023, 1, 18),
        maximum: new Date(2023, 7, 18),
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        interval: Browser.isDevice ? 2 : 1,
        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
        labelRotation: Browser.isDevice ? -45 : 0
      },
      primaryYAxis1: {
        labelFormat: 'n2',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0.86,
        maximum: 0.96,
        interval: 0.025
      },
      primaryYAxis2: {
        labelFormat: 'n1',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 79,
        maximum: 85,
        interval: 1.5
      },
      border: { width: 2 },
      zoomSettings: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableScrollbar: false,
        enableDeferredZooming: false,
        enableSelectionZooming: true,
        enablePan: true,
        mode: 'X',
        toolbarItems: ['Pan', 'Reset']
      },
      emptyPointSettings: { mode: 'Drop' },
      titleStyle: { textAlignment: 'Near' },
      border: { width: 2 },
      title1: "US to EURO",
      title2: "US to INR",
      charts: []
    };
  },
  provide: {
    chart: [LineSeries, SplineAreaSeries, DateTime, Zoom]
  },
  methods: {
    zoomComplete: function (args) {
      if (args.axis.name === 'primaryXAxis') {
        zoomFactor = args.currentZoomFactor;
        zoomPosition = args.currentZoomPosition;
        this.zoomCompleteFunction(args);
      }
    },
    zoomCompleteFunction: function (args) {
      for (var i = 0; i < this.charts.length; i++) {
        if (args.axis.series[0].chart.element.id !== this.charts[i].element.id) {
          this.charts[i].primaryXAxis.zoomFactor = zoomFactor;
          this.charts[i].primaryXAxis.zoomPosition = zoomPosition;
          this.charts[i].zoomModule.isZoomed = args.axis.series[0].chart.zoomModule.isZoomed;
          this.charts[i].zoomModule.isPanning = args.axis.series[0].chart.zoomModule.isPanning;
        }
      }
    },
  },
  mounted() {
    this.charts = [this.$refs.chart1.ej2Instances, this.$refs.chart2.ej2Instances];
  }

});