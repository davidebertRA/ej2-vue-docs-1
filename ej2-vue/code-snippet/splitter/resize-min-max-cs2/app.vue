


<template>
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' ref='splitterObj'  width='600px' height='200px'>
        <e-panes>
            <e-pane content='Left Pane' size ='200px'></e-pane>
            <e-pane content='Middle Pane' size ='200px'></e-pane>
            <e-pane content='Right Pane' size ='200px'></e-pane>
        </e-panes>
    </ejs-splitter>
</div>
</template>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(SplitterPlugin);
export default {
    name: 'app',
    data () {
        return { }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

#app {
    text-align: center;
    margin: 65px auto;
}
.content {
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 9px;
}

.e-splitter {
    margin: 0 auto;
}

.e-pane {
  text-align: center;
  align-items: center;
  display: grid;
}
</style>



