


<template>
<div id="app">
        <div class='wrapper1'>
         <!-- Specifies the masked datetimepicker without mask placeholder. -->
         <ejs-datetimepicker id="datetimepicker" :enableMask="true" ></ejs-datetimepicker>
     </div>
     <div class='wrapper2'>
          <!-- Specifies the masked datetimepicker with mask placeholder. -->
         <ejs-datetimepicker id="placeholder" :enableMask="true" :maskPlaceholder='maskPlaceholderValue'></ejs-datetimepicker>
     </div>
  </div>
</template>
<script>
import Vue from "vue";
import { DateTimePickerPlugin, DateTimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

DateTimePicker.Inject(MaskedDateTime)
Vue.use(DateTimePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
      maskPlaceholderValue: {day: 'd', month: 'M', year: 'y', hour: 'h', minute: 'm', second: 's'}
    };
  },
  provide: {
      datetimepicker: [MaskedDateTime]
  }  
});
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
#wrapper1{
  min-width: 250px;
    float: left;
    margin-left: 100px;
}
#wrapper2{
  min-width: 250px;
  float: right;
  margin-right: 100px;
}
</style>


