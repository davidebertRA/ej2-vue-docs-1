

<template>
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='elementToastTime' id='elementToastTime' :position='position' title='Anjolie Stokes' content='<p><img src="https://ej2.syncfusion.com/vue/demos/src/toast/resource/laura.png"></p>' width=230 height=250 :buttons='button'></ejs-toast>
   </div>
</template>

<script>
import Vue from "vue";
import { ToastPlugin, Toast } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin, RadioButtonPlugin, ChangeEventArgs as CheckBoxChange } from '@syncfusion/ej2-vue-buttons';
import { closest } from '@syncfusion/ej2-base';

Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);
export default {
  name: 'app',
  data: function(){
    return {
        position:  { X: 'Right', Y: 'Bottom' },
        button: [{
            model: { content: "Ignore" },
            click: this.btnClick
        }, {
            model: { content: "reply" }
        }]
    }
  },
  methods: {
      showBtnClick: function(args){
          this.$refs.elementToastTime.show();
      },
      btnClick: function(e){
          let toastEle = closest(e.target, '.e-toast');
          this.$refs.elementToastTime.hide(toastEle);
      }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>

<style lang="scss">
#loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

#elementToastTime {
    text-align: center;
  }

  #elementToastTime img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  #elementToastTime .e-toast-message {
    width: inherit;
  }

</style>



