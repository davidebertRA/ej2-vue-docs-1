
    import Vue from "vue";
    import { isNullOrUndefined } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
    import { scheduleData } from './datasource.js';
    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div id="container">
            <ejs-schedule ref='scheduleObj' width="100%" height="550px" :eventSettings='eventSettings' :selectedDate='selectedDate'
            :workHours='workHours' :actionBegin='onActionBegin'>
                <e-views>
                    <e-view option="Day"></e-view>
                    <e-view option="Week"></e-view>
                    <e-view option="WorkWeek"></e-view>
                    <e-view option="Month"></e-view>
                    <e-view option="Agenda"></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                eventSettings: {
                    dataSource: scheduleData
                },
                selectedDate: new Date(2018, 1, 15),
                workHours: {
                    highlight: true,
                    start: '11:00',
                    end: '20:00'
                }
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        },
        methods: {
            onActionBegin: function(args) {
                if(args.requestType =='eventChange') {
                    let weekEnds = [0, 6];
                    let weekDay = weekEnds.indexOf((args.data.StartTime).getDay()) >= 0;
                    let workHours =  (args.data.StartTime.getHours < parseInt(this.$refs.scheduleObj.workHours.start)) || (args.data.StartTime.getHours > parseInt(this.$refs.scheduleObj.workHours.end));
                    if(weekDay || workHours){
                        args.cancel = true;
                    }
                }
            }
        }
    
});