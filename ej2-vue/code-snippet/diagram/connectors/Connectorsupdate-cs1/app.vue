

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
    // Name of the connector
    id: "connector1",
    // Sets source and target points
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}]
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.connectors[0].style.strokeColor = '#6BA5D7';
        diagramInstance.connectors[0].style.fill = '#6BA5D7';
        diagramInstance.connectors[0].style.strokeWidth = 2;
        diagramInstance.connectors[0].targetDecorator.style.fill = '#6BA5D7';
        diagramInstance.connectors[0].targetDecorator.style.strokeColor = '#6BA5D7';
        diagramInstance.connectors[0].sourcePoint.x = 150;
        diagramInstance.connectors[0].targetPoint.x = 150;
        diagramInstance.dataBind();
    }
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


