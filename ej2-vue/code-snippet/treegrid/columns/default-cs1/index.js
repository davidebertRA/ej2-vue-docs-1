
import Vue from "vue";
import { TreeGridPlugin, Sort, Resize, ColumnMenu, Page, Filter } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' :allowPaging='true' :showColumnMenu='true' childMapping='subtasks'
         :allowFiltering='true' :filterSettings='filterSettings' :allowResizing='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' :showColumnMenu='false' format='yMd' type='date' width=90></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

 data() {
    return {
      data: sampleData,
      filterSettings: { type: "Menu" },
      pageSettings: { pageCount: 4, pageSize: 10 }
    };
  },
  provide: {
      treegrid: [Sort, Resize, ColumnMenu, Page, Filter]
  }

});