



<template>
    <div id="app">
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :enablePaging="enablePaging" :pageSettings="pageSettings" :pagerSettings="pagerSettings" :gridSettings="gridSettings"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, Pager } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

Vue.use(PivotViewPlugin);

let remoteData: DataManager = new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: remoteData as DataManager,
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
      },
      height: 350,
      enablePaging: true,
      pageSettings: {
        rowPageSize: 10,
        columnPageSize: 5,
        currentColumnPage: 1,
        currentRowPage: 1
      },
      pagerSettings: {
        position: 'Bottom',
        enableCompactView: false,
        showColumnPager: true,
        showRowPager: true,
        columnPageSizes: [5, 10, 20, 50, 100],
        rowPageSizes: [10, 50, 100, 200],
        isInversed: false,
        showColumnPageSize: true,
        showRowPageSize: true
      },
      gridSettings: { columnWidth: 120 },
    }
  },
  provide: {
    pivotview: [Pager]
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




