<template>
  <ejs-ribbon>
  <e-ribbon-tabs>
    <e-ribbon-tab header="Home">
      <e-ribbon-groups>
        <e-ribbon-group header="Paragraph">
          <e-ribbon-collections>
            <e-ribbon-collection>
              <e-ribbon-items>
                <e-ribbon-item type="GroupButton" :allowedSizes="size" :groupButtonSettings="groupButtonMultiple"></e-ribbon-item>
              </e-ribbon-items>
            </e-ribbon-collection>
          </e-ribbon-collections>
        </e-ribbon-group>
      </e-ribbon-groups>
    </e-ribbon-tab>
  </e-ribbon-tabs>
</ejs-ribbon>
</template>

<script>
import Vue from "vue";
import { RibbonItemSize, RibbonGroupButtonSelection, RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
Vue.use(RibbonPlugin);

export default {
  data: function () {
    return {
      size: RibbonItemSize.Medium,
      groupButtonMultiple: {
            selection: RibbonGroupButtonSelection.Multiple, 
            items: [{ iconCss: 'e-icons e-bold', content: 'Bold', selected: true}, 
            {iconCss: 'e-icons e-italic', content: 'Italic'}, 
            {iconCss: 'e-icons e-underline', content: 'Underline'}, 
            {iconCss: 'e-icons e-strikethrough', content: 'Strikethrough'}, 
            {iconCss: 'e-icons e-change-case', content: 'Change Case'}
          ]
        }
    };
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>