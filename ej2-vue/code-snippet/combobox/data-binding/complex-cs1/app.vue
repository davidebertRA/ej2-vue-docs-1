

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' :dataSource='countriesData' :fields='fields' placeholder="Select a Country"></ejs-combobox>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);

export default {
  data (){
    return {
      countriesData: [
            { Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
            { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
            { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
            { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
            { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
            { Country:{Name: 'France'}, Code: { Id:'FR'} }
        ],
     fields : { text: 'Country.Name', value: 'Code.Id' }
    }
  }
}
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>


