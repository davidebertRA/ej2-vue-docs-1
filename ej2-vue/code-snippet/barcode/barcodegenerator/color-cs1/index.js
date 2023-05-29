
import Vue from 'vue';
import { BarcodeGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(BarcodeGeneratorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app" class="barcodeStyle">
         <ejs-barcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :type="type"
              :foreColor="foreColor"
              :value="value"
              :mode="mode"
            ></ejs-barcodegenerator>
     </div>
`,

    name: 'app'
    data () {
        return {
              width: "200px",
              height: "150px",
              mode: "SVG",
              type: "Code128",
              value: "SYNCFUSION",
              foreColor:"red"
        }
    }

});