



<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList" :displayOption="displayOption" :chartSettings="chartSettings" :height="height"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, PivotChart, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      displayOption: { view: 'Chart' },
      chartSettings: { chartSeries: { type: 'Column' }},
      showFieldList: true
    }
  },
    provide: {
        pivotview: [PivotChart, FieldList]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




