

<template>
<ul>
<li><ejs-radiobutton label='Option 1' name='default' checked=true></ejs-radiobutton></li>
<li><ejs-radiobutton label='Option 2' name='default'></ejs-radiobutton></li>
</ul>
</template>

<script>
import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  components: {
    'ejs-radiobutton': RadioButtonComponent
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

.e-radio-wrapper {
  margin-top: 18px;
}

li {
  list-style: none;
}
</style>


