

<template>
    <div>
        <ejs-skeleton shape= 'Circle' width= "60px" cssClass= "e-customize"></ejs-skeleton>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

    Vue.use(SkeletonPlugin);

    export default { }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";

    .e-customize.e-skeleton.e-shimmer-wave::after{
    background-image: linear-gradient(90deg, transparent calc(50% - 100px),
    rgb(30 128 234 / 50%) 50%,
    transparent calc(50% + 100px));
    }

    .e-customize.e-skeleton.e-skeleton-circle{
        background-color: #a8c1f2;
    }
</style>


