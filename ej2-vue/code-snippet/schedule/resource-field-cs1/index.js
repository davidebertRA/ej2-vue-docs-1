
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { eventData } from './datasource.js';

Vue.use(SchedulePlugin);

var editorTemplateVue = Vue.component('editorTemplate', {
  template: `<table class="custom-event-editor" width="100%" cellpadding="5">
        <tbody>
            <tr>
                <td class="e-textlabel">Summary</td>
                <td colspan="4">
                    <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" />
                </td>
            </tr>
            <tr>
            <td class="e-textlabel">From</td>
                <td colspan="4">
                    <input id="StartTime" class="e-field" type="text" name="StartTime" />
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">To</td>
                <td colspan="4">
                    <input id="EndTime" class="e-field" type="text" name="EndTime" />
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">Owner</td>
                <td colspan="4">
                    <input type="text" id="OwnerId" name="OwnerId" class="e-field" style="width: 100%" />
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">Reason</td>
                <td colspan="4">
                    <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                </td>
            </tr>
        </tbody>
    </table>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views' :selectedDate='selectedDate'
        :eventSettings='eventSettings' :editorTemplate='editorTemplate' :popupOpen='onPopupOpen'
        :group='group'>
        <e-resources>
          <e-resource field='OwnerId' title='Owner' name='Owners' :dataSource='ownerDataSource' textField='text' idField='id' colorField='color'>
          </e-resource>
        </e-resources>
      </ejs-schedule>
    </div>
  </div>
`,

  data() {
    return {
      height: '550px',
      width: '100%',
      views: ['Day', 'Week', 'WorkWeek', 'Month'],
      eventSettings: {
        dataSource: eventData
      },
      selectedDate: new Date(2018, 1, 15),
      group: { resources: ['Owners'] },
      ownerDataSource: [
        { text: 'Nancy', id: 1, color: '#1aaa55' },
        { text: 'Smith', id: 2, color: '#7fa900' },
        { text: 'Paul', id: 3, color: '#357cd2' }
      ],
      editorTemplate: function(e) {
        return {
          template: editorTemplateVue
        };
      }
    };
  },
  methods: {
    onPopupOpen: function(args) {
      if (args.type === 'Editor') {
        let startElement = args.element.querySelector('#StartTime');
        if (!startElement.classList.contains('e-datetimepicker')) {
          new DateTimePicker(
            { value: new Date(startElement.value) || new Date() },
            startElement
          );
        }
        let endElement = args.element.querySelector('#EndTime');
        if (!endElement.classList.contains('e-datetimepicker')) {
          new DateTimePicker(
            { value: new Date(endElement.value) || new Date() },
            endElement
          );
        }
        let processElement = args.element.querySelector('#OwnerId');
        if (!processElement.classList.contains('e-multiselect')) {
          let multiSelectObject = new MultiSelect({
            placeholder: 'Choose a owner',
            fields: { text: 'text', value: 'id' },
            dataSource: this.ownerDataSource,
            value: [args.data.OwnerId],
          });
          multiSelectObject.appendTo(processElement);
        }
      }
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month]
  }

});