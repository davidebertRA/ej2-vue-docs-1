

<template>
    <div id="app">
    <div style='height:350px;'>
        <ejs-grid ref='grid' :dataSource='data' enableStickyHeader=true>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
    };
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


