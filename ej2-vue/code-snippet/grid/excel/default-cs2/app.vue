

<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowExcelExport='true' :queryCellInfo='queryCellInfo' :excelQueryCellInfo='excelQueryCellInfo' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' headerText='Freight' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport']
    };
  },
  methods: {
    toolbarClick: function(args) {
        if (args.item.id === 'Grid_excelexport') {
            this.$refs.grid.excelExport();
        }
    },
    excelQueryCellInfo(args) {
        if(args.column.field == 'Freight')
            if(args.value < 30) {
                args.style = {backColor: '#99ffcc'};
            }
            else if(args.value < 60) {
                args.style = {backColor: '#ffffb3'};
            }
            else {
                args.style = {backColor: '#ff704d'};
            }
    },
    queryCellInfo(args) {
        if(args.column.field == 'Freight'){
            if(args.data['Freight'] < 30) {
                args.cell.bgColor = '#99ffcc';
            }
            else if(args.data['Freight'] < 60) {
                args.cell.bgColor = '#ffffb3';
            }
            else {
                args.cell.bgColor = '#ff704d';
            }
        }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>



