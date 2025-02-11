
    import Vue from 'vue';
    import { resourceData } from './datasource.js';
    import { SchedulePlugin, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='container'>
            <ejs-schedule ref='scheduleObj' id='Schedule' width='100%' height='550px' :eventSettings='eventSettings'
            :selectedDate='selectedDate' :currentView='currentView' :group='group' :renderCell='onRenderCell'>
                <e-views>
                    <e-view option='TimelineDay'></e-view>
                    <e-view option='TimelineWeek'></e-view>
                    <e-view option='TimelineMonth'></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='RoomId' title='Room' name='Rooms' :dataSource='roomDataSource' textField='RoomText' idField='Id' groupIDField= 'RoomGroupId' colorField='RoomColor'>
                    </e-resource>
                    <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple' :dataSource='ownerDataSource'
                    textField='OwnerText' idField='Id' groupIDField= 'OwnerGroupId' colorField='OwnerColor'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
`,

        data () {
            return {
                selectedDate: new Date(2018, 3, 4),
                currentView: 'TimelineWeek',
                group: {
                    resources: ['Rooms', 'Owners']
                },
                roomDataSource: [
                    { RoomText: 'ROOM 1', Id: 1, RoomGroupId: 1, RoomColor: '#cb6bb2' },
                    { RoomText: 'ROOM 2', Id: 2, RoomGroupId: 2, RoomColor: '#56ca85' }
                ],
                allowMultiple: true,
                ownerDataSource: [
                    { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
                    { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
                    { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
                ],
                eventSettings: { dataSource: resourceData }
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth]
        },
        methods: {
            onRenderCell(args) {
                if (args.elementType == 'resourceGroupCells' && args.element.className.indexOf('e-work-hours') > 0) {
                    args.element.style.background = "#FAFAE3";
                }
            }
        }
    
});