

<template>
    <div id='element'>
        <span class="e-avatar e-avatar-xlarge"></span>
        <span class="e-avatar e-avatar-large"></span>
        <span class="e-avatar"></span>
        <span class="e-avatar e-avatar-small"></span>
        <span class="e-avatar e-avatar-xsmall"></span>
    </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {};
  }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
    #element {
        display: block;
        width: 300px;
        margin: 100px auto;
        border-radius: 3px;
    }

    .e-avatar {
        background-image: url(./pic01.png);
    }

</style>



