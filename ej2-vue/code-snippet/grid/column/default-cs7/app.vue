

<template>
    <div id="app">
        <ejs-grid :dataSource="data" id="gridcomp" :allowPaging='true' :allowGrouping='true' :allowSorting='true' :showColumnMenu='true'
        :groupSettings='groupOptions' :allowFiltering='true' :filterSettings='filterSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width='120'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right' type='date'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Group, Sort, Resize, ColumnMenu, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      groupOptions: { showGroupedColumn: true },
      filterSettings: { type: "CheckBox" }
    };
  },
  provide: {
      grid: [Group, Sort, Resize, ColumnMenu, Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


