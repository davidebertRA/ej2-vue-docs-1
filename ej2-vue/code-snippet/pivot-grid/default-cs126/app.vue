


<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar" :fieldRemove="fieldRemove"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, GroupingBar, FieldRemoveEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true
    }
  },
  methods: {
     fieldRemove: function (args: FieldRemoveEventArgs ) {
        if(args.fieldName === 'Country') {
            args.cancel = true;
        }
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



