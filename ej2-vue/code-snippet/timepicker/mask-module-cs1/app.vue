


<template>
<div id="app">
        <div class='wrapper'>
        <ejs-timepicker id="timepicker" :enableMask="true"></ejs-timepicker>
     </div>
  </div>
</template>
<script>
import Vue from "vue";
import { TimePickerPlugin, TimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

TimePicker.Inject(MaskedDateTime)
Vue.use(TimePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
    };
  },
  provide: {
      timepicker: [MaskedDateTime]
  }  
});
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
</style>



