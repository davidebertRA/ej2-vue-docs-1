
import Vue from "vue";
import { PivotViewPlugin, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { alphanumeric_data } from './alphanumeric_data.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :showGroupingBar="showGroupingBar"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: alphanumeric_data,
        rows: [{ name: 'ProductID', dataType: 'number' }],
        columns: [{ name: 'Country' }],
        values: [{ name: 'Sold', caption:'Units Sold' }, { name: 'Amount', caption:'Sold Amount' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true
    }
  },
  provide: {
        pivotview: [GroupingBar]
    }

});