

<template>
    <div id="app">
    <ejs-tooltip ref="tooltip"  class="tooltipcontainer" :cssClass="cssClass" content='Tooltip arrow customized' >
            <div id="target">
                Show tooltip
            </div>
        </ejs-tooltip>
  </div>
</template>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

export default {
    data() {
    return {
        cssClass: 'customtooltip'
    }
    }
}
</script>
<style>
@import "node_modules/@syncfusion/ej2-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#target {
    background-color: #cfd8dc;
    border: 3px solid #eceff1;
    box-sizing: border-box;
    margin: 80px auto;
    padding: 20px 0;
    width: 200px;
    text-align: center;
    color: #424242;
    font-size: 20px;
    user-select: none;
}


/* csslint ignore:start */

.customtooltip.e-tooltip-wrap .e-tip-content {
    line-height: 20px;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip.e-tip-bottom {
    height: 12px;
    left: 50%;
    top: 100%;
    width: 24px;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip.e-tip-top {
    height: 12px;
    left: 50%;
    top: -9px;
    width: 24px;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip.e-tip-left {
    height: 24px;
    left: -9px;
    top: 48%;
    width: 12px;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip.e-tip-right {
    height: 24px;
    left: 100%;
    top: 50%;
    width: 12px;
}

.customtooltip.e-tooltip-wrap {
    border-radius: 4px;
    opacity: 1;
}

.customtooltip.e-tooltip-wrap.e-popup {
    background-color: #fff;
    border: 2px solid #000;
}

.customtooltip.e-tooltip-wrap .e-tip-content {
    color: #000;
    font-size: 12px;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-bottom {
    border-left: 12px solid transparent;
    border-right: 14px solid transparent;
    border-top: 12px solid #000;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-top {
    border-bottom: 12px solid #000;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-left {
    border-bottom: 12px solid transparent;
    border-right: 12px solid #000;
    border-top: 12px solid transparent;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-right {
    border-bottom: 12px solid transparent;
    border-left: 12px solid #000;
    border-top: 12px solid transparent;
}

.customtooltip.e-tooltip-wrap .e-arrow-tip-inner.e-tip-bottom {
    color: #fff;
    font-size: 25.9px;
}

/* csslint ignore:end */
</style>



