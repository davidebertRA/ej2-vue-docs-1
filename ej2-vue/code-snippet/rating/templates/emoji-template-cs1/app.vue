

<template>
    <div class='wrap'>
        <ejs-rating id="rating" value="4" :emptyTemplate="emptyTemplate" :enableSingleSelection="true" :enableAnimation="false" ></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

var emojiTemplate = Vue.component("emptyTemplate", {
  template: `<span v-if='data.index==0' class='angry emoji'>😡</span>
             <span v-else-if='data.index==1' class='disagree emoji'>🙁</span>
             <span v-else-if='data.index==2' class='neutral emoji'>😐</span>
             <span v-else-if='data.index==3' class='agree emoji'>🙂</span>
             <span v-else class='happy emoji'>😀</span>`,
  data() {
    return {
        data: {}
    };
  }
});

export default {
    data() {
        return {
            emptyTemplate: function(e) {
                return {
                    template: emojiTemplate
                }
            }
        }
    };
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

/* To change the color of an unselected rating item. */
.e-rating-item-container:not(.e-rating-selected) .emoji {
  filter: grayscale(1);
}

</style>


