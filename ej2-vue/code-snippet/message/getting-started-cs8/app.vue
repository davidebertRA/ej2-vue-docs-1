

<template>
  <div class="msg-default-section">
    <div class="content-section">
      <ejs-message id="msg_default" content="Editing is restricted"></ejs-message>
      <ejs-message id="msg_info" content="Please read the comments carefully" severity="Info"></ejs-message>
      <ejs-message id="msg_success" content="Your message has been sent successfully" severity="Success"></ejs-message>
      <ejs-message id="msg_warning" content="There was a problem with your network connection" severity="Warning"></ejs-message>
      <ejs-message id="msg_error" content="A problem occurred while submitting your data" severity="Error"></ejs-message>
    </div>
  </div>
</template>
<script setup>
import { MessageComponent as EjsMessage } from "@syncfusion/ej2-vue-notifications";
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";

  .msg-default-section .content-section {
    margin: 0 auto;
    max-width: 450px;
    padding-top: 10px;
  }

  .msg-default-section .e-message {
    margin: 10px 0;
  }
</style>


