

<template>
  <div class="predefinedDialogs">
    <ejs-button id="confirmDlgBtn" v-on:click.native="confirmBtnClick" cssClass="e-success">Confirm </ejs-button>
  </div>
</template>

<style>
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
</style>

<script>
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);
export default ( {
  data: function () {
    return {};
  },
  methods: {
    confirmBtnClick: function () {
      DialogUtility.confirm({
        title: "Join chat group",
        content: '<p>Enter your name: </p><input class="e-input"/>',
        width: "350px",
      });
    },
  },
});
</script>


