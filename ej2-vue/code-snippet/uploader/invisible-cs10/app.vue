

<template>
  <div id="uploaderContainer">
    <!-- Initialize Uploader -->
<div id="dropArea">
    <span id="drop"> Drop image (JPG, PNG) files here or <button class='e-btn e-control' id="browse">Browse</button></span>
</div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles"  :asyncSettings= "path"></ejs-uploader>
  </div>
</template>
<script>
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);

export default {
  data: function(){
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
          }
        }
    },
    mounted:function {
    document.getElementById('browse').onclick = () => {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    };
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 #container {
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
    #dropArea {
        border: 1px dashed #c3c3cc;
        text-align: center;
        padding: 20px 0 10px;
    }
    .e-file-select-wrap {
        display: none;
    }
    .e-upload.e-lib.e-keyboard {
      border-bottom: 0px;
      border-top: 0px
    }
</style>


