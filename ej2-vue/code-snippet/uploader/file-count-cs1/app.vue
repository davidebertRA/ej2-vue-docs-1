

<template>
    <div class="col-lg-8 control-section uploader chunk">
        <div class="control_wrapper">
            <ejs-uploader id='validation' name="UploadFiles" :autoUpload= "autoUpload" :asyncSettings= "path" ref="uploadObj" :selected= "onFileSelect" :removing= "onFileRemove">
            </ejs-uploader>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { FileInfo } from '@syncfusion/ej2-vue-inputs/uploader';
Vue.use(UploaderPlugin);
export default {
  data: function(){
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
          },
          autoUpload: false
        }
    },
    methods: {
        onFileSelect: function(args) {
            args.filesData.splice(5);
            let filesData = this.$refs.uploadObj.getFilesData();
            let allFiles = filesData.concat(args.filesData);
            if (allFiles.length > 5) {
                for (let i = 0; i < allFiles.length; i++) {
                    if (allFiles.length > 5) {
                        allFiles.shift();
                    }
                }
                args.filesData = allFiles;
                args.modifiedFilesData = args.filesData;
            }
            args.isModified = true;
        },

        onFileRemove: function (args) {
            args.postRawFile = false;
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
    #container {
        visibility: hidden;
        padding-left: 5%;
        width: 100%;
    }
    #loader {
        color: #008cff;
        font-family: 'Helvetica Neue','calibiri';
        font-size: 14px;
        height: 40px;
        left: 45%;
        position: absolute;
        top: 45%;
        width: 30%;
    }
</style>


