

<template>
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker :strictMode="mode" :placeholder="waterMark"></ejs-daterangepicker>
      </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);
export default {
   data () {
     return {
           waterMark : 'Select a Range',
           mode : true
        }
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
 .wrapper {
    max-width: 250px;
    margin: 0 auto;
  }
</style>


