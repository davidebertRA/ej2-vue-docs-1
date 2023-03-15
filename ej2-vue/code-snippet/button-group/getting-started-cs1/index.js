
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div>
        <h5>Normal behavior</h5>
        <div class='e-btn-group' role='group'>
            <ejs-button content='HTML'></ejs-button>
            <ejs-button content='CSS'></ejs-button>
            <ejs-button content='Javascript'></ejs-button>
        </div>
        <h5>Checkbox type behavior</h5>
        <div class='e-btn-group' role='group'>
            <input type="checkbox" id="checkbold" name="font" value='bold' />
            <label class="e-btn" for="checkbold">Bold</label>
            <input type="checkbox" id="checkitalic" name="font" value='italic' />
            <label class="e-btn" for="checkitalic">Italic</label>
            <input type="checkbox" id="checkunderline" name="font" value='underline' />
            <label class="e-btn" for="checkunderline">Underline</label>
        </div>
        <h5>Radiobutton type behavior</h5>
        <div class='e-btn-group' role='group'>
            <input type="radio" id="radioleft" name="align" value='left'/>
            <label class="e-btn" for="radioleft">Left</label>
            <input type="radio" id="radiomiddle" name="align" value='middle'/>
            <label class="e-btn" for="radiomiddle">Center</label>
            <input type="radio" id="radioright" name="align" value='right'/>
            <label class="e-btn" for="radioright">Right</label>
        </div>
    </div>
  </div>
`,

  name: 'app'

});