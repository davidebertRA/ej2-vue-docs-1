
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { extend, closest } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';
Vue.use(KanbanPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
      <h4>Kanban A</h4>
       <ejs-kanban id="kanbanA" ref="kanbanObjA" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :externalDropId='externalKanbanADropId' :dragStop="kanbanDragStopA">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      <div class="col-sm-6">
        <h4>Kanban B</h4>
        <ejs-kanban id="kanbanB" ref="kanbanObjB" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :externalDropId='externalKanbanBDropId' :dragStop="kanbanDragStopB">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
           <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
    </div>
  </div>
 </div>
`,

  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      },
      externalKanbanADropId: ['#kanbanB'],
      externalKanbanBDropId: ['#kanbanA']
    };
  },
   methods: {
      kanbanDragStopA: function (args) {
          let kanbanBElement = closest(args.event.target as Element, '#kanbanB');
          let kanbanObjA = this.$refs.kanbanObjA.ej2Instances;
          let kanbanObjB = this.$refs.kanbanObjB.ej2Instances;
          if (kanbanBElement) {
            kanbanObjA.deleteCard(args.data);
            args.data.forEach((card, i) => {
                const index = kanbanObjB.kanbanData.findIndex((colData) =>
                    colData[kanbanObjB.cardSettings.headerField] === card[kanbanObjB.cardSettings.headerField]);
                if (index !== -1) {
                    card[kanbanObjB.cardSettings.headerField] = Math.max(...kanbanObjB.kanbanData.map(
                        (obj) => parseInt(obj[kanbanObjB.cardSettings.headerField], 10))) + ++i;
                }
            });
            kanbanObjB.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
      },
      kanbanDragStopB: function (args) {
        let kanbanAElement = closest(args.event.target, '#kanbanA');
        let kanbanObjA = this.$refs.kanbanObjA.ej2Instances;
        let kanbanObjB = this.$refs.kanbanObjB.ej2Instances;
        if (kanbanAElement) {
            kanbanObjB.deleteCard(args.data);
            args.data.forEach((card, i) => {
            const index = kanbanObjA.kanbanData.findIndex((colData) =>
                colData[kanbanObjA.cardSettings.headerField] === card[kanbanObjA.cardSettings.headerField]);
            if (index !== -1) {
                card[kanbanObjA.cardSettings.headerField] = Math.max(...kanbanObjA.kanbanData.map(
                    (obj) => parseInt(obj[kanbanObjA.cardSettings.headerField], 10))) + ++i;
            }
        });
        kanbanObjA.addCard(args.data, args.dropIndex);
        args.cancel = true;
        }
      }
   }

});