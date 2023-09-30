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
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="aspectClick">Aspect Ratio</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="nonAspectClick">Non Aspect Ratio</ejs-button>
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
    aspectClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.resize(300, 400, true);
    },
    nonAspectClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.resize(400, 100, false);
    }
  }

});