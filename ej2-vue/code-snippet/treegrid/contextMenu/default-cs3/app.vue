

<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :editSettings='editSettings' :allowPaging='true' :pageSettings='pageSettings' :contextMenuItems="contextMenuItems" :contextMenuOpen='contextMenuOpen' :contextMenuClick='contextMenuClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>

<script>
import Vue from "vue";
import { TreeGridPlugin, ContextMenu, Page, Edit, TreeGridComponent  } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-vue-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-vue-navigations';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(TreeGridPlugin);

export default {
  data ()  {
    return {
      data: sampleData,
      editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Row' },
      pageSettings: { pageSize: 7 },
      contextMenuItems: [
          {text: 'Edit Record', target: '.e-content', id: 'Edit_record'},
          { text: 'Delete Record', target: '.e-content', id: 'Delete_record' },
      ],
    };
  },
  provide: {
      treegrid: [ ContextMenu, Page, Edit ]
  },
  methods:{
      contextMenuOpen:function (args: BeforeOpenCloseEventArgs) {
        if (args.rowInfo.rowData.hasChildRecords == true) {
          this.$refs.treegrid.ej2Instances.grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],true);
          this.$refs.treegrid.ej2Instances.grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],false);
        } else  {
          this.$refs.treegrid.ej2Instances.grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],false);
          this.$refs.treegrid.ej2Instances.grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],true);
        }
      },
      contextMenuClick:function (args: MenuEventArgs) {
        if(args.element.innerHTML == "Edit Record"){
            this.$refs.treegrid.ej2Instances.grid.editModule.startEdit(args.rowInfo.row);
        }
        else if(args.element.innerHTML == "Delete Record"){
             this.$refs.treegrid.ej2Instances.grid.editModule.deleteRecord(args.rowInfo.row);
        }
      }
  }
}
</script>



