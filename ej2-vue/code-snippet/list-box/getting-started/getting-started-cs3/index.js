
import Vue from 'vue';
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(ListBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
        <ejs-listbox :dataSource='data' ></ejs-listbox>
    </div>
  </div>
`,

  data (){
    return {
       data: [
            { id: 'game1', sports: 'Badminton' },
            { id: 'game2', sports: 'Cricket'},
            { id: 'game3', sports: 'Football'},
            { id: 'game4', sports: 'Golf'},
            { id: 'game5', sports: 'Tennis'},
            { id: 'game6', sports: 'Basket Ball'},
            { id: 'game7', sports: 'Base Ball'},
            { id: 'game8', sports: 'Hockey'},
            { id: 'game9', sports: 'Volley Ball'}
        ];
    fields:{ text:"sports" }
    }
  }

});