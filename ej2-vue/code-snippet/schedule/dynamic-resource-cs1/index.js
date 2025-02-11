
    import Vue from 'vue';
    import { holidayData, birthdayData, companyData, personalData } from './datasource.js';
    import { SchedulePlugin, Month, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
    import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';

    Vue.use(SchedulePlugin);
    Vue.use(CheckBoxPlugin);

    var calendarCollections = [
        { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
        { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
        { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
        { CalendarText: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
    ];

    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div class='col-lg-3'>
                <table id='property' title='Show / Hide Resource' style='width: 100%;padding-right:25px'>
                    <tbody>
                        <tr style='height: 50px'>
                                <td style='width: 100%'>
                                    <ejs-checkbox cssClass='personal' label='My Calender' value='1' :checked='true' :disabled='true' :change='onChange'></ejs-checkbox>
                                </td>
                            </tr>
                            <tr style='height: 50px'>
                                <td style='width: 100%'>
                                    <ejs-checkbox cssClass='company' label='Company' value='2' :checked='false' :change='onChange'></ejs-checkbox>
                                </td>
                            </tr>
                            <tr style='height: 50px'>
                                <td style='width: 100%'>
                                    <ejs-checkbox cssClass='birthday' label='Birthday' value='3' :checked='false' :change='onChange'></ejs-checkbox>
                                </td>
                            </tr>
                            <tr style='height: 50px'>
                                <td style='width: 100%'>
                                    <ejs-checkbox cssClass='holiday' label='Holiday' value='4' :checked='false' :change='onChange'></ejs-checkbox>
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div>
            <div id='container'>
                <ejs-schedule id='Schedule' ref='ScheduleObj' width='100%' height='550px' :group='group' :selectedDate='selectedDate'
                :eventSettings='eventSettings'>
                    <e-resources>
                        <e-resource field='CalendarId' title='Calendars' :dataSource='resourceDataSource' :allowMultiple='allowMultiple'
                         name='Calendars' textField='CalendarText' idField='CalendarId' colorField='CalendarColor'>
                        </e-resource>
                    </e-resources>
                    <e-views>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 3, 1),
                group: { resources: ['Calendars'] },
                resourceDataSource: [calendarCollections[0]],
                allowMultiple: true,
                eventSettings: { dataSource: this.generateCalendarData() }
            }
        },
        provide: {
            schedule: [Month, TimelineMonth]
        },
        methods: {
            generateCalendarData: function () {
                var collections = [];
                var dataCollections = [personalData, companyData, birthdayData, holidayData];
                for (var i = 0; i < dataCollections.length; i++) {
                    collections = collections.concat(dataCollections[i]);
                }
                return collections;
            },
            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let value = parseInt((args.event.currentTarget).querySelector('input').getAttribute('value'), 10);
                let resourceData = calendarCollections.filter(function (calendar) { return calendar.CalendarId === value; });
                if (args.checked) {
                    scheduleObj.addResource(resourceData[0], 'Calendars', value - 1);
                    scheduleObj.dataBind();
                } else {
                    scheduleObj.removeResource(value, 'Calendars');
                    scheduleObj.dataBind();
                }
            }
        }
    
});