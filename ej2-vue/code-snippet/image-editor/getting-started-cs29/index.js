
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :shapeChanging="shapeChanging"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Draw</ejs-button>
</div>
`,

  data: function() {
      return {};
  },
  methods: {
     created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    },
    shapeChanging: function(args) {
      args.currentShapeSettings.fontColor =  'red',
      args.currentShapeSettings.fontStyle =  'georgia'
    }
  }
});