

<template>
    <div id="app">
      <div class='wrapper'>
        <ejs-datepicker :placeholder="waterMark" :floatLabelType="Auto"></ejs-datepicker>
      </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DatePickerPlugin);
export default {
data () {
    return {
      waterMark : 'Select a date'
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  .wrapper {
    max-width: 250px;
    margin: 0 auto;
  }

  .e-input-group.e-control-wrapper.e-float-input .e-float-text::after {
    content: '*';
    color: red;
  }
</style>


