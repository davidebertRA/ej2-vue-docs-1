

<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :swimlaneSettings="swimlaneSettings">
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
        swimlaneSettings: {
            template: function() {
                return {
                    template: Vue.component('swimlaneTemplate', {
                        template: `<div class='swimlane-template e-swimlane-template-table'>
                                        <div class="e-swimlane-row-text"><img :src="image(data)" :alt="data.keyField" />
                                        <span>{{data.textField}}</span></div>
                                    </div>`,
                        data() {
                            return {
                                data: {}
                            };
                        },
                        methods: {
                            image: function(data) {
                                return data.keyField + '.png';
                            }
                        }
                    })
                }
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

.swimlane-template {
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
}

.swimlane-template img {
    height: 24px;
    width: 24px;
    border-radius: 50%;
}

.swimlane-template span {
    padding-left: 5px;
    vertical-align: middle;
}

.e-kanban .e-kanban-content .e-content-row.e-swimlane-row .e-content-cells .e-swimlane-header .e-item-count {
    padding: 4px;
}
</style>



