

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule id='Schedule' :height='height' :selectedDate='selectedData' :eventSettings='eventSettings' :views='views' :renderCell='onRenderCell'>
        </ejs-schedule>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { createElement } from '@syncfusion/ej2-base';
import { SchedulePlugin, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);

export default {
  data (){
    return {
      height: '550px',
      width: '100%',
      eventSettings: { dataSource: scheduleData  },
      selectedData: new Date(2018, 1, 15),
      views: ['Month'],
      currentView: 'Month'
    }
  },
  methods: {
      onRenderCell: function(args) {
        if (args.elementType === 'monthCells') {
            let ele = document.createElement('div');
            ele.innerHTML = this.getWeather(args.date);
            (args.element).appendChild(ele.firstChild);
        }
      },
      getWeather: function(value) {
        switch (value.getDay()) {
            case 0:
                return '<div class="weather-text">25°C</div>';
            case 1:
                return '<div class="weather-text">18°C</div>';
            case 2:
                return '<div class="weather-text">10°C</div>';
            case 3:
                return '<div class="weather-text">16°C</div>';
            case 4:
                return '<div class="weather-text">8°C</div>';
            case 5:
                return '<div class="weather-text">27°C</div>';
            case 6:
                return '<div class="weather-text">17°C</div>';
            default:
                return null;
        }
      }
  },
  provide: {
    schedule: [Month]
  }
}
</script>
<style>
  @import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
  .weather-text {
    float: right;
    margin: -20px 12px 0 0;
    width: 20px;
    height: 20px;
  }
</style>


