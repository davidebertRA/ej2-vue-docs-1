
    import Vue from 'vue';
    import { extend } from '@syncfusion/ej2-base';
    import { scheduleData } from './datasource.js';
    import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
    import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
    Vue.use(ButtonPlugin);
    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <tr>
                    <td>
                        <div>
                            <ejs-button  v-on:click.native='onSubmit'>Click to open Editor</ejs-button>
                        </div>
                    </td>
                    <td>
                        <div>
                            <ejs-button v-on:click.native='onEventSubmit'>Click to open Event Editor</ejs-button>
                        </div>
                    </td>
                </tr>
                <br><br>
                <ejs-schedule id='Schedule' width='100%' height='500px' :eventSettings='eventSettings' :selectedDate='selectedDate'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='WorkWeek'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true)  },
                selectedDate: new Date(2018, 1, 15)
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month]
        },
        methods: {
            onEventSubmit: function () {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                let eventData ={
                    Id: 4,
                    Subject: 'Meteor Showers in 2018',
                    StartTime: new Date(2018, 1, 14, 13, 0),
                    EndTime: new Date(2018, 1, 14, 14, 30)
                };
                scheduleObj.openEditor(eventData,'Save');
            },
            onSubmit: function () {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                let cellData ={
                      startTime: new Date(2018, 1, 15, 10, 0),
                      endTime: new Date(2018, 1, 15, 11, 0),
                };
                scheduleObj.openEditor(cellData,'Add');
            }
        }
    
});