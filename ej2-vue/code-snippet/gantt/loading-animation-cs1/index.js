
import Vue from "vue";
import { GanttPlugin, Selection, VirtualScroll, Sort, Filter } from "@syncfusion/ej2-vue-gantt";
import{tempData} from "./datasource.js";

Vue.use(GanttPlugin);


var virtualData = [];
var projId = 1;
for (var i = 0; i < 50; i++) {
    var x = virtualData.length + 1;
    var parent_1 = {};
    parent_1['TaskID'] = x;
    parent_1['TaskName'] = 'Project' + (projId++);
    virtualData.push(parent_1);
    for (var j = 0; j < tempData.length; j++) {
        var subtasks = {};
        subtasks['TaskID'] = tempData[j].TaskID + x;
        subtasks['TaskName'] = tempData[j].TaskName;
        subtasks['StartDate'] = tempData[j].StartDate;
        subtasks['Duration'] = tempData[j].Duration;
        subtasks['Progress'] = tempData[j].Progress;
        subtasks['parentID'] = tempData[j].parentID + x;
        virtualData.push(subtasks);
    }
}



new Vue({
el: '#app',
    template: `
     <div>
        <ejs-gantt ref='gantt'
            :dataSource= "data"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :allowSorting= "true"
            :allowFiltering= "true"
            :enableVirtualization= "true"
            :labelSettings= "labelSettings"
            :height= "height"
            :treeColumnIndex= "1"
            :highlightWeekends= "true"
            :columns= "columns"
            :splitterSettings= "splitterSettings">
        </ejs-gantt>
    </div>
`,
data:  function() {
    return{



data : virtualData,
         taskFields: {
             id: 'TaskID',
             name: 'TaskName',
             startDate: 'StartDate',
             endDate: 'EndDate',
             duration: 'Duration',
             progress: 'Progress',
             parentID: 'parentID'
         },
         allowSorting:true,
         allowFiltering:true,
         columns: [
            { field: 'TaskID' },
             { field: 'TaskName' },
             { field: 'StartDate' },
             { field: 'Duration' },
             { field: 'Progress' }
         ],
         height: '450px',
         labelSettings: {
            taskLabel: 'Progress'
         },
         splitterSettings: {
             columnIndex: 2
         }
    }
}
,
provide: {
   gantt: [ Selection, VirtualScroll, Sort, Filter]
}

});
new Vue({
	el: '#app',
	template: `

`,

});