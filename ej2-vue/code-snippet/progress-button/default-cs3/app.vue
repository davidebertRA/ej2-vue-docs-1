

<template>
 <ejs-progressbutton content="Spin Left"  :enableProgress="true"></ejs-progressbutton>
</template>

<script>
import { ProgressButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  components: {
    'ejs-progressbutton': ProgressButtonComponent
  }
}

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
</style>


