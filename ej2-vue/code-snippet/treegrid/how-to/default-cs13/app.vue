

<template>
  <div id="app">
        <ejs-treegrid :dataSource="data" :allowPaging='true' :allowFiltering='true' :treeColumnIndex="1" idMapping='TaskID' parentIdMapping='parentID' ref="treegrid" :toolbar="toolbarOptions"  :allowPdfExport='true' :pageSettings='pageSettings' :toolbarClick='toolbarClick'>
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" :isPrimaryKey='true' width="70" textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="100" ></e-column>
          <e-column field="StartDate" headerText="Start Date" format="yMd" editType= 'datepickeredit' width="100" textAlign="Right"></e-column>
          <e-column field="EndDate" headerText="End Date" width="100" format="yMd" editType='datepickeredit' textAlign="Right"></e-column>
          <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
          <e-column field="Priority" headerText="Priority" width="90" textAlign="Left"></e-column>
        </e-columns>
       </ejs-treegrid>
  </div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page, Filter, Toolbar, PdfExport, ExcelExport} from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";

Vue.use(TreeGridPlugin);
export default {
  data() {
    return {
      data: projectData,
      toolbarOptions: ['PdfExport'],
      pageSettings: { pageSize: 4, pageCount:4 },
    };
  },
  methods: {
    toolbarClick(args){
        if (args['item'].id.indexOf("pdfexport") != -1) {
           let pdfdata;
           pdfdata = this.$refs.treegrid.ej2Instances.filterModule.filteredResult;
           let exportProperties = {
             dataSource: pdfdata,
           };
            this.$refs.treegrid.pdfExport(exportProperties);
       }
     },
  },
  provide: {
    treegrid: [Page, Filter, Toolbar, PdfExport, ExcelExport]
  }
}
</script>



