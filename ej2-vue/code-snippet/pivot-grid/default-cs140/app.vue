


<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList" :dataBound="ondataBound"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, FieldList } from "@syncfusion/ej2-vue-pivotview";
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
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showFieldList: true
    }
  },
  methods: {
    ondataBound: function() {
     let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
     pivotGridObj.pivotFieldListModule.dialogRenderer.fieldListDialog.target = document.body;
     if (pivotGridObj && pivotGridObj.dataSourceSettings.values.length === 0) {
        (pivotGridObj.pivotFieldListModule.dialogRenderer as any).onShowFieldList();
     }
    }
  },
  provide: {
        pivotview: [FieldList]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



