
import Vue from 'vue';
import {SchedulePlugin, Day, Week, WorkWeek, Month, Agenda  } from '@syncfusion/ej2-vue-schedule';
import { extend, Internationalization } from "@syncfusion/ej2-base";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { quickInfoData } from './datasource.js';

Vue.use(SchedulePlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
Vue.use(TextBoxPlugin);

var resourceData = [
  { Name: "Jammy", Id: 1, Capacity: 20, Color: "#ea7a57", Type: "Conference" },
  { Name: "Tweety", Id: 2, Capacity: 7, Color: "#7fa900", Type: "Cabin" },
  { Name: "Nestle", Id: 3, Capacity: 5, Color: "#5978ee", Type: "Cabin" },
  { Name: "Phoenix", Id: 4, Capacity: 15, Color: "#fec200", Type: "Conference" },
  { Name: "Mission", Id: 5, Capacity: 25, Color: "#df5286", Type: "Conference" },
  { Name: "Hangout", Id: 6, Capacity: 10, Color: "#00bdae", Type: "Cabin" },
  { Name: "Rick Roll", Id: 7, Capacity: 20, Color: "#865fcf", Type: "Conference" },
  { Name: "Rainbow", Id: 8, Capacity: 8, Color: "#1aaa55", Type: "Cabin" },
  { Name: "Swarm", Id: 9, Capacity: 30, Color: "#df5286", Type: "Conference" },
  { Name: "Photogenic", Id: 10, Capacity: 25, Color: "#710193", Type: "Conference" }
];

var headerTemplateVue = Vue.component('headerTemplate', {
  template: `<div class="quick-info-header">
    <div class="quick-info-header-content" v-if="data.elementType == 'cell'" :style="{'align-items':'center','color':'#919191'}">
      <div class="quick-info-title">{{getHeaderTitle(data)}}</div>
      <div class="duration-text">{{getHeaderDetails(data)}}</div>
    </div>
    <div class="quick-info-header-content" v-else :style="{'background': getHeaderStyles(data),'color':'#FFFFFF'}">
      <div class="quick-info-title">{{getHeaderTitle(data)}}</div>
      <div class="duration-text">{{getHeaderDetails(data)}}</div>
    </div>
  </div>`,
  data() {
    return {
        intl: new Internationalization(),
      data: {}
    };
  },
  methods: {
    getHeaderStyles: function(data) {
      const scheduleObj = document.querySelector(".e-schedule").ej2_instances[0];
      const resources = scheduleObj.getResourceCollections().slice(-1)[0];
      const resourceData = resources.dataSource.filter(resource => resource.Id === data.RoomId)[0];
      return resourceData.Color;
    },
    getHeaderTitle: function(data) {
      return data.elementType === "cell" ? "Add Appointment" : "Appointment Details";
    },
    getHeaderDetails: function(data) {
      return (
        this.intl.formatDate(data.StartTime, { type: "date", skeleton: "full" }) + " (" +
        this.intl.formatDate(data.StartTime, { skeleton: 'hm' }) + " - " +
        this.intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ")"
      );
    }
  }
});

var contentTemplateVue = Vue.component('contentTemplate', {
  template: `<div class="quick-info-content"><div class="e-cell-content" v-if="data.elementType === 'cell'">
    <div class="content-area"><ejs-textbox ref="titleObj" id="title" placeholder="Title"></ejs-textbox></div>
    <div class="content-area"><ejs-dropdownlist ref="eventTypeObj" id="eventType" :dataSource="roomData" :index="0" :fields="fields"
    popupHeight="200px" placeholder="Choose Type"></ejs-dropdownlist></div>
    <div class="content-area"><ejs-textbox ref="notesObj" id="notes" placeholder="Notes"></ejs-textbox></div></div>
    <div class="event-content" v-else><div class="meeting-type-wrap"><label>Subject</label>:<span>{{data.Subject}}</span></div>
    <div class="meeting-subject-wrap"><label>Type</label>:<span>{{getEventType(data)}}</span></div>
    <div class="notes-wrap"><label>Notes</label>:<span>{{data.Description}}</span></div></div></div>`,
  data() {
    return {
        fields: { text: "Name", value: "Id" },
      roomData: extend([], resourceData, undefined, true),
      data: {}
    };
  },
  methods: {
    getEventType: function(data) {
      const scheduleObj = document.querySelector(".e-schedule").ej2_instances[0];
      const resources = scheduleObj.getResourceCollections().slice(-1)[0];
      const resourceData = resources.dataSource.filter(resource => resource.Id === data.RoomId)[0];
      return resourceData.Name;
    }
  }
});

var footerTemplateVue = Vue.component('footerTemplate', {
  template: `<div class="quick-info-footer"><div class="cell-footer" v-if="data.elementType === 'cell'">
    <ejs-button id="more-details" cssClass="e-flat" content="More Details" v-on:click.native="buttonClickActions"></ejs-button>
    <ejs-button id="add" cssClass="e-flat" content="Add" :isPrimary="true" v-on:click.native="buttonClickActions"></ejs-button>
    </div><div class="event-footer" v-else>
    <ejs-button id="delete" cssClass="e-flat" content="Delete" v-on:click.native="buttonClickActions"></ejs-button>
    <ejs-button id="more-details" cssClass="e-flat" content="More Details" :isPrimary="true" v-on:click.native="buttonClickActions"></ejs-button>
    </div></div>`,
  data() {
    return {
      data: {}
    };
  },
    methods: {
    buttonClickActions: function(e) {
      const scheduleObj = document.querySelector(".e-schedule").ej2_instances[0];
      const quickPopup = scheduleObj.element.querySelector(".e-quick-popup-wrapper");
      const getSlotData = function() {
        const titleObj = quickPopup.querySelector("#title").ej2_instances[0];
        const notesObj = quickPopup.querySelector("#notes").ej2_instances[0];
        const eventTypeObj = quickPopup.querySelector("#eventType").ej2_instances[0];
        const cellDetails = scheduleObj.getCellDetails(scheduleObj.getSelectedElements());
        let addObj = {};
        addObj.Id = scheduleObj.getEventMaxID();
        addObj.Subject = titleObj.value;
        addObj.StartTime = new Date(+cellDetails.startTime);
        addObj.EndTime = new Date(+cellDetails.endTime);
        addObj.Description = notesObj.value;
        addObj.RoomId = eventTypeObj.value;
        return addObj;
      };
      if (e.target.id === "add") {
        const addObj = getSlotData();
        scheduleObj.addEvent(addObj);
      } else if (e.target.id === "delete") {
        const eventDetails = scheduleObj.activeEventData.event;
        let currentAction = "Delete";
        if (eventDetails.RecurrenceRule) {
          currentAction = "DeleteOccurrence";
        }
        scheduleObj.deleteEvent(eventDetails, currentAction);
      } else {
        const isCellPopup = quickPopup.firstElementChild.classList.contains("e-cell-popup");
        const eventDetails = isCellPopup ? getSlotData() : scheduleObj.activeEventData.event;
        let currentAction = isCellPopup ? "Add" : "Save";
        if (eventDetails.RecurrenceRule) {
          currentAction = "EditOccurrence";
        }
        scheduleObj.openEditor(eventDetails, currentAction, true);
      }
      scheduleObj.closeQuickInfoPopup();
    }
  }
});


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views'
        :selectedDate='selectedDate' :eventSettings='eventSettings'
        :quickInfoTemplates='quickInfoTemplates'>
        <e-resources>
          <e-resource field="RoomId" title="Room Type" name="MeetingRoom" textField="Name" idField="Id" colorField="Color" :dataSource="roomData"></e-resource>
        </e-resources>
      </ejs-schedule>
    </div>
  </div>
`,

  data() {
    return {
      height: '650px',
      width: '100%',
      eventSettings: {
        dataSource: quickInfoData
      },
      selectedDate: new Date(2020, 0, 9),
      views: ['Day', 'Week', 'WorkWeek'],
      roomData: extend([], resourceData, undefined, true),
      quickInfoTemplates: {
        header: function(e) {
          return {
            template: headerTemplateVue
          };
        },
        content: function(e) {
          return {
            template: contentTemplateVue
          };
        },
        footer: function(e) {
          return {
            template: footerTemplateVue
          };
        }
      }
    };
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }

});