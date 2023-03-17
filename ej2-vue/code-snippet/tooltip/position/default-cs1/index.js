
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(TooltipPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-tooltip ref="tooltip" content="Tooltip content" position='TopCenter' target="#tooltip">
            <div id='container'>
                <ejs-button id="tooltip">Show tooltip</ejs-button>
                <div class="ddl">
                    <select id="positions" ref="positions" class="form-control" style="width:150px" v-on:click='onclick' v-on:change='onchange'>
                        <option value="TopLeft">Top Left</option>
                        <option value="TopCenter" selected>Top Center</option>
                        <option value="TopRight">Top Right</option>
                        <option value="BottomLeft">Bottom Left</option>
                        <option value="BottomCenter">Bottom Center</option>
                        <option value="BottomRight">Bottom Right</option>
                        <option value="LeftTop">Left Top</option>
                        <option value="LeftCenter">Left Center</option>
                        <option value="LeftBottom">Left Bottom</option>
                        <option value="RightTop">Right Top</option>
                        <option value="RightCenter">Right Center</option>
                        <option value="RightBottom">Right Bottom</option>
                    </select>
                </div>
            </div>
        </ejs-tooltip>
    </div>
`,

    data() {
    return {
    };
    },
    methods: {
        onclick: function(){
            this.$refs.tooltip.close();
        },
        onchange: function(){
            this.$refs.tooltip.position = this.$refs.positions.value;
            this.$refs.tooltip.dataBind();
        }
    }

});