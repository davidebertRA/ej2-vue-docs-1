

<template>
  <div id='app'>
    <ejs-tooltip style="display:block;" class="e-prevent-select" :content='content' target='.target' position='RightCenter' :beforeRender='onBeforeRender'>
      <div id='container'>
        <h4>National Sports</h4>
        <div id="targetContainer" class="e-prevent-select">
            <div id="countrylist">
                <ul>
                    <li class="target" title="1"><span>Australia</span></li>
                    <li class="target" title="2"><span>Bhutan</span></li>
                    <li class="target" title="3"><span>China</span></li>
                    <li class="target" title="4"><span>Cuba</span></li>
                    <li class="target" title="5"><span>India</span></li>
                    <li class="target" title="6"><span>Switzerland</span></li>
                    <li class="target" title="7"><span>United States</span></li>
                </ul>
            </div>
        </div>
      </div>
    </ejs-tooltip>
  </div>
</template>
<style>
@import "node_modules/@syncfusion/ej2-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#container {
  width: 350px;
  position: relative;
  left: 50%;
  transform: translateX(-25%);
}

#countrylist {
  padding: 5px;
}

#countrylist ul {
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100px;
}

#countrylist li {
  padding: 10px;
}

#countrylist li:hover {
  background-color: #ececec;
}

.contentWrap {
  line-height: 16px;
  padding: 3px 0;
}
</style>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { Fetch } from '@syncfusion/ej2-base';
Vue.use(TooltipPlugin);
export default {
  data: function() {
    return {
      content : "Loading..",
    };
  },
  methods: {
       onBeforeRender: function(args){
  let fetchApi: Fetch = new Fetch('./tooltipdata.json', 'GET');
    fetchApi.send().then((result)  =>  {
            for (var i = 0; i < result.length; i++) {
                 if (result[i].Id === args.target.getAttribute('data-content')) {
                    /* tslint:disable */
                    this.content = "<div class='contentWrap'><div class='def'>" + result[i].Sports + "</div></div>";
                    /* tslint:enable */
                }
                //  this.dataBind();
            }
        }, (reason) => {
            this.content = reason;
            //  this.dataBind();
        });
       }
   }
}
</script>



