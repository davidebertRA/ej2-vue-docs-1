

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :views='views' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';
import { readonlyData } from './datasource.js';

Vue.use(SchedulePlugin);

export default {
  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['Day','Week','WorkWeek'],
      eventSettings: {
        dataSource: readonlyData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek]
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



