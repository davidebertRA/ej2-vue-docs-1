

<template>
    <div id="app">
        <div id='container'>
            <ejs-tab ref="tabObj" id='draggableTab' heightAdjustMode='Auto' dragArea="#container">
                <e-tabitems>
                    <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
                    <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
                    <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
                    <e-tabitem :header='headerText3' :content="content3"></e-tabitem>
                </e-tabitems>
            </ejs-tab>
            <ejs-treeview ref="treeObj" id="draggableTreeview" :fields="fields" :allowDragAndDrop="true" dragArea="#container" cssClass="treeview-external-drop-tab" :nodeDragStop="onNodeDragStop" :nodeDragging="onNodeDrag">
            </ejs-treeview>
        </div>
  </div>
</template>
<style>
    #draggableTab .e-content .e-item {
        font-size: 12px;
        margin: 10px;
        text-align: justify;
    }

    .treeview-external-drop-tab .e-list-item,
    .e-bigger .treeview-external-drop-tab .e-list-item {
        border: 0.5px solid #E1E7EC;
        line-height: 15px;
        padding: 0 5px;
    }

    .treeview-external-drop-tab .e-list-item.e-hover>.e-fullrow,
    .treeview-external-drop-tab .e-list-item.e-active>.e-fullrow,
    .treeview-external-drop-tab .e-list-item.e-active.e-hover>.e-fullrow,
    .e-bigger .treeview-external-drop-tab .e-list-item.e-hover>.e-fullrow,
    .e-bigger .treeview-external-drop-tab .e-list-item.e-active>.e-fullrow,
    .e-bigger .treeview-external-drop-tab .e-list-item.e-active.e-hover>.e-fullrow {
        background-color: transparent;
        border-color: transparent;
        box-shadow: none !important;
    }

    #draggableTab {
        margin-bottom: 40px;
    }

    #draggableTreeview {
        margin-top: 40px;
    }
</style>
<script>
import Vue from 'vue';
import { TabPlugin, TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import { isNullOrUndefined } from "@syncfusion/ej2-base";

Vue.use(TabPlugin);
Vue.use(TreeViewPlugin);
export default {
  name: 'app',
    data: function(){
        return {

        headerText0: { text: 'India' },
        headerText1: { text: 'Australia' },
        headerText2: { text: 'USA' },
        headerText3: { text: 'France' },
        fields: {
            dataSource: [
                { text: 'Hennessey Venom', id: 'list-01' },
                { text: 'Bugatti Chiron', id: 'list-02' },
                { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
                { text: 'SSC Ultimate Aero', id: 'list-04' },
                { text: 'Koenigsegg CCR', id: 'list-05' },
                { text: 'McLaren F1', id: 'list-06' },
                { text: 'Aston Martin One- 77', id: 'list-07' },
                { text: 'Jaguar XJ220', id: 'list-08' },
                { text: 'McLaren P1', id: 'list-09' },
                { text: 'Ferrari LaFerrari', id: 'list-10' },
            ],
            id: "id", text: "text",
        },

        content0: 'India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.',

        content1: 'Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the world sixth-largest country by total area. Neighboring countries include Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east.',

        content2: 'The United States of America (USA or U.S.A.), commonly called the United States (US or U.S.) and America, is a federal republic consisting of fifty states and a federal district. The 48 contiguous states and the federal district of Washington, D.C. are in central North America between Canada and Mexico. The state of Alaska is west of Canada and east of Russia across the Bering Strait, and the state of Hawaii is in the mid-North Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean.',

        content3: 'France, officially the French Republic is a sovereign state comprising territory in western Europe and several overseas regions and territories. The European part of France, called Metropolitan France, extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean; France covers 640,679 square kilo metres and as of August 2015 has a population of 67 million, counting all the overseas departments and territories.',

        }
    },
    methods: {
        onNodeDragStop: function (args) {
            var tabObj = this.$refs.tabObj.ej2Instances;
            var treeObj = this.$refs.treeObj.ej2Instances;
            let dropElement = args.target.closest('#draggableTab .e-toolbar-item');
            if (dropElement != null) {
                let tabElement = document.querySelector('#draggableTab');
                let dropItemIndex = [].slice.call(tabElement.querySelectorAll('.e-toolbar-item')).indexOf(dropElement);
                let newTabItem = [{
                    header: { 'text': args.draggedNodeData.text.toString() },
                    content: args.draggedNodeData.text.toString() + ' Content'
                }];
                tabObj.addTab(newTabItem, dropItemIndex);
                treeObj.removeNodes([args.draggedNode]);
                args.cancel = true;
            } else {
                let dropNode = args.target.closest('#draggableTreeview .e-list-item ');
                if (!isNullOrUndefined(dropNode) && args.dropIndicator === 'e-drop-in') {
                    args.cancel = true;
                }
            }
        },
        onNodeDrag: function (args) {
            if (!isNullOrUndefined(args.target.closest('.tab-content'))) {
                args.dropIndicator = 'e-no-drop';
            } else if (!isNullOrUndefined(args.target.closest('#draggableTab .e-tab-header'))) {
                args.dropIndicator = 'e-drop-in';
            }
        },
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>


