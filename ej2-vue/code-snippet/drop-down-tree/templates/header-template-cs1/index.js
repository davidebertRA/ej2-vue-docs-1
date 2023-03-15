
import Vue from 'vue';
import { DropDownTreePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownTreePlugin);
var data = [
  { "id": 1, "name": "Steven Buchanan", "job": "General Manager", "hasChild": true, "expanded": true },
  { "id": 2, "pid": 1, "name": "Laura Callahan", "job": "Product Manager", "hasChild": true },
  { "id": 3, "pid": 2, "name": "Andrew Fuller", "job": "Team Lead", "hasChild": true },
  { "id": 4, "pid": 3, "name": "Anne Dodsworth", "job": "Developer" },
  { "id": 10, "pid": 3, "name": "Lilly", "job": "Developer", "status": "online" },
  { "id": 5, "pid": 1, "name": "Nancy Davolio", "job": "Product Manager", "hasChild": true },
  { "id": 6, "pid": 5, "name": "Michael Suyama", "job": "Team Lead", "hasChild": true },
  { "id": 7, "pid": 6, "name": "Robert King", "job": "Developer " },
  { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
  { "id": 9, "pid": 1, "name": "Janet Leverling", "job": "HR" }
];
var headerVue = Vue.component("headerTemplate", {
  template: `<span class='head'>Employee List</span>`,
  data() {
    return {
      data: {}
    };
  }
});

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;"><br>
      <ejs-dropdowntree id='dropdowntree' :fields='fields' placeholder='Select an employee':headerTemplate='headerTemplate' ></ejs-dropdowntree>
    </div>
  </div>
`,

  data (){
    return {
      fields: { dataSource: data, value: 'id', text: 'name', parentValue:"pid", hasChildren: 'hasChild' },
        headerTemplate :  function(e) {
          return {
            template: headerVue
          };
        }
    }
  }

});