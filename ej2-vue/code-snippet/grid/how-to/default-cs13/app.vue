

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :queryCellInfo='queryCellInfoEvent' height='315px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
               <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import{ Tooltip } from "@syncfusion/ej2-popups";
import { data } from './datasource.js';

Vue.use(GridPlugin);

  export default {
    data() {
      return {
        data: data
      };
    },
    methods: {
      queryCellInfoEvent: function (args) {
        let tooltip = new Tooltip({
          content: args.data[args.column.field].toString()
        }, args.cell);
      },
    },
  }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


