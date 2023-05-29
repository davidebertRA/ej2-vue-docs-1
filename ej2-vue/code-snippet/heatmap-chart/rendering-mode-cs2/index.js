
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend, Adaptor } from '@syncfusion/ej2-vue-heatmap';
Vue.use(HeatMapPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-heatmap id="heatmap" :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :legendSettings='legendSettings'></ejs-heatmap>
    </div>
`,

  data: function() {
    return {
        dataSource: [
            [73, 39, 26, 39, 94, 0],
            [93, 58, 53, 38, 26, 68],
            [99, 28, null, 4, 66, 90],
            [14, 26, 97, 69, 69, 3],
            [7, 46, 47, 47, 88, 6],
            [41, 55, 73, 23, "", 79],
            [56, 69, 21, 86, 3, 33],
            [45, 7, undefined, 81, 95, 79],
            [60, 77, 74, 68, 88, 51],
            [25, 25, 10, 12, 78, 14],
            [25, 56, 55, 58, 12, 82],
            [74, 33, 88, 23, 86, 59]
        ],
        xAxis: {
            valueType:"DateTime",
            minimum: new Date(2007,0,1),
            intervalType:"Years",
            labelFormat:"yyyy"
        },
        yAxis: {
            valueType:"Numeric"
        },
        legendSettings: {
            visible: false,
        },
    }
  },
 provide:{
    heatmap:[Tooltip, Legend, Adaptor]
}

});