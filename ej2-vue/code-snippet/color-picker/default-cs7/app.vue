

<template>
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker cssClass="e-custom-picker" value="#344aae" :modeSwitcher="false" :open="onOpen"></ejs-colorpicker>
</div>
</template>

<script>
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ColorPickerPlugin);

export default {
  methods: {
        onOpen: function(args) {
          args.element.querySelector('.e-handler').classList.add('e-icons');
        }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
    margin: 0 auto;
    width: 300px;
    text-align: center;
}

/* To hide the handle balloon preview */
.e-color-picker-tooltip.e-popup.e-popup-open {
    display: none;
}

/* Handle customization styles */
.e-custom-picker .e-container .e-hsv-container .e-handler {
    background: transparent url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LDYgMTAsNiAxMCwwIDYsMCA2LDYgMCw2IDAsMTAgNiwxMCA2LDE2IDEwLDE2IDEwLDEwIDE2LDEwIAkiLz4KPC9nPgo8cGF0aCBkPSJNMTAsNlYwSDZ2NkgwdjRoNnY2aDR2LTZoNlY2SDEweiBNMTUsOUg5djZIN1Y5SDFWN2g2VjFoMnY2aDZWOXoiLz4KPC9zdmc+Cg==');
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    margin-left: -8px;
    margin-top: -8px;
    border: none;
    box-shadow: none;
    width: 16px;
}
</style>


