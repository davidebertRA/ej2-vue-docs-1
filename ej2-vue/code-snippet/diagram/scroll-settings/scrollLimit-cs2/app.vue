

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 100, height: 100,
        offsetX: 350, offsetY: 350,
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
    }]
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                // set the autoScrollBorder
                scrollSettings: {
                    canAutoScroll: true,
                    scrollLimit: 'Infinity',
                    //Sets the scroll limit
                    padding: { right: 50, bottom: 50 }
                },
            }
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


