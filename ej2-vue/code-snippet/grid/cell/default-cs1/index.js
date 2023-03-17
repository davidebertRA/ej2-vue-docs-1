
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource="data" :enableHover='false' :allowSelection='false' height='315' :queryCellInfo='customiseCell'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120 > </e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data
    };
  },
  methods: {
    customiseCell: function(args) {
        if (args.column.field === 'Freight') {
            if (args.data['Freight'] < 30) {
                args.cell.classList.add('below-30');
            } else if (args.data['Freight'] < 80) {
                args.cell.classList.add('below-80');
            } else {
                args.cell.classList.add('above-80');
            }
        }
    }
  }

});