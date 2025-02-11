
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <p><b>First Grid:</b></p>
        <ejs-grid ref='grid1' id='FirstGrid' :dataSource='fData' :toolbar='toolbarOptions'           :allowPdfExport='true' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
        <p><b>Second Grid:</b></p>
        <ejs-grid ref='grid2' id='SecondGrid' :dataSource='sData' :allowPdfExport='true'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                <e-column field='LastName' headerText='Last Name' width=150></e-column>
                <e-column field='City' headerText='City' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      fData: data.slice(0, 5),
      sData: employeeData.slice(0 ,5),
      toolbarOptions: ['PdfExport']
    };
  },
  methods: {
      toolbarClick(args) {
        if (args.item.id === 'FirstGrid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            let firstGridPdfExport = this.$refs.grid1.pdfExport({}, true);
            firstGridPdfExport.then((pdfData) => {
                this.$refs.grid2.pdfExport({}, false, pdfData);
            });
        }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});