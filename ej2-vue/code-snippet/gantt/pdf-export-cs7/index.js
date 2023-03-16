
import Vue from "vue";
import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { ganttData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :columns="columns" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :height="height"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
        data: ganttData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskID', headerText:  'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText:  'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
            { field: 'Duration',headerText: 'Duration', width: '150'},
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
        toolbar: ['PdfExport'],
        toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_pdfexport') {
                    var exportProperties: PdfExportProperties = {
                      showPredecessorLines: true
                    };
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttChart.pdfExport(exportProperties);
                }
            },
      };
  },
  provide: {
      gantt: [Toolbar, PdfExport]
  }

});