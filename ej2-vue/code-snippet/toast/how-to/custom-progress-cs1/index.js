
import Vue from "vue";
import { ToastPlugin, Toast } from "@syncfusion/ej2-vue-notifications";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ToastPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-toast ref='elementRef' id='element' title='Matt sent you a friend request' content='You have a new friend request yet to accept' :position='position' :beforeOpen='beforeOpen' showProgressBar=true></ejs-toast>
        <div class="row">
            <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
        </div>
        <div class="row" style="padding-top: 20px">
          <div class="e-float-input">
            <input class="e-input" id="progressHeight" name="Digits" value="4" required>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="Digits">Progress Bar Height</label>
            </div>
        </div>
        <div class="row" style="padding-top: 20px">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                <label> Progress Bar Color </label>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                <ejs-dropdownlist ref='ProgressRef' id='Progress' :dataSource='data' :fields='dataFields'
                        placeholder='Select a animate type' index=0 popupHeight='150px' :change='valueChange'></ejs-dropdownlist>
            </div>
        </div>
   </div>
`,

  name: 'app',
  data: function(){
        return {
            position: { X: 'Right', Y: 'Bottom' },
            dataFields: { text: 'Text', value: 'Id' },
            data : [
                { Id: 'red', Text: 'Red' },
                { Id: 'cyan', Text: 'Cyan' },
                { Id: 'blue', Text: 'Blue' },
                { Id: 'yellow', Text: 'Yellow' },
                { Id: 'pink', Text: 'Pink' }
            ],
        }
   },
  mounted: function() {
      this.$refs.elementRef.show();
  },
  methods: {
       showBtnClick: function(args){
           this.$refs.elementRef.show();
       },
       beforeOpen: function(e){
          var progress = e.element.querySelector('.e-toast-progress');
          progress.style.height = document.getElementById('progressHeight').value + 'px';
          progress.style.backgroundColor = this.$refs.ProgressRef.ej2Instances.value;
       },
        valueChange: function(){
            var progressEles =  this.$refs.elementRef.ej2Instances.element.querySelectorAll('.e-toast-progress');
            progressEles.forEach((ele)=> {
              ele.style.backgroundColor = this.$refs.ProgressRef.ej2Instances.value;
            });
       },
    }

});