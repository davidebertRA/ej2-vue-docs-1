

<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :enableTooltip='true' :tooltipTemplate="tooltipTemplate">
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
export default {
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      tooltipTemplate: function () {
        return {
          template: Vue.component('tooltipTemplate', {
            template: `<div class='e-kanbanTooltipTemp'>
                        <table>
                            <tr>
                                <td class="details">
                                    <table>
                                        <colgroup>
                                            <col style="width:30%">
                                            <col style="width:70%">
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td class="CardHeader">Assignee:</td>
                                                <td>{{data.Assignee}}</td>
                                            </tr>
                                            <tr>
                                                <td class="CardHeader">Type:</td>
                                                <td>{{data.Type}}</td>
                                            </tr>
                                            <tr>
                                                <td class="CardHeader">Estimate:</td>
                                                <td>{{data.Estimate}}</td>
                                            </tr>
                                            <tr>
                                                <td class="CardHeader">Summary:</td>
                                                <td>{{data.Summary}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>`,
            data() { }
          })
        }
      },
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

.e-kanbanTooltipTemp {
    width: 250px;
    padding: 3px;
}

.e-kanbanTooltipTemp>table {
    width: 100%;
}

.e-kanbanTooltipTemp td {
    vertical-align: top;
}
</style>



