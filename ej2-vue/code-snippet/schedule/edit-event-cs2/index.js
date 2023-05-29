
    import Vue from "vue";
    import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';
    import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
    Vue.use(ButtonPlugin);
    import { SchedulePlugin, Day, Week, WorkWeek, Month } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);

    let scheduleData =[{
        Id: 3,
        Subject: 'Testing',
        StartTime: new Date(2018, 1, 11, 9, 0),
        EndTime: new Date(2018, 1, 11, 10, 0),
        IsAllDay: false,
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
    },{
        Id: 4,
        Subject: 'Vacation',
        StartTime: new Date(2018, 1, 12, 11, 0),
        EndTime: new Date(2018, 1, 12, 12, 0),
        IsAllDay: false,
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
    }];
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div id="container">
            <tr>
                <td>
                    <div>
                        <ejs-button id="btn1" v-on:click.native="onEditClick">Edit</ejs-button>
                    </div>
                </td>
            </tr>
            <ejs-schedule ref='scheduleObj' width="100%" height="520px" :eventSettings='eventSettings' :selectedDate='selectedDate'>
                <e-views>
                    <e-view option="Day"></e-view>
                    <e-view option="Week"></e-view>
                    <e-view option="WorkWeek"></e-view>
                    <e-view option="Month"></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                eventSettings: { dataSource: scheduleData },
                selectedDate: new Date(2018, 1, 15),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month]
        },
        methods: {
            onEditClick: function () {
                let data = new DataManager(this.$refs.scheduleObj.getCurrentViewEvents()).executeLocal(new Query().where('RecurrenceID', 'equal', 3));
                data[0].Subject = 'Edited';
                this.$refs.scheduleObj.saveEvent(data[0], 'EditOccurrence');
            }
        }
    
});