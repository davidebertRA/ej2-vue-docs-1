

<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' ref='ScheduleObj' width='100%' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :group='group'>
                <e-views>
                    <e-view option='TimelineMonth' :eventTemplate='timelineEventTemplate' :allowVirtualScrolling='virtualScroll'  isSelected="true"></e-view>
                     <e-view option="TimelineYear" orientation="Vertical" :allowVirtualScrolling="virtualScroll"></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple' :dataSource='ownerData' textField='Text' idField='Id' colorField='Color'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { generateResourceData, generateStaticEvents } from './datasource.js';
    import { SchedulePlugin, TimelineViews, TimelineMonth, TimelineYear, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    var timelineEventTemplateVue = Vue.component('timelineTemplate', {
        template: `<div class='template-wrap' style='{background: data.PrimaryColor}'>
            <div class="subject" style='{background: data.SecondaryColor};'>{{data.Subject}}</div></div>`,
        data() {
            return {
                data: {}
            };
        }
    });

    export default {
        data: function () {
            return {
                selectedDate: new Date(2018, 4, 1),
                timelineEventTemplate: function (e) {
                    return {
                        template: timelineEventTemplateVue
                    };
                },
                allowMultiple: true,
                virtualScroll: true,
                group: {
                    byGroupID: false,
                    resources: ['Owners']
                },
                ownerData: generateResourceData(1, 300, 'Resource'),
                eventSettings: { dataSource: generateStaticEvents(new Date(2018, 4, 1), 300, 12) }
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth, TimelineYear, Resize, DragAndDrop]
        }
    }
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

    .e-schedule .e-timeline-month-view .template-wrap .subject {
        padding: 10px 25px;
    }

    .e-schedule .e-timeline-year-view .template-wrap .subject {
        padding: 1px 25px;
    }

    .e-schedule .e-more-event-popup .template-wrap .subject {
        padding: 0px 25px;
    }

    .e-schedule .template-wrap {
        width: 100%;
    }

    .e-schedule .e-timeline-month-view .e-resource-left-td {
        width: 150px;
    }
</style>



