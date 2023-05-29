
import Vue from 'vue';
import { SmithchartPlugin } from "@syncfusion/ej2-vue-charts";
Vue.use(SmithchartPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
        <ejs-smithchart id="smithchart"  >
                <e-seriesCollection>
                    <e-series :dataSource='dataSource' :name='name' :marker='marker' :reactance='reactance' :resistance='resistance'></e-series>
                </e-seriesCollection>
        </ejs-smithchart>
    </div>
`,

  data: function() {
    return {
        marker: {
                dataLabel: {
                    visible: true,
                    fill: '#99ffcc',
                    opacity: 1,
                    border: {
                        color: '#1aff8c',
                        width: 2,
                    }
                }
            }
        dataSource: [
                 { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
            ],
            name: 'Transmission1',
            reactance: 'reactance', resistance: 'resistance',
    }
  }

});