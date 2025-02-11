
import Vue from "vue";
import { GridPlugin, Page, Group, LazyLoadGroup } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :allowGrouping='true' :groupSettings='groupSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign= 'Right' width='120'></e-column>
                <e-column field='ProductName' headerText='Product Name' width='160'></e-column>
                <e-column field='ProductID' headerText='Product ID' textAlign= 'Right width='120'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='160'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      groupSettings: { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] }
    };
  },
  methods: { },
  provide: {
    grid: [Page, Group, LazyLoadGroup]
  }

});