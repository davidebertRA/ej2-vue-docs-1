

<template>
   <ejs-spreadsheet ref="spreadsheet" :created="created" :openUrl="openUrl"
                :saveUrl="saveUrl" :showFormulaBar="false" :showRibbon="false">
                <e-sheets>
                  <!-- By default, state is set as 'visible'. We don’t  need to said it in the sample. -->
                  <e-sheet name="Visible Sheet" state="Visible">
                    <e-ranges>
                      <e-range :dataSource="dataSource"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column :width=150></e-column>
                      <e-column :width=110></e-column>
                      <e-column :width=110></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                    </e-columns>
                  </e-sheet>
                  <!-- Sets sheet state as 'VeryHidden'. It can't be unhidden. -->
                  <e-sheet name="Very Hidden Sheet" state="VeryHidden">
                    <e-ranges>
                      <e-range :dataSource="dataSource"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column :width=150></e-column>
                      <e-column :width=110></e-column>
                      <e-column :width=110></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                    </e-columns>
                  </e-sheet>
                  <!-- Sets sheet state as 'Hidden'. It can be unhidden dynamically. -->
                  <e-sheet name="Hidden Sheet" state="Hidden">
                    <e-ranges>
                      <e-range :dataSource="dataSource"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column :width=150></e-column>
                      <e-column :width=110></e-column>
                      <e-column :width=110></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                      <e-column :width=85></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>
</template>

<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data } from './data.js';
Vue.use(SpreadsheetPlugin);
export default {
   data: () => {
    return {
      dataSource: data,
        openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save',
    }
  },
  methods: {
  created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      // Applies style formatting to active visible sheet.
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // Applies style formatting to active hidden sheet.
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Hidden Sheet!A1:H1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'Hidden Sheet!D2:H11');
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


