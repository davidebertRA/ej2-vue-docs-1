
import Vue from "vue";
import { ToastPlugin, Toast } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Right Position Toast</ejs-button>
       <ejs-button ref='showButton1Ref' class="e-btn" id="show_toast1" v-on:click.native="showBtn1Click">Show Left Position Toast</ejs-button>
       <ejs-toast ref='elementRef' id='element' :position='position' title='Warning !' content='There was a problem with your network connection.' :click='onClick'></ejs-toast>
       <ejs-toast ref='element1Ref' id='element1' :position='position1' title='Success !' content='Your message has been sent successfully.' :click='onClick'></ejs-toast>
   </div>
`,

  name: 'app',
  data: function(){
        return {
            position: { X: 'Right', Y: 'Bottom' },
            position1: { X: 'Left', Y: 'Bottom' },
        }
   },
    mounted: function() {
       this.$refs.elementRef.show();
       this.$refs.element1Ref.show();
     },
  methods: {
       showBtnClick: function(args){
           this.$refs.elementRef.show();
       },
       showBtn1Click: function(args){
           this.$refs.element1Ref.show();
       },
       onClick: function(e){
            e.clickToClose = true;
       }
    }

});