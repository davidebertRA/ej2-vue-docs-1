

<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowFiltering='true' height='273px' :filterSettings='filterOptions' :actionBegin = 'actionBegin'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160' ></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Filter } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data ()  {
    return {
      data: sampleData,
      filterOptions: {
        type: 'Excel'
      }
    };
  },
  provide: {
      treegrid: [ Filter ]
    },
     methods: {
    actionBegin(args) {
       if(args.requestType === 'filtersearchbegin' && args.column.type === "string")
      {
        args.operator = 'contains';
      }
    }
  }
}
</script>



