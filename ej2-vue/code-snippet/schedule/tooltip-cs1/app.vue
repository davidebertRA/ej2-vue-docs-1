

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { SchedulePlugin, TimelineViews, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { eventsData } from './datasource.js';

Vue.use(SchedulePlugin);

var eventTooltipTemplateVue = Vue.component('eventTooltipTemplate', {
  template:`<div class='tooltip-wrap'>
        <div class='content-area'><div class='name'>{{data.Subject}}</></div>
        <div v-if='data.City!== null && data.City!==undefined' class='city'>{{data.City}}</div>
        <div class='time'>From : {{data.StartTime.toLocaleString()}} </div>
        <div class='time'>To   : {{data.EndTime.toLocaleString()}} </div></div></div>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['TimelineDay', 'Week', 'WorkWeek', 'Month'],
      eventSettings: {
        dataSource: eventsData,
        enableTooltip: true,
        tooltipTemplate: function (e) {
          return {
            template: eventTooltipTemplateVue
          };
        }
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [TimelineViews, Week, WorkWeek, Month]
  }
}
</script>
<style>
  @import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
  @import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>



