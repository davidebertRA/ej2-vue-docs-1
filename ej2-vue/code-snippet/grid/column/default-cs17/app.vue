

<template>
    <div id="app">
        <ejs-grid :dataSource="data" :allowResizing='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='100' textAlign="Center" minWidth='10'></e-column>
                <e-column headerText='Order Details' :columns='orderColumns'></e-column>
                <e-column headerText='Ship Details' :columns='shipColumns'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Resize } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      orderColumns: [
            {
                field: 'OrderDate',
                headerText: 'Order Date',
                format: 'yMd',
                width: 120,
                textAlign: 'Right',
                minWidth: 10
            },
            {
                field: 'Freight',
                headerText: 'Freight ($)',
                width: 100,
                format: 'C1',
                textAlign: 'Right',
                minWidth: 10
            }
        ],
        shipColumns: [
            {
                field: 'ShipCity',
                headerText: 'Ship City',
                width: 100,
                minWidth: 10
            },
            {
                field: 'ShipCountry',
                headerText: 'Ship Country',
                width: 120,
                minWidth: 10
            }
        ]
    };
  },
  provide: {
      grid: [Resize]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


