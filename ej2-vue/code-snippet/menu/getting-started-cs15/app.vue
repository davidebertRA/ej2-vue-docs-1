

<template>
    <div>
        <ejs-menu :items='menuItems' showItemOnClick = "true"></ejs-menu>
    </div>
</template>

<script>
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(MenuPlugin);

export default {
  data: function() {
    return {
        // Menu items definition
        menuItems: [
        {
            text: 'File',
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }]
        },
        {
            text: 'Edit',
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }]
        },
        {
             text: 'View',
             items: [
                 {
                 text: 'Toolbars',
                 items: [
                     { text: 'Menu Bar' },
                     { text: 'Bookmarks Toolbar' },
                     { text: 'Customize' },
                   ]
                 },
                {
                 text: 'Zoom',
                 items: [
                     { text: 'Zoom In' },
                     { text: 'Zoom Out' },
                     { text: 'Reset' },
                    ]
                },
                { text: 'Full Screen' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }]
        },
        { text: 'Go' },
        { text: 'Help' }
    ]
    };
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/bootstrap.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/bootstrap.css";

body {
    margin-top: 100px;
    text-align: center;
}
/* Styles to achieve rounder corner in menu */
.e-menu-wrapper.e-rounded-menu:not(.e-menu-popup),
.e-menu-wrapper.e-rounded-menu .e-menu {
  border-radius: 20px;
}
/* Increased the menu component left and right padding for better rounded corner UI */
.e-menu-wrapper.e-rounded-menu ul.e-menu {
  padding: 0 14px;
}
</style>


