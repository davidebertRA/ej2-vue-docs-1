

<template>
  <div>
    <div id="target" class="control-section; position:relative" style="height:350px;">
        <!-- Render Button to open the Dialog -->
        <ejs-button id='modalbtn' v-on:click.native="btnClick">Open</ejs-button>
        <!-- Render Dialog -->
        <ejs-dialog ref="localeDialog" :header='header' :target='target' :width='width' :locale='locale'  :showCloseIcon='true' :animationSettings='animationSettings' :content='content' :open="dlgOpen" :close="dlgClose">
        </ejs-dialog>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { L10n } from '@syncfusion/ej2-base';

Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);
L10n.load({
    'fr-BE': {
        'dialog': {
        'close': "Fermer"
        }
    }
});
export default {
    data: function() {
        return {
            target: '#target',
            width: '335px',
            header: 'Dialogue',
            content: 'Dialogue avec la culture française.',
            animationSettings: { effect: 'None' },
            locale: 'fr-BE'
        }
    },
    mounted: function(){
        document.getElementById('modalbtn').focus();
    },
    methods: {
        btnClick: function() {
            this.$refs.localeDialog.show();
        },
        dlgClose: function() {
            document.getElementById('modalbtn').style.display = '';
        },
        dlgOpen: function() {
            document.getElementById('modalbtn').style.display = 'none';
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
    #app {
        color: #008cff;
        height: 40px;
        left: 45%;
        position: absolute;
        top: 45%;
        width: 30%;
    }
    .control-section {
        height: 100%;
        min-height: 200px;
    }
</style>


