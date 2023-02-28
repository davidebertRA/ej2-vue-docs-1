
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :splitterSettings = "splitterSettings"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: editingData,
            height:'450px',
            taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            durationUnit:'DurationUnit',
            child: 'subtasks'
        },
        splitterSettings:{
            columnIndex:4
            }
      };
  },

});