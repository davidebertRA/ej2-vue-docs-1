


<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
        <ejs-listbox :dataSource='data' :fields="fields" ></ejs-listbox>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(ListBoxPlugin);
export default {
  data (){
    return {
       data: [
    { Id: 'game1', Sports: { Name: 'Badminton'} },
    { Id: 'game2', Sports: { Name: 'Cricket'} },
    { Id: 'game3', Sports: { Name: 'Football'} },
    { Id: 'game4', Sports: { Name: 'Golf'} },
    { Id: 'game5', Sports: { Name: 'Tennis'} },
    { Id: 'game6', Sports: { Name: 'Basket Ball'} },
    { Id: 'game7', Sports: { Name: 'Base Ball'} },
    { Id: 'game8', Sports: { Name: 'Hockey'} },
    { Id: 'game9', Sports: { Name: 'Volley Ball'} }
];
fields:{ text:"Sports.Name" }
    }
  }
}

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>



