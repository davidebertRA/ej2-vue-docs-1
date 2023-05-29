
import Vue from "vue";
import { GridPlugin,Toolbar,PdfExport,ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowExcelExport='true' :excelExportComplete='excelExpComplete' :pdfExportComplete='pdfExportComplete' :allowPdfExport='true' :toolbarClick='toolbarClick' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

      data: () => {
        return {
          data: data,
          toolbarOptions: ['Add', 'PdfExport', 'ExcelExport'],


        };
      },
      methods: {
        toolbarClick: function (args) {

          if (args['item'].id.indexOf("pdfexport") != -1) {
            this.$refs.grid.pdfExport(null, null, null, true);
          }
          if (args['item'].id.indexOf("excelexport") != -1) {
            this.$refs.grid.excelExport(null, null, null, true);
          }

        },
        excelExpComplete: function (args) {
          //This event will be triggered when excel exporting.
          args.promise.then((e) => {
            //In this `then` function, we can get blob data through the arguments after promise resolved.
            this.exportBlob(e.blobData);
          });
        },
        pdfExportComplete: function (args) {
          //This event will be triggered when pdf exporting.
          args.promise.then((e) => {
            //In this `then` function, we can get blob data through the arguments after promise resolved.
            this.exportBlob(e.blobData);
          });
        },
        exportBlob: function (blob) {
          let a = document.createElement('a');
          document.body.appendChild(a);
          a.style.display = 'none';
          let url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = 'Export';
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      },
      provide: {
        grid: [Toolbar, ExcelExport, PdfExport]
      },
    
});