


<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter', showSortIcon: false }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country', showSortIcon:false }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true,
    }
  },
  provide: {
        pivotview: [GroupingBar]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



