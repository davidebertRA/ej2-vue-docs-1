

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script>
    import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
    let nodes = [
        {
            id: "node1",
            height: 60,
            offsetX: 300,
            offsetY: 80,
            annotations: [
                {
                    content: "start"
                }
            ]
        }
    ]
    export default {
        components: {
            'ejs-diagram': DiagramComponent
        },
        name: 'app'
        data () {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
            }
        }
    }
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>

