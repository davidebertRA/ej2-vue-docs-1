

<template>
  <div id="container">
        <div id='calendar'>
           <ejs-calendar dayHeaderFormat="Short" ref="calendarObj"></ejs-calendar>
        </div>
        <div id="format">
            <label id="custom-input-label">Header Format Types</label>
            <ejs-dropdownlist id="select" :fields = "fields" :index = "currentIndex" :dataSource = "items" :popupHeight= "popupHeight" :change= "formatHandler">
            </ejs-dropdownlist>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(CalendarPlugin);
Vue.use(DropDownListPlugin);
export default {
   data () {
        return {
           items: [
            { sizeVal: 'Short' , sizeTxt: 'Short' },
            { sizeVal: 'Narrow' , sizeTxt: 'Narrow' },
            { sizeVal: 'Abbreviated' , sizeTxt: 'Abbreviated' },
            { sizeVal: 'Wide' , sizeTxt: 'Wide' },
            ],
            fields: { text: 'sizeTxt', value: 'sizeVal' },
            popupHeight: 200,
            currentIndex: 0,
            formatHandler: (args) => {
                 this.$refs.calendarObj.dayHeaderFormat = args.value;
            }
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
#container{
    width: 100%;
}
#calendar {
    width: 60%;
    margin: 30px auto;
    display: inline-flex;
}
#format {
    width: 20%;
    margin-left: 8%;
    display: inline-block;
}
#select {
    height: 30px;
    width: 150px;
    margin-top: 10px;
}
#custom-input-label{
    font-size: 15px;
    font-weight: bold
}


</style>


