<template>
    <div id="app">
        <ejs-heatmap id="heatmap" :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource'
        :titleSettings='titleSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings'></ejs-heatmap>
    </div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip } from '@syncfusion/ej2-vue-heatmap';
Vue.use(HeatMapPlugin);

export default {
  data: function() {
    return {
        dataSource:[
            [52, 65, 67, 45, 37, 52, 32],
            [68, 52, 63, 51, 30, 51, 51],
            [60, 50, 42, 53, 66, 70, 41],
            [66, 64, 46, 40, 47, 41, 45],
            [65, 42, 58, 32, 36, 44, 49],
            [54, 46, 61, 46, 40, 39, 41],
            [48, 46, 61, 47, 49, 41, 41],
            [69, 52, 41, 44, 41, 52, 46],
            [50, 59, 44, 43, 27, 42, 26],
            [47, 49, 66, 53, 50, 34, 31],
            [61, 40, 62, 26, 34, 54, 56]
        ],
        titleSettings: {
         text: 'Product wise Monthly sales revenue for a e-commerce website',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labelRotation:90,
            opposedPosition: true,
            labels: [
                'Month of Feburary 2023',
                'Month of March 2023',
                'Month of April 2023',
                'Month of May 2023',
                'Month of June 2023',
                'Month of July 2023',
                'Month of August 2023',
                'Month of September 2023',
                'Month of October 2023',
                'Month of November 2023',
                'Month of December 2023' 
            ]
        },
        yAxis:{
            labelRotation:45,
            labels: [ 
                'Ace Apparels',
                'Alpha Apparels',
                'RL Garments',
                'RRD Garments',
                'RRD Apparels',
                'RR Garments',
                'SR Garments'
            ]
        },
        legendSettings: {
            visible: false
        },
        paletteSettings: {
            palette: [
                { color: '#F0C27B' },
                { color: '#4B1248' }
            ],
        }
    }
  },
  provide:{
    heatmap:[Tooltip]
  }
}
</script>
