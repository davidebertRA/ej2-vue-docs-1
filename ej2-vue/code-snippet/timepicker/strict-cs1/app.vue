

<template>
  <div id="app">
        <div class='wrap'>
           <ejs-timepicker id='timepicker' placeholder='Select a time' cssClass='e-custom-style'></ejs-timepicker>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TimePickerPlugin);
export default {}
</script>
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
 .wrap {
    margin: 35px auto;
    width: 240px;
}
/*customize the input element text color*/
.e-time-wrapper.e-custom-style #element { /* csslint allow: adjoining-classes */
    display: block;
    color: blue;
}

/*customize the floating label and popup button text color*/
.e-time-wrapper.e-custom-style .e-float-text.e-label-bottom, /* csslint allow: adjoining-classes */
.e-time-wrapper.e-custom-style .e-input-group-icon.e-time-icon.e-icons { /* csslint allow: adjoining-classes */
    color: blue;
}

/*customize the input element text selection*/
.e-time-wrapper.e-custom-style.e-input-group::before, /* csslint allow: adjoining-classes */
.e-time-wrapper.e-custom-style.e-input-group::after, /* csslint allow: adjoining-classes */
.e-time-wrapper.e-custom-style.e-input-group .e-timepicker::selection { /* csslint allow: adjoining-classes */
    background: blue;
}


.e-timepicker.e-popup.e-custom-style .e-list-parent.e-ul, /* csslint allow: adjoining-classes */
.e-timepicker.e-popup.e-custom-style .e-list-parent.e-ul .e-list-item { /* csslint allow: adjoining-classes */
    background-color: #c0ebff;
}

/*customize the list item hover color*/
.e-timepicker.e-popup.e-custom-style .e-list-parent.e-ul .e-list-item.e-hover, /* csslint allow: adjoining-classes */
.e-timepicker.e-popup.e-custom-style .e-list-parent.e-ul .e-list-item.e-active.e-hover { /* csslint allow: adjoining-classes */
    background-color: blue;
    color: #fff;
}

/*customize the active element text color*/
.e-timepicker.e-popup.e-custom-style .e-list-parent.e-ul .e-list-item.e-active { /* csslint allow: adjoining-classes */
    color:#333;
    background-color: #fff;
}
</style>


