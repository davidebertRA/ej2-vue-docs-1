

<template>
  <div>
      <ejs-bulletchart id="bulletChart"
        :dataSource="data"
        valueField="value"
        targetField="target"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="Revenue"
        labelFormat="c"
      >
      <e-bullet-range-collection>
          <e-bullet-range end="500" color="red"></e-bullet-range>
          <e-bullet-range end="1000" color="blue"></e-bullet-range>
          <e-bullet-range end="1500" color="green"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
  </div>
</template>
<script>
import Vue from 'vue';
import { BulletChartPlugin } from '@syncfusion/ej2-vue-charts';
Vue.use(BulletChartPlugin);

export default {
  data () {
    return {
      data: [{ value: 1100, target: 950 }],
      minimum: 0, maximum: 1500, interval: 500
    }
  }
}
</script>


