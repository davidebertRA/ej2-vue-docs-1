
    import Vue from 'vue';
    import { resourceData } from './datasource.js';
    import { SchedulePlugin, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);
    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate' :currentView='currentView' :group='group' :rowAutoHeight='rowAutoHeight'>
                    <e-views>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field= 'RoomId' title= 'Room' name= 'Rooms' :dataSource='roomDataSource' textField='RoomText' idField='Id' colorField='RoomColor'>
                        </e-resource>
                        <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple' :dataSource='ownerDataSource'
                        textField='OwnerText' idField='Id' groupIDField= 'OwnerGroupId' colorField='OwnerColor'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
`,

        data () {
            return {
                width: '100%',
                height: '550px',
                currentView: 'TimelineWeek',
                rowAutoHeight: true,
                selectedDate: new Date(2021, 7, 4),
                group: {
                    resources: ['Rooms', 'Owners']
                },
                roomDataSource: [
                    { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
                    { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
                ],
                allowMultiple: true,
                ownerDataSource: [
                    { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
                    { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
                    { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
                ],
                eventSettings: { dataSource: resourceData, ignoreWhitespace: true },
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth]
        }
    
});