
import Vue from 'vue';


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class='e-btn-group'>
        <input type="radio" id="radioleft" name="align" value="left"/>
        <label class="e-btn" for="radioleft">Left</label>
        <input type="radio" id="radiomiddle" name="align" value="middle"/>
        <label class="e-btn" for="radiomiddle">Center</label>
        <input type="radio" id="radioright" name="align" value="right"/>
        <label class="e-btn" for="radioright">Right</label>
    </div>
  </div>
`,

  name: 'app'

});