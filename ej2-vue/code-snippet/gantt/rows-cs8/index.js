
import Vue from "vue";
import { GanttPlugin, RowDD, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ganttData } from "./data-source.js";
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt :dataSource="data" :allowRowDragAndDrop='true' :taskFields = "taskFields" :height = "height" :rowDrop="rowDrop"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: ganttData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            rowDrop: function(args) {
                if (args.dropPosition == "middleSegment") {
                    args.cancel = true;
                }
            }
        };
    },
    provide: {
      gantt: [ RowDD, Edit, Selection ]
  }

});