

<template>
    <div id="app">
        <div id='container'>
           <ejs-tab ref="firstTabObj" id='firstTab' heightAdjustMode='Auto' :allowDragAndDrop="true" dragArea="#container" :onDragStart="firstTabdragStart" :dragged="firstTabDragStop">
                <e-tabitems>
                    <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
                    <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
                    <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
                    <e-tabitem :header='headerText3' :content="content3"></e-tabitem>
                </e-tabitems>
            </ejs-tab>
            <ejs-tab ref="secondTabObj" id='secondTab' heightAdjustMode='Auto' :allowDragAndDrop="true" dragArea="#container" :onDragStart="secondTabDragStart" :dragged="secondTabDragStop">
                <e-tabitems>
                    <e-tabitem :header='headerText4' :content="content4"></e-tabitem>
                    <e-tabitem :header='headerText5' :content="content5"></e-tabitem>
                    <e-tabitem :header='headerText6' :content="content6"></e-tabitem>
                    <e-tabitem :header='headerText7' :content="content7"></e-tabitem>
                </e-tabitems>
            </ejs-tab>
        </div>
  </div>
</template>
<style>
    #firstTab .e-content .e-item,
    #secondTab .e-content .e-item {
        font-size: 12px;
        margin: 10px;
        text-align: justify;
    }

    #firstTab {
        margin-bottom: 40px;
    }

    #secondTab {
        margin-top: 40px;
    }
</style>
<script>
import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

Vue.use(TabPlugin);
export default {
  name: 'app',
    data: function(){
        return {

        headerText0: { text: 'India' },
        headerText1: { text: 'Australia' },
        headerText2: { text: 'USA' },
        headerText3: { text: 'France' },
        headerText4: { text: 'HTML' },
        headerText5: { text: 'C Sharp(C#)' },
        headerText6: { text: 'Java' },
        headerText7: { text: 'VB.Net' },
        firstTabitem: {},
        secondTabitem: {},
        dragItemContainer: "",
        dragItemIndex: 0,

        content0: 'India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.',

        content1: 'Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the world sixth-largest country by total area. Neighboring countries include Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east.',

        content2: 'The United States of America (USA or U.S.A.), commonly called the United States (US or U.S.) and America, is a federal republic consisting of fifty states and a federal district. The 48 contiguous states and the federal district of Washington, D.C. are in central North America between Canada and Mexico. The state of Alaska is west of Canada and east of Russia across the Bering Strait, and the state of Hawaii is in the mid-North Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean.',

        content3: 'France, officially the French Republic is a sovereign state comprising territory in western Europe and several overseas regions and territories. The European part of France, called Metropolitan France, extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean; France covers 640,679 square kilo metres and as of August 2015 has a population of 67 million, counting all the overseas departments and territories.',

        content4: 'HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.',

        content5: 'C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.',

        content6: 'Java is a set of computer software and specifications developed by Sun Microsystems, later acquired by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to provide many features of native applications and can be embedded in HTML pages.',

        content7: 'The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.',

        }
    },
    methods: {
        firstTabdragStart: function (args) {
            var firstTabObj = this.$refs.firstTabObj.ej2Instances;
            this.firstTabitem = [firstTabObj.items[args.index]];
            args.draggedItem.style.visibility = 'hidden';
            this.dragItemContainer = args.draggedItem.closest('.e-tab');
        },
        firstTabDragStop: function (args) {
            if (!isNullOrUndefined(args.target.closest('.e-tab')) && !this.dragItemContainer.isSameNode(args.target.closest('.e-tab'))) {
                args.cancel = true;
                let TabElement = args.target.closest('.e-tab');
                let dropItem = args.target.closest('.e-toolbar-item');
                if (TabElement != null && dropItem != null) {
                    var firstTabObj = this.$refs.firstTabObj.ej2Instances;
                    var secondTabObj = this.$refs.secondTabObj.ej2Instances;
                    this.dragItemIndex = Array.prototype.indexOf.call(firstTabObj.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);
                    let dropItemContainer = args.target.closest('.e-toolbar-items');
                    let dropItemIndex = (dropItemContainer != null) ? (Array.prototype.slice.call(dropItemContainer.querySelectorAll('.e-toolbar-item'))).indexOf(dropItem) : '';
                    secondTabObj.addTab(this.firstTabitem, dropItemIndex);
                    firstTabObj.removeTab(this.dragItemIndex);
                }
            }
        },
        secondTabDragStart: function (args) {
            var secondTabObj = this.$refs.secondTabObj.ej2Instances;
            this.secondTabitem = [secondTabObj.items[args.index]];
            args.draggedItem.style.visibility = 'hidden';
            this.dragItemContainer = args.draggedItem.closest('.e-tab');
        },
        secondTabDragStop: function (args) {
            if (!isNullOrUndefined(args.target.closest('.e-tab')) && !this.dragItemContainer.isSameNode(args.target.closest('.e-tab'))) {
                args.cancel = true;
                let TabElement = args.target.closest('.e-tab');
                let dropItem = args.target.closest('.e-toolbar-item');
                if (TabElement != null && dropItem != null) {
                    var firstTabObj = this.$refs.firstTabObj.ej2Instances;
                    var secondTabObj = this.$refs.secondTabObj.ej2Instances;
                    this.dragItemIndex = Array.prototype.indexOf.call(secondTabObj.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);
                    let dropItemContainer = args.target.closest('.e-toolbar-items');
                    let dropItemIndex = (dropItemContainer != null) ? (Array.prototype.slice.call(dropItemContainer.querySelectorAll('.e-toolbar-item'))).indexOf(dropItem) : '';
                    firstTabObj.addTab(this.secondTabitem, dropItemIndex);
                    secondTabObj.removeTab(this.dragItemIndex);
                }
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


