


<template>
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' ref='splitterObj'  width='600px' height='200px'>
        <e-panes>
            <e-pane :content='content1' size ='200px' min='20%' max='40%'></e-pane>
            <e-pane :content='content2' size ='200px' min='20%' max='60%'></e-pane>
            <e-pane :content='content3' size = '200px'></e-pane>
        </e-panes>
    </ejs-splitter>
</div>
</template>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(SplitterPlugin);
var contentVue1 = Vue.component("contentTemp1", {
    template: `<div class="content">
                    <h3 class="h3">PARIS </h3>
                    Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...
                </div>`,
    data() {
        return {
            data: {}
        };
    }
});

var contentVue2 = Vue.component("contentTemp2", {
    template: `<div class="content">
                    <h3 class="h3">CAMEMBERT </h3>
                    The village in the Orne département of Normandy where the famous French cheese is originated from.
                </div>`,
    data() {
        return {
            data: {}
        };
    }
});

var contentVue3 = Vue.component("contentTemp3", {
    template: `<div class="content">
                    <h3 class="h3">GRENOBLE </h3>
                    The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.
                </div>`,
    data() {
        return {
            data: {}
        };
    }
});
export default {
    name: 'app',
    data () {
        return {
        content1: function (){
            return { template: contentVue1 }
        },
        content2: function (){
            return { template: contentVue2 }
        },
        content3: function (){
            return { template: contentVue3 }
        }
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

#app {
    margin: 65px auto;
}
.content {
    padding: 10px;
}

.e-splitter {
    margin: 0 auto;
}

.default-splitter .e-splitter .e-split-bar .e-resize-handler:before {
  content: "\e934";
  font-family: 'e-icons';
  font-size: 11px;
  transform: rotate(90deg);
}

.e-splitter .e-split-bar.e-split-bar-horizontal.e-resizable-split-bar,
.e-splitter .e-split-bar.e-split-bar-horizontal.e-resizable-split-bar::after {
  cursor: e-resize;
}
</style>



