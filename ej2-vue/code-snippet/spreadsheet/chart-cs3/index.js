
import Vue from "vue";
import { SpreadsheetPlugin, getFormatFromType } from "@syncfusion/ej2-vue-spreadsheet";
import { chartData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :created="created" :height=515>
        <e-sheets>
            <e-sheet :name="BookSales">
                <e-rows>
                    <e-row :height="height" :cells="cells1"></e-row>
                    <e-row :height="height" :cells="cells2"></e-row>
                </e-rows>
                <e-ranges>
                    <e-range :dataSource="dataSource" startCell="A3" ></e-range>
                </e-ranges>
                <e-columns>
                    <e-column :width=110></e-column>
                    <e-column :width=100></e-column>
                    <e-column :width=100></e-column>
                    <e-column :width=100></e-column>
                    <e-column :width=100></e-column>
                    <e-column :width=100></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
`,

   data: () => {
    return {
      height: 30,
      BookSales:"Book Sales",
      dataSource: chartData,
      cells1: [
        { value: 'Book Sales 2016-2020', style: { backgroundColor: '#357cd2', color: '#fff',
            fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }}
        ],
    cells2: [
        { index: 7, chart: [{ type: 'Column', range: 'A3:F8' }] }
        ]
    }
  },
  methods: {
  created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:F3');
      spreadsheet.numberFormat(getFormatFromType('Currency'), 'B4:F8');
      spreadsheet.merge('A1:F1');
      }
    }

});