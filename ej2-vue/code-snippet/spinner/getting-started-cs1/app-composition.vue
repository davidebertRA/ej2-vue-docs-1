<template>
   <div id="app">

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-vue-popups';

onMounted (() => {
    //createSpinner() method is used to create spinner
    createSpinner({
    // Specify the target for the spinner to show
    target: document.getElementById('app')
  });
  
  // showSpinner() will make the spinner visible
  showSpinner(document.getElementById('app'));

  setInterval(() => {
    // hideSpinner() method used hide spinner
    hideSpinner(document.getElementById('app'));
  }, 100000);
});
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>