

<template>
    <div>
        <div id='dropdowntarget'>
            <div id= "first">
                <div id='black'></div>
                <div id='red'></div>
                <div id='green'></div>
                <div id='gray'></div>
                <div id='blue'></div>
                <div id='violet'></div>
                <div id='brown'></div>
                <div id='darkgoldenrod'></div>
                <div id='aquamarine'></div>
            </div>
        </div>
        <ejs-splitbutton  target='#dropdowntarget' iconCss='e-sb-icons e-color'></ejs-splitbutton>
    </div>
</template>

<script>
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);

export default {
    data () {
        return {
            items:[
            {
                text: 'Cut',
                iconCss: 'e-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss: 'e-icons e-copy'
            },
            {
                text: 'Paste',
                iconCss: 'e-icons e-paste'
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
    .e-split-btn-wrapper{
        margin: 20px 20px 5px 5px;
    }

    @font-face {
        font-family: 'paint';
        src:
        url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj0gSRIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmIZD+uwAAAcgAAADMaGVhZBKhhHQAAADQAAAANmhoZWEHjANrAAAArAAAACRobXR4B+j/8wAAAYAAAAAIbG9jYQBmAAAAAAHAAAAABm1heHABDgBKAAABCAAAACBuYW1ln6hzswAAApQAAAINcG9zdEkLMmUAAASkAAAANgABAAADUv9qAFoEAP/z//4D6gABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAAAZfc6F8PPPUACwPoAAAAANfSn9kAAAAA19Kf2f/z//wD6gPhAAAACAACAAAAAAAAAAEAAAACAD4AAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQP0AZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAANS/2oAWgPhAJYAAAABAAAAAAAABAAAAAPo//MAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAZgAAAAL/8//8A+oD4QAKAD0AAAEWBgceATc1JiQHJTMmNjceARcVJx4BBx4BFQ4BIiYnNDY3PgEvAS4BIw4BBwEGHgI3AT4BLwE1LgEnDgEDeiRlCgulCxP+8RT+GyYDQFxOZQwTBQEDDxEBJzonAREOCQkPJQ4cDBcdAf6oG1a3nx8BWQ4RHKADeG1oWwHTLHVwYVmL6Kx1BHEqfwYFqWUHEx4tDAocEx0nJx0RHgoVUDQpDgsBFAH+px2guFUaAVkNOiCgCXnhCAWOAAAAAAAAEgDeAAEAAAAAAAAAAQAAAAEAAAAAAAEABQABAAEAAAAAAAIABwAGAAEAAAAAAAMABQANAAEAAAAAAAQABQASAAEAAAAAAAUACwAXAAEAAAAAAAYABQAiAAEAAAAAAAoALAAnAAEAAAAAAAsAEgBTAAMAAQQJAAAAAgBlAAMAAQQJAAEACgBnAAMAAQQJAAIADgBxAAMAAQQJAAMACgB/AAMAAQQJAAQACgCJAAMAAQQJAAUAFgCTAAMAAQQJAAYACgCpAAMAAQQJAAoAWACzAAMAAQQJAAsAJAELIHBhaW50UmVndWxhcnBhaW50cGFpbnRWZXJzaW9uIDEuMHBhaW50Rm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABwAGEAaQBuAHQAUgBlAGcAdQBsAGEAcgBwAGEAaQBuAHQAcABhAGkAbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABwAGEAaQBuAHQARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgECAQMADHBhaW50LWJ1Y2tldAAAAAA=) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .e-sb-icons {
        font-family: 'paint' !important;
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

    .e-color::before {
    content: '\e700';
    color:black;
    }

    #dropdowntarget {
        border: 0.5px solid grey;
        height: 110px;
        width: 110px;
    }
    #black {
        width: 30px;
        height: 30px;
        background-color: black;
        margin: 5px 5px;
        float:left;
    }
    #red{
        width: 30px;
        height: 30px;
        background-color: red;
        margin: 5px 0px;
        float:left;
    }
    #green{
        width: 30px;
        height: 30px;
        background-color: green;
        margin: 5px 5px;
        float:left;
    }
    #gray{
        width: 30px;
        height: 30px;
        background-color: gray;
        margin: 0px 5px;
        float:left;
    }
    #blue{
        width: 30px;
        height: 30px;
        background-color: blue;
        float:left;
    }
    #violet{
        width: 30px;
        height: 30px;
        background-color: violet;
        margin: 0px 5px;
        float:left;
    }
    #brown{
        width: 30px;
        height: 30px;
        background-color: brown;
        margin: 5px 5px;
        float:left;
    }

    #darkgoldenrod{
        width: 30px;
        height: 30px;
        background-color: darkgoldenrod;
        margin: 5px 0px;
        float:left;
    }
    #aquamarine{
        width: 30px;
        height: 30px;
        background-color: aquamarine;
        margin: 5px 5px;
        float:left;
    }
    #icon{
        width: 10px;
        height: 10px;
        background-color: aquamarine;
        position: absolute;
    }

</style>


