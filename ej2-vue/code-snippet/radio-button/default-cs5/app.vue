

<template>
<ul>
<li> <ejs-radiobutton label="Primary" name="custom" cssClass="e-primary"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Success" name="custom" cssClass="e-success"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Info" name="custom" cssClass="e-info" checked="true"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Warning" name="custom" cssClass="e-warning"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Danger" name="custom" cssClass="e-danger"></ejs-radiobutton></li>
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

.e-success .e-radio:checked + label::after { /* csslint allow: adjoining-classes */
  background-color: #689f38;
  border-color: #689f38;
}

.e-success .e-radio:checked:focus + label::after, .e-success .e-radio:checked + label:hover::after { /* csslint allow: adjoining-classes */
  background-color: #449d44;
  border-color: #449d44;
}

.e-success .e-radio:checked + label::before {
  border-color: #689f38;
}

.e-success .e-radio:checked:focus + label::before, .e-success .e-radio:checked + label:hover::before { /* csslint allow: adjoining-classes */
  border-color: #449d44;
}
.e-success .e-radio +label:hover::before {
  border-color: #b1afaf
}
.e-info .e-radio:checked + label::after { /* csslint allow: adjoining-classes */
  background-color: #2196f3;
  border-color: #2196f3;
}

.e-info .e-radio:checked:focus + label::after, .e-info .e-radio:checked + label:hover::after { /* csslint allow: adjoining-classes */
  background-color: #0b7dda;
  border-color: #0b7dda;
}

.e-info .e-radio:checked + label::before {
  border-color: #2196f3;
}

.e-info .e-radio:checked:focus + label::before, .e-info .e-radio:checked + label:hover::before {
  border-color: #0b7dda;
}

.e-info .e-radio + label:hover::before {
  border-color: #b1afaf
}

.e-warning .e-radio:checked + label::after { /* csslint allow: adjoining-classes */
  background-color: #ef6c00;
  border-color: #ef6c00;
}

.e-warning .e-radio:checked:focus + label::after, .e-warning .e-radio:checked + label:hover::after { /* csslint allow: adjoining-classes */
  background-color: #cc5c00;
}

.e-radio:checked + .e-warning::before {
  border-color: #ef6c00;
}

.e-warning .e-radio:checked:focus + label::before, .e-warning .e-radio:checked + label:hover::before {
  border-color: #cc5c00;
}

.e-warning .e-radio + label:hover::before {
  border-color: #b1afaf
}

.e-danger .e-radio:checked + label::after { /* csslint allow: adjoining-classes */
  background-color: #d84315;
  border-color: #d84315;
}
.e-danger .e-radio:checked:focus + label::after, .e-danger .e-radio:checked + label:hover::after { /* csslint allow: adjoining-classes */
  background-color: #ba330a;
  border-color: #ba330a;
}

.e-danger .e-radio:checked + label::before {
  border-color: #d84315;
}

.e-danger .e-radio:checked:focus + label::before, .e-danger .e-radio:checked + label:hover::before {
  border-color: #ba330a;
}

.e-danger .e-radio + label:hover::before {
  border-color: #b1afaf
}
</style>


