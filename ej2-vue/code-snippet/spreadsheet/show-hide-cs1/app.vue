

<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false"
                :showSheetTabs="false" :showRibbon="false">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range :dataSource="dataSource"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column :width=150></e-column>
                      <!-- Hiding the 1st and 2nd column index through property binding -->
                      <e-column :width=100 :hidden="true"></e-column>
                      <e-column :width=100 :hidden="true"></e-column>
                      <e-column :width=80></e-column>
                      <e-column :width=80></e-column>
                      <e-column :width=80></e-column>
                      <e-column :width=80></e-column>
                      <e-column :width=80></e-column>
                    </e-columns>
                    <e-rows>
                      <e-row index=2 :hidden="true"></e-row>
                      <e-row :hidden="true"></e-row>
                    </e-rows>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>
</template>

<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data  } from './data.js';
Vue.use(SpreadsheetPlugin);
export default {
   data: () => {
    return {
      dataSource: data,
    }
  },
  methods: {
   created: function () {
       var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        // Unhide the 2nd index hidden column
        spreadsheet.hideColumn(1, 1, false);
        // Unhide the 3rd index hidden row
        spreadsheet.hideRow(3, 3, false);
        // Hiding the 6th index column
        spreadsheet.hideColumn(6);
        // Hiding the 8th and 9th index row
        spreadsheet.hideRow(8, 9);
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
      }
    }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
 @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
 @import "../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css";
</style>


