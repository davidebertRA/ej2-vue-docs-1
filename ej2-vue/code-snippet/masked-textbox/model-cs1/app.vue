

<template>
  <div id="app">
  <div class='wrap'>
        <div class='e-input-group' style='margin-bottom:30px'>
        <input class='e-input' type='text' v-model='value' placeholder='Mobile Number'  />
        </div>
        <div>
           <ejs-maskedtextbox v-model="value" :value="value" mask='000-000-0000'></ejs-maskedtextbox>
        </div>
    </div>
  </div>
</template>
<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  components: {
    'ejs-maskedtextbox': MaskedTextBoxComponent
  },
  data () {
    return {
      value : ''
    }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
  margin: 35px auto;
  width: 240px;
}
</style>


