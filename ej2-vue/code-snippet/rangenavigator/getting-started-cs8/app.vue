

<template>
    <div id="app">
      <ejs-button id='print' @click.native='print'>Print</ejs-button>
        <ejs-rangenavigator ref="chart" :valueType='valueType' :value='value' :labelFormat='labelFormat'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series :dataSource='data' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
    </div>
</template>
<script>
import Vue from "vue";
import { RangeNavigatorPlugin, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { bitCoinData } from "./default_data.js";

Vue.use(RangeNavigatorPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
     valueType: 'DateTime',
     value: [new Date('2017-09-01'), new Date('2018-02-01')],
     labelFormat: 'MMM-yy',
     data: bitCoinData
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries]
  },
  methods: {
    print: function() {
        this.$refs.chart.print();
    }
  }
};
</script>


