

<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To render Floating Action Button -->
        <ejs-fab id='fab' content='Add' target='#targetElement'></ejs-fab>
    </div>
</template>

<script>
    import { FabComponent } from "@syncfusion/ej2-vue-buttons";
    import { enableRipple } from '@syncfusion/ej2-base';

    enableRipple(true);

    export default {
      components: {
        'ejs-fab': FabComponent
      }
    }
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>


