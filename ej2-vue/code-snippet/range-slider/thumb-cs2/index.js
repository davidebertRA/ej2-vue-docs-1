
import Vue from 'vue';
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

new Vue({
	el: '#app',
	template: `
   <div id='app'>
     <div class="col-lg-12 control-section">
            <div class="content-wrapper" style="margin-bottom: 25px;overflow-x: hidden">
                <div class="form-title">
                    <span>Min</span>
                </div>
                <form id="formMinId" class="form-horizontal">
                    <div class="form-group">
                        <div class="e-float-input">
                            <ejs-slider id="min-slider" name="min-slider" type='MinRange'  value= 30 :ticks='ticks' v-on:changed='onMinChanged'></ejs-slider>
                        </div>
                    </div>
                </form>
                <div class="form-title">
                    <span>Max</span>
                </div>
                <form id="formMaxId" class="form-horizontal">
                    <div class="form-group">
                        <div class="e-float-input">
                            <ejs-slider id="max-slider" name="max-slider" type='MinRange'  value= 30 :ticks='ticks' v-on:changed='onMaxChanged'></ejs-slider>
                        </div>
                    </div>
                </form>
                <div class="form-title">
                    <span>Value</span>
                </div>
                <form id="formValId" class="form-horizontal">
                    <div class="form-group">
                        <div class="e-float-input">
                            <ejs-slider id="val-slider" name="val-slider" type='MinRange'  value= 30 :ticks='ticks' v-on:changed='onValChanged'></ejs-slider>
                        </div>
                    </div>
                </form>
                <div class="form-title">
                    <span>Range</span>
                </div>
                <form id="formRangeId" class="form-horizontal">
                    <div class="form-group">
                        <div class="e-float-input">
                            <ejs-slider id="range-slider" name="range-slider" type='MinRange'  value= 30 :ticks='ticks' v-on:changed='onRangeChanged'></ejs-slider>
                        </div>
                    </div>
                </form>
            </div>
        </div>
   </div>
`,

  data: function() {
   return {
            ticks:{ placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true }
    };
  },
  methods:{
        onMinChanged(args) {
            // sets required property in the FormValidator rules collection
            let minOptions = {
            rules: {
                'min-slider': {
                validateHidden: true,
                min: [40, "You must select value greater than or equal to 40"]
                }
            }
            };
            // Initialize Form validation
            let formMinObj;
            formMinObj = new FormValidator("#formMinId", minOptions);
            // validate the slider value in the form
            formMinObj.validate();
        },
        onMaxChanged(args) {
            // sets required property in the FormValidator rules collection
            let maxOptions = {
            rules: {
                'max-slider': {
                validateHidden: true,
                max: [40, "You must select value less than or equal to 40"]
                }
            }
            };
                // Initialize Form validation
            let formMaxObj;
            formMaxObj = new FormValidator("#formMaxId", maxOptions);
            // validate the slider value in the form
            formMaxObj.validate();
        },
        onValChanged(args) {
            // sets required property in the FormValidator rules collection
            let valOptions = {
            rules: {
                'val-slider': {
                validateHidden: true,
                regex: [/40/, "You must select value equal to 40"]
                }
            }
            };
                // Initialize Form validation
            let formValObj;
            formValObj = new FormValidator("#formValId", valOptions);
            // validate the slider value in the form
            formValObj.validate();
        },
        onRangeChanged(args) {
            // sets required property in the FormValidator rules collection
            let rangeOptions = {
            rules: {
                'range-slider': {
                validateHidden: true,
                range: [40, 80, "You must select values between 40 and 80"]
                }
            }
            };
                // Initialize Form validation
            let formRangeObj;
            formRangeObj = new FormValidator("#formRangeId", rangeOptions);
            // validate the slider value in the form
            formRangeObj.validate();
        }
    }

});