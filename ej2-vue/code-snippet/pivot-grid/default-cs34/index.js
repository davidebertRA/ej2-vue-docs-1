
import Vue from "vue";
import { PivotViewPlugin, PivotActionFailureEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :actionFailure="actionFailure"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350
    }
  },
   methods: {
    actionFailure: function (args: PivotActionFailureEventArgs) {
      if (args.actionName == 'Drill down' || args.actionName == 'Drill up') {
        // Triggers when the current UI action fails to achieve the desired result.
      }
    }
  }

});