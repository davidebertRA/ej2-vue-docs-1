
import Vue from 'vue';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';


new Vue({
	el: '#app',
	template: `
   <div id="app">

    </div>
`,

  name: 'app',
  mounted: function() {

    //createSpinner() method is used to create spinner
    createSpinner({
      // Specify the target for the spinner to show
      target: document.getElementById('app')
    });

    // showSpinner() will make the spinner visible
    showSpinner(document.getElementById('app'));

    setInterval(function(){
      // hideSpinner() method used hide spinner
      hideSpinner(document.getElementById('app'));
    }, 100000);
  }

});