
import Vue from "vue";
import { GanttPlugin, Toolbar, ExcelExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ganttData } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowExcelExport='true' :height="height" :treeColumnIndex="1"></ejs-gantt>
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
        toolbar: ['ExcelExport'],
        toolbarClick: (args: ClickEventArgs) => {
                if (args.item.id === 'GanttContainer_excelexport') {
                    var excelExportProperties: ExcelExportProperties = {
                        header: {
                            headerRows: 7,
                            rows: [
                                { cells: [{ colSpan: 4, value: "Northwind Traders", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
                                { cells: [{ colSpan: 4, value: "2501 Aerial Center Parkway", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                                { cells: [{ colSpan: 4, value: "Suite 200 Morrisville, NC 27560 USA", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                                { cells: [{ colSpan: 4, value: "Tel +1 888.936.8638 Fax +1 919.573.0306", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                                { cells: [{ colSpan: 4, hyperlink: { target: 'https://www.northwind.com/', displayText: 'www.northwind.com' }, style: { hAlign: 'Center' } }] },
                                { cells: [{ colSpan: 4, hyperlink: { target: 'mailto:support@northwind.com' }, style: { hAlign: 'Center' } }] },
                            ]
                        },
                        footer: {
                            footerRows: 4,
                            rows: [
                                { cells: [{ colSpan: 4, value: "Thank you for your business!", style: { hAlign: 'Center', bold: true } }] },
                                { cells: [{ colSpan: 4, value: "!Visit Again!", style: { hAlign: 'Center', bold: true } }] }
                            ]
                        },
                    };
                    var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttObj.excelExport(excelExportProperties);
                }
            },
      };
  },
  provide: {
      gantt: [Toolbar, ExcelExport]
  }

});