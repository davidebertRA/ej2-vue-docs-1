
import Vue from "vue";
import { ChartPlugin, StackingColumnSeries, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='x' yName='y' name='USA'> </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='x' yName='y1' name='UK'> </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='x' yName='y2' name='Canada'> </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='x' yName='y3' name='China'> </e-series>
                 <e-series :dataSource='seriesData' type='Line' xName='x' yName='y4' name='GDP' :marker='marker' opacity=0.6> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData:[
              { x: '2005', y: 1.2, y1: 0.5, y2: 0.7, y3: -0.8, y4: 1.5 },
              { x: '2006', y: 1, y1: 0.5, y2: 1.4, y3: 0, y4: 2.3 },
              { x: '2007', y: 1, y1: 0.5, y2: 1.5, y3: -1, y4: 2 },
              { x: '2008', y: 0.25, y1: 0.35, y2: 0.35, y3: -.35, y4: 0.1 },
              { x: '2009', y: 0.1, y1: 0.9, y2: -2.7, y3: -0.3, y4: -2.7 },
              { x: '2010', y: 1, y1: 0.5, y2: 0.5, y3: -0.5, y4: 1.8 },
              { x: '2011', y: 0.1, y1: 0.25, y2: 0.25, y3: 0, y4: 2 },
              { x: '2012', y: -0.25, y1: -0.5, y2: -0.1, y3: -0.4, y4: 0.4 },
              { x: '2013', y: 0.25, y1: 0.5, y2: -0.3, y3: 0, y4: 0.9 },
              { x: '2014', y: 0.6, y1: 0.6, y2: -0.6, y3: -0.6, y4: 0.4 },
              { x: '2015', y: 0.9, y1: 0.5, y2: 0, y3: -0.3, y4: 1.3 }
        ],
        primaryXAxis: {
            title: 'Years',
            interval: 1,
            labelIntersectAction : 'Rotate45',
            valueType: 'Category'
        },
        marker: { visible: true, width: 10, opacity: 0.6, height: 10 },
         title: "Annual Growth GDP in France"
    };
  },
  provide: {
    chart: [StackingColumnSeries, LineSeries, Category]
  },

});