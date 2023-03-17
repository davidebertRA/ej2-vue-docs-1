
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data, adventProFont } from './datasource.js';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPaging='true' :allowPdfExport='true' :toolbarClick='toolbarClick'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['PdfExport']
    };
  },
  methods: {
      toolbarClick(args) {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            let pdfExportProperties = {
                theme: {
                    header: {font:  new PdfTrueTypeFont(adventProFont, 12) },
                    caption: { font: new PdfTrueTypeFont(adventProFont, 10) },
                    record: { font: new PdfTrueTypeFont(adventProFont, 9) }
                }
            };
            this.$refs.grid.pdfExport(pdfExportProperties);
        }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});