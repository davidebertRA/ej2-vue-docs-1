
import Vue from "vue";
import { GridPlugin, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging="true" :pageSettings='pageSettings' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :printComplete='printComplete' height='272px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      pageSettings: { pageSizes: true, pageSize: 6 },
      toolbarOptions: ['Print']
    };
  },
  methods: {
      toolbarClick: function() {
          for (var i = 0; i < this.$refs.grid.getColumns().length; i++) {
            if (this.$refs.grid.getColumns()[i].field == "CustomerID") {
                this.$refs.grid.getColumns()[i].visible = true;
            }
            else if (this.$refs.grid.getColumns()[i].field == "ShipCity") {
                    this.$refs.grid.getColumns()[i].visible = false;
            }
        }
      },
      printComplete: function() {
          for (var i = 0; i < this.$refs.grid.getColumns().length; i++) {
            if (this.$refs.grid.getColumns()[i].field == "CustomerID") {
                this.$refs.grid.getColumns()[i].visible = false;
            }
            else if (this.$refs.grid.getColumns()[i].field == "ShipCity") {
                    this.$refs.grid.getColumns()[i].visible = true;
            }
        }
      }
  },
  provide: {
      grid: [Toolbar, Page]
  }

});