



<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :displayOption="displayOption"
            :chartSettings="chartSettings" :height="height"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
    data() {
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
            chartSettings: {
                chartSeries: {
                    dataLabel: {visible:true, position: 'Outside', connectorStyle: { length: '50px', width: 2, dashArray: '5,3', color: '#f4429e' } },
                    type: 'Funnel'
                }
            }
        }
    },
    provide: {
        pivotview: [PivotChart]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>





