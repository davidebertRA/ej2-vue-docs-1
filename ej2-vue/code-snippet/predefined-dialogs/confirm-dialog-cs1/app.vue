

<template>
  <div class="predefinedDialogs">
    <ejs-button id="confirmDlgBtn"  v-on:click.native="confirmBtnClick" cssClass = "e-success">Confirm</ejs-button>
    <span id="statusText"></span>
  </div>
</template>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#statusText {
  font-size: 16px;
  margin-top: 20px;
}
.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
</style>

<script>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

let dialogObj = undefined;
export default {
  components: {
    'ejs-button': ButtonComponent
  },
  data: function () {
    return {};
  },
  methods: {
    confirmBtnClick: function () {
        document.getElementById("statusText").style.display="none";
        dialogObj = DialogUtility.confirm({
            title: " Delete multiple items",
            content: "Are you sure you want to permanently delete these items?",
            okButton: { click:this.confirmOkAction},
            cancelButton: { click:this.confirmCancelAction},
        });
      },
      confirmOkAction:function () {
          dialogObj.hide();
          document.getElementById("statusText").innerHTML="The user confirmed the dialog box";
          document.getElementById("statusText").style.display="block";
      },
      confirmCancelAction:function(){
          dialogObj.hide();
          document.getElementById("statusText").innerHTML="The user canceled the dialog box.";
          document.getElementById("statusText").style.display="block";
      }
  },
}
</script>


