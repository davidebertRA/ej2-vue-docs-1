

<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes'
        :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :width='palettewidth' :symbolPreview='symbolPreview' :height='paletteheight'   :symbolHeight='symbolHeight'
                               :symbolWidth='symbolWidth'></ejs-symbolpalette>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {  DiagramPlugin,
        Diagram,
        NodeModel,
        UndoRedo,
        ConnectorModel,
        Node,
        Connector,
        SymbolPalette,SymbolPalettePlugin,
        SymbolInfo,
        ShapeModel} from '@syncfusion/ej2-vue-diagrams';
    import { ExpandMode } from "@syncfusion/ej2-vue-navigations";
    Vue.use(DiagramPlugin);
    Vue.use(SymbolPalettePlugin);
    let basicShapes: NodeModel[] = [{
        id: 'Rectangle',
        shape: {
            type: 'Basic',
            shape: 'Rectangle'
        }
    },
    {
        id: 'Ellipse',
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Hexagon',
        shape: {
            type: 'Basic',
            shape: 'Hexagon'
        }
    }
];
    let palette: any;
    let size: any;
    let expand: any;
    export default {
        name: 'app'
        data() {
            return {
                //Defines how many palettes can be at expanded mode at a time
                expandMode: "Multiple",
                //Defines the palette collection
                palettes: [{
                    id: 'basic',
                    expanded: true,
                    symbols: basicShapes,
                    title: 'Basic Shapes',
                    iconCss: 'e-ddb-icons e-basic'
                }, ],
                symbolMargin: {
                    left: 15,
                    right: 15,
                    top: 15,
                    bottom: 15
                },
                getSymbolInfo: (symbol: NodeModel): SymbolInfo => {
                    return {
                        fit: true
                    };
                },
                symbolPreview: {
                    height: 100,
                    width: 100,
                    offset: {
                        x: 0.5,
                        y: 0.5
                    }
                },
                palettewidth: "100%",
                paletteheight: "700px",
                symbolHeight: 60,
                symbolWidth: 60,
            };
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


