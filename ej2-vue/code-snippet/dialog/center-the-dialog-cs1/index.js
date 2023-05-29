
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="modalTarget" class="control-section; position:relative" style="height:350px;">
        <!-- Render Button to open the modal Dialog -->
        <ejs-button id='modalbtn' v-on:click.native="modalBtnClick">Open</ejs-button>
        <!-- Render modal Dialog -->
        <ejs-dialog ref="modalDialog"  :isModal='isModal' :header='header' :target='target' :width='width' :animationSettings='animationSettings' :content='content' :open="modalDlgOpen" :close="modalDlgClose" :overlayClick="overlayClick">
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: document.body,
            width: '335px',
            header: 'Software Update',
            content: 'Your current software version is up to date.',
            isModal: true,
            animationSettings: { effect: 'None' }
        }
    },
    mounted: function(){
        document.getElementById('modalbtn').focus();
    },
    methods: {
        modalBtnClick: function() {
            this.$refs.modalDialog.show();
        },
        modalDlgClose: function() {
            document.getElementById('modalbtn').style.display = '';
        },
        modalDlgOpen: function() {
            document.getElementById('modalbtn').style.display = 'none';
        },
        overlayClick: function() {
            this.$refs.modalDialog.hide();
        }
    }

});