



<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar" :showFieldList="showFieldList" :load="load"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, GroupingBar, FieldList, LoadEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
      },
      height: 350,
      showGroupingBar: true,
      showFieldList: true
    }
  },
  methods: {
    load: function (args: LoadEventArgs) {
      args.defaultFieldListOrder = 'Descending';
    }
  },
  provide: {
        pivotview: [GroupingBar, FieldList]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




