
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px' :load = 'load'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' :visible = 'false' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
    load(args) {
      this.$refs.grid.$el.addEventListener('keydown', this.keyDownHandler);
    }

    keyDownHandler(e: any) {
      if(e.keyCode) {
        let gridIns = this.$refs.grid.ej2Instances;
        gridIns.addRecord();
      }
    }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }

});