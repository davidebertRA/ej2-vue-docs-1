


<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-button id='export' isToggle="true" v-on:click.native='clickExport'> Export </ejs-button>
      <ejs-circulargauge id="gauge" ref="gauge" allowImageExport="true">
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, ImageExport } from "@syncfusion/ej2-vue-circulargauge";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(CircularGaugePlugin);
Vue.use(ButtonPlugin);
export default {
  data() {
    return {

    }
  },
  methods: {
    clickExport: function (args) {
      this.$refs.gauge.ej2Instances.export('PNG', 'Gauge');
    }
  },
  provide: {
    circulargauge: [ImageExport],
  }
};
</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>


