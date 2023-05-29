
import Vue from "vue";
import { GridPlugin, Sort, ColumnMenu, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" id="gridcomp" :allowPaging='true' :allowSorting='true' :showColumnMenu='true' :sortSettings='sortSettings' :columnMenuItems='columnMenuItems'  :columnMenuClick='columnMenuClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
                <e-column field='CustomerID' headerText='Customer Name' :showInColumnChooser='false'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      columnMenuItems: [{text:'Clear Sorting', id:'gridclearsorting'}],
      sortSettings: {columns:[{direction: "Ascending", field: "OrderID"}]}
    };
  },
  methods: {
      columnMenuClick: function(args) {
        if(args.item.id === 'gridclearsorting'){
            this.$refs.grid.clearSorting();
        }
    }
  },
  provide: {
      grid: [Sort, ColumnMenu, Page]
  }

});