

<template>
        <div class="multiline">
            <label class="label">Float label type auto</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Auto" maxlength="15"></ejs-textbox>
            <label class="label">Float label type always</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Always"></ejs-textbox>
            <label class="label">Float label type never</label>
            <ejs-textbox id='default' :multiline="true" placeholder="Enter your address" floatLabelType="Never"></ejs-textbox>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(TextBoxPlugin);
Vue.use(ButtonPlugin);

export default {
 data: function(){
        return {
             clickHandler: function(event) {
                  this.$refs.textareaObj.addAttributes({maxlength: 15});
             }
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
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
    .multiline{
    margin: 10px auto;
    width: 30%;
  }

</style>


