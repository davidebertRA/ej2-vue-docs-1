

<template>
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :navigated='onNavigate' ref='Calendar'></ejs-calendar>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);
export default {
    methods: {
        onNavigate: function(args){
            let date;
            if (args.event.currentTarget.classList.contains('e-next')) {
            //Increments the month while clicking the next icon.
            date = new Date(args.date.setMonth(args.date.getMonth() + 1));
            }
            if (args.event.currentTarget.classList.contains('e-prev')) {
            //Decrements the month while clicking the previous icon.
            date = new Date(args.date.setMonth(args.date.getMonth() - 1));
            }
            if (args.view == 'month') {+
                this.$refs.Calendar.navigateTo('month', date);
            }

        }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
 .wrap {
    margin: 0px auto;
    max-width: 250px;
}

</style>


