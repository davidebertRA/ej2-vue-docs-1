
import Vue from "vue";
import { SpreadsheetPlugin, getRangeAddress } from "@syncfusion/ej2-vue-spreadsheet";
import { priceData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet ref="spreadsheet" :created="created" :selectionSettings="selectionSettings">
                <e-sheets>
                  <e-sheet name="Price Details">
                    <e-ranges>
                      <e-range :dataSource="dataSource1"></e-range>
                    </e-ranges>
                    <e-columns>
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
        selectionSettings: { mode: 'Multiple' },
      dataSource1: priceData
    }
  },
  methods: {
   created: function () {
       var spreadsheet = this.$refs.spreadsheet;
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    var rowCount = spreadsheet.ej2Instances.getActiveSheet().rowCount;
        spreadsheet.selectRange(getRangeAddress([0, 2, rowCount, 2]));
      }
    }

});