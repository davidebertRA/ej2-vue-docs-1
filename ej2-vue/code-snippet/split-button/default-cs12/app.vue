

<template>
    <ejs-splitbutton :items='items' iconCss='e-sb-icons e-paste' :beforeItemRender='onBeforeItemRender'></ejs-splitbutton>
</template>

<script>
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple, createElement } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);

export default {
    data () {
        return {
            items:[
            {
                text: 'Cut',
            },
            {
                text: 'Copy',
            },
            {
                text: 'Paste',
            }]
        };
    },
    methods: {
        onBeforeItemRender: function(args){
            var shortCutSpan = createElement('span');
            var text = args.item.text;
            args.element.appendChild(shortCutSpan);
            shortCutSpan.setAttribute('class','shortcut');
            var clsName = (text == 'Copy') ? 'e-icons' : 'e-sb-icons';
            shortCutSpan.classList.add(clsName);
            (text === 'Cut') ? shortCutSpan.classList.add('e-cut') : (text === 'Paste') ? shortCutSpan.classList.add('e-paste') : shortCutSpan.classList.add('e-copy');
        }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  .e-split-btn-wrapper{
   margin: 20px 20px 5px 5px;
  }

@font-face {
    font-family: 'ddb-icons';
    src:
    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

.e-sb-icons {
    font-family: 'ddb-icons' !important;
    speak: none;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.e-paste::before {
  content: '\e701';
}

.e-cut::before {
  content: '\e700';
}

.e-copy::before {
  content: '\e70a';
}

</style>


