

<template>
<ejs-dropdownbutton :items='items' iconCss= 'ddb-icons e-message'>Message</ejs-dropdownbutton>
</template>

<script>
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);

export default {
    data () {
        return {
            items:[
            {
                text: 'Edit',
                iconCss: 'ddb-icons e-edit'
            },
            {
                text: 'Delete',
                iconCss: 'ddb-icons e-delete'
            },
            {
                text: 'Mark As Read',
                iconCss: 'ddb-icons e-read'
            },
            {
                text: 'Like Message',
                iconCss: 'ddb-icons e-like'
            }]
        };
    }
}
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';

    @font-face {
        font-family: 'ddb-icons';
        src:
        url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    .ddb-icons {
        font-family: 'ddb-icons' !important;
        speak: none;
        font-size: 55px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .e-message::before {
    content: '\e702';
    }

    .e-edit::before {
    content: '\e700';
    }

    .e-delete::before {
    content: '\e701';
    }

    .e-read::before {
    content: '\e703';
    }

    .e-like::before {
    content: '\e704';
    }

</style>


