
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
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Draw</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="undoClick">Undo</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="redoClick">Redo</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
     created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('flower.png');
        } else {
            this.$refs.imageEditorObj.open('bridge.png');
        }
    },
    btnClick: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x,dimension.y,'Enter\nText');
    },
    undoClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.undo();
    },
    redoClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.redo();
    }
  }

});