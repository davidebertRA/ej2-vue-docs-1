
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <ejs-chiplist id="chip" cssClass="e-outline">
        <e-chips>
            <e-chip text="Chai"></e-chip>
            <e-chip text="Chang"></e-chip>
            <e-chip text="Aniseed Syrup"></e-chip>
            <e-chip text="Ikura"></e-chip>
        </e-chips>
    </ejs-chiplist>
    <ejs-chiplist id="chip" cssClass="e-outline" enableDelete="true">
        <e-chips>
            <e-chip text="Andrew"></e-chip>
            <e-chip text="Janet"></e-chip>
            <e-chip text="Laura"></e-chip>
            <e-chip text="Margaret"></e-chip>
        </e-chips>
    </ejs-chiplist>
</div>
`,



});