
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { FormValidator } from '@syncfusion/ej2-inputs';

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='wrap'>
      <form id="form-element" class="form-horizontal">
           <div class="form-group" style="padding-top: 11px;">
                <div class="col-lg-8">
                     <ejs-timepicker id="time" name="time" :change="onTimeChange" class="form-control" placeholder='Select a Time'></ejs-timepicker>
                </div>
            </div>
      </form>
    </div>
  </div>
`,

    data: function() {
        return {
          formObj: '',
          options : {
            customPlacement: function(inputelement, errorElement) {
                var parentElement = inputelement.closest('.form-group');
                parentElement.appendChild(errorElement);

            },
            rules: {
                'time': {
                    required: true
                }
            }
          }
        }
    },
  mounted: function () {
      this.formObj = new FormValidator('#form-element', this.options);
  },
  methods: {
      onTimeChange: function() {
          this.formObj.validate();
      }
  }

});