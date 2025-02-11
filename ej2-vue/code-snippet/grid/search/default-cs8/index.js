
import Vue from "vue";
import { GridPlugin, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='grid' :dataSource='data' :toolbar='toolbarOptions' height='262px' :created='created'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['Search'],
    };
  },
  methods: {
    created: function() {
        document.getElementById(this.$refs.grid.$el.id + "_searchbar").addEventListener('keyup', () => {
          this.$refs.grid.search((event.target as HTMLInputElement).value)
        });
    }
  },
  provide: {
    grid: [Search,Toolbar]
  }

});