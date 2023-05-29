
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='280px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=70 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' :customAttributes= "{class: 'customcss'}" width=100></e-column>
                <e-column field='startDate' headerText='Start Date' width=90 format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width=90 textAlign='Right'></e-column>
                <e-column field="progress" headerText="Progress" width="90" textAlign="Right" ></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

  data() {
    return {
      data: sampleData,
    };
  },

});