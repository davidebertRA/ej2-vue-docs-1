

<template>
  <div class="control-container">
    <ejs-appbar>
      <a href="https://www.syncfusion.com/vue-components" target="_blank" rel="noopener" role="link" aria-label="Syncfusion vue controls">
        <div class="syncfusion-logo"></div>
      </a>
      <div class="e-appbar-spacer"></div>
      <ejs-button :isPrimary="true">FREE TRIAL</ejs-button>
    </ejs-appbar>
  </div>
</template>

<script>
  import Vue from "vue";
  import { AppBarPlugin  } from "@syncfusion/ej2-vue-navigations";
  import { ButtonPlugin  } from "@syncfusion/ej2-vue-buttons";

  Vue.use(AppBarPlugin);
  Vue.use(ButtonPlugin);

  export default {
    data: function () {
      return {};
    }
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

  .control-container .syncfusion-logo {
    background: url(https://cdn.syncfusion.com/blazor/images/demos/syncfusion-logo.svg);
    background-size: contain;
    background-repeat: no-repeat;
    height: 30px;
    width: 150px;
  }
</style>


