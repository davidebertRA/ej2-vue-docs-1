

<template>
<ul>
<li> <ejs-radiobutton label="Left Side Label" name="position" labelPosition="Before"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Right Side Label" name="position" checked="true"></ejs-radiobutton></li>
</ul>
</template>

<script>
import Vue from 'vue';
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);

export default {}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-radio-wrapper {
  margin-top: 18px;
}

li {
  list-style: none;
}
</style>


