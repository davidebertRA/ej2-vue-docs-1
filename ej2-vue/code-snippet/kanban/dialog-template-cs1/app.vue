

<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :dialogSettings="dialogSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
</template>

<script>
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { extend } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';
Vue.use(KanbanPlugin);

var ContentTemplate = Vue.component("dialogTemplate", {
  template: `<div>
<table>
        <tbody>
            <tr>
                <td class="e-label">ID</td>
                <td>
                  <div class="e-float-input e-control-wrapper">
                    <input id="Id" name="Id" type="text" class="e-field" v-model='data.Id' disabled />
                  </div>
                </td>
            </tr>
            <tr>
                <td class="e-label">Status</td>
                <td>
                  <ejs-dropdownlist id="Status" name="Status" class="e-field" v-model='data.Status' :dataSource="dataSource1" placeholder="Status"></ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="e-label">Assignee</td>
                <td>
                  <ejs-dropdownlist id="Assignee" name="Assignee" v-model='data.Assignee' class="e-field" :dataSource="dataSource2" placeholder="Assignee"></ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="e-label">Priority</td>
                <td>
                  <ejs-dropdownlist type="text" name="Priority" id="Priority" v-model='data.Priority' popupHeight="300px" class="e-field" placeholder="Priority" :dataSource="dataSource3"></ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="e-label">Summary</td>
                <td>
                  <div class="e-float-input e-control-wrapper">
                    <textarea type="text" name="Summary" id="Summary" class="e-field" v-model='data.Summary'></textarea>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>`,
  data() {
    var statusData = [
      { text: "Open" },
      { text: "InProgress" },
      { text: "Testing" },
      { text: "Close" }
    ];
    var priorityData = ["Low", "Normal", "Critical", "Release Breaker", "High"];
    var assigneeData = [
      "Nancy Davloio",
      "Andrew Fuller",
      "Janet Leverling",
      "Steven walker",
      "Robert King",
      "Margaret hamilt",
      "Michael Suyama"
    ];
    return {
      dataSource1: statusData,
      dataSource2: assigneeData,
      dataSource3: priorityData,
      data: {}
    };
  }
});

export default {
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      dialogSettings: {
        template: function() {
          return { template: ContentTemplate };
        }
      }
    };
  },
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/material.css';
</style>



