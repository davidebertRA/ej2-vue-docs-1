


<template>
    <div id="app">
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :showGroupingBar="showGroupingBar" :showFieldList="showFieldList"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, GroupingBar, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }, { name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true,
      showFieldList: true
    }
  },
  provide: {
    pivotview: [GroupingBar,FieldList]
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";

/* csslint ignore:start */
.e-pivotview .e-valuescontent {
  text-align: center !important;
}
/* csslint ignore:end */
</style>



