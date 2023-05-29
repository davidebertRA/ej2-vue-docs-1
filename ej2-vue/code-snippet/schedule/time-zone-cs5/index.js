
import Vue from 'vue';
import { SchedulePlugin, Day, Week, Month, timezoneData } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);

let data: { [key: string]: Object }[] = [
    { Value: 'America/New_York', Text: '(UTC-05:00) Eastern Time' },
    { Value: 'UTC', Text: 'UTC' },
    { Value: 'Asia/Kolkata', Text: '(UTC+05:30) India Standard Time' }
];

timezoneData.splice(0, timezoneData.length, ...data);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'>
            <e-views>
                <e-view option='Day'></e-view>
                <e-view option='Week'></e-view>
                <e-view option='Month'></e-view>
            </e-views>
        </ejs-schedule>
    </div>
  </div>
`,

    data (){
        return {
            height: '550px',
            selectedDate: new Date(2018, 1, 1),
            eventSettings: {
                dataSource: scheduleData
            }
        }
    },
    provide: {
        schedule: [Day, Week, Month]
    }

});