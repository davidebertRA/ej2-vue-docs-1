
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' sortOrder='Ascending' popupHeight="250px" :allowFiltering='allowFiltering' :filtering='filtering' :dataSource='searchData' :query='query' :fields='fields' placeholder="Select a customer"></ejs-combobox>
    </div>
  </div>
`,

  data (){
    return {
            searchData : new DataManager({
                url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Suppliers',
                crossDomain: true
            }),
            fields : { text: "ContactName", key: "SupplierID" },
            query : new Query().select(["SupplierID", "ContactName"]).take(6),
            allowFiltering : true
        }
  },
   methods: {
        filtering: function(e) {
           var searchData = new DataManager({
                url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Suppliers',
                crossDomain: true
            });
             if (e.text == '') e.updateData(searchData);
            else {
                var query = new Query().select(["SupplierID", "ContactName"]);
                query = (e.text !== '') ? query.where('ContactName', 'endswith', e.text, true) : query;
                e.updateData(searchData, query);
            }
        }
    }

});