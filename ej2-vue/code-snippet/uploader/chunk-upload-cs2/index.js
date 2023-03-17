
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="col-lg-8 control-section uploader chunk">
        <div class="control_wrapper">
            <ejs-uploader id='chunkupload' name="UploadFiles" :asyncSettings= "path" ref="uploadObj">
            </ejs-uploader>
        </div>
    </div>
`,

 data: function(){
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
            chunkSize: 500000,
             // set count for automatic retry when chunk upload failed
            retryCount: 5,
            // set time delay for automatic retry when chunk upload failed
            retryAfterDelay: 3000
          }
        }
    }

});