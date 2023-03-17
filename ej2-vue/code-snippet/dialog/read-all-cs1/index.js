
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="target">
        <center> <ejs-button id="dialogbtn" v-on:click.native="btnClick">Open</ejs-button></center>
        <ejs-dialog id="dialog" ref="Dialog" :header='header' :target='target' :width='width' :buttons='buttons' :visible='visible' :content='content' :animationSettings='animateSettings'  :showCloseIcon="showCloseIcon">
        </ejs-dialog>

        <ejs-dialog id="modalDialog" ref="ModalDialog" :header='model_header' :isModal='isModal' :target='target' :buttons='mbuttons' :animationSettings='animationSettings' :visible='visible' >
        </ejs-dialog>
    </div>

  </div>
`,

     data: function() {
        return {
            header: 'User details',
            content: "<form><div class='form-group'><label for='name'>Name:</label>" +
            "<input type='name' value='' class='form-control' id='name'>" +
            "</div><div class='form-group'><label for='email'>Email Id:</label>" +
            "<input type='email' value='user@syncfusion.com' class='form-control' id='email'>" +
            "</div><div class='form-group'><label for='contact'>Contact Number:</label>" +
            "<input type='contact' class='form-control' id='contact'>" +
            "</div><div class='form-group'><label for='address'>Address:</label>" +
            "<textarea class='form-control' rows='2' id='address'></textarea>" +
            "</div></form>",
            showCloseIcon: true,
            visible: false,
            buttons: [{
                buttonModel: { isPrimary: true, content: 'Submit' }, click: this.createModalDialog }
            ],
            target: document.querySelector('body'),
            width: '400px',
            animationSettings: { effect: 'Zoom' },
            animateSettings: { effect: 'Zoom' },
            model_header: 'User details',
            showCloseIcon: true,
            isModal: true,
            mbuttons: [{
                buttonModel: {isPrimary: true, content: 'Yes'}, click:  function() {
                    this.hide();
                }}, {
                buttonModel: {isPrimary: false, content: 'No'}, click: this.showDialog
                }
            ],
        }
    },
    methods: {
        btnClick: function () {
            this.$refs.Dialog.show();
        },
        createModalDialog: function() {
            this.$refs.Dialog.hide();
            this.$refs.ModalDialog.content = this.getDynamicContent();
            this.$refs.ModalDialog.show();
        },
        showDialog: function() {
            this.$refs.ModalDialog.hide();
            this.$refs.Dialog.show();
        }

        getDynamicContent: function() {
            if (!document.getElementById('dialog')) {return;}
            let input =  document.getElementById('dialog').querySelector('#name');
            let email =  document.getElementById('dialog').querySelector('#email');
            let contact =  document.getElementById('dialog').querySelector('#contact');
            let address =  document.getElementById('dialog').querySelector('#address');
            let template = "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><b>Confirm your details</b></div>" +
            "</div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='name'> Name: </span>" +
            "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='nameValue'>"+ input.value + "</span> </div></div>" +
            "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='email'> Email: </span>" +
            "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='emailValue'>" + email.value +
            "</span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
            "<span id='Contact'> Contact number: </span></div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
            "<span id='contactValue'>"+ contact.value +" </span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
            "<span id='Address'> Address: </span> </div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='AddressValue'>" + address.value +"</span></div></div>"
            return template;
        },
    }

});