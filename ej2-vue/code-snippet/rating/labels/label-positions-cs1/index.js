
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <label>Left Label Position</label><br/>
        <ejs-rating id="rating1" value="3" :showLabel="true" labelPosition="Left"></ejs-rating><br/>
        <label>Right Label Position</label><br/>
        <ejs-rating id="rating2" value="3" :showLabel="true" labelPosition="Right"></ejs-rating><br/>
        <label>Top Label Position</label><br/>
        <ejs-rating id="rating3" value="3" :showLabel="true" labelPosition="Top"></ejs-rating><br/>
        <label>Bottom Label Position</label><br/>
        <ejs-rating id="rating4" value="3" :showLabel="true" labelPosition="Bottom"></ejs-rating><br/>
    </div>
`,

});