

<template>
  <div>
     <div id="target" class="control-section">
         <ejs-button id="dialogBtn" v-on:click.native="buttonClick">Open Dialog</ejs-button>

        <ejs-dialog id='defaultDialog' header='Choose a Dialog Position' showCloseIcon='true' :position='position' :footerTemplate='footerTemplate' width='406px' ref='dialogObj'
            target='#target' :open='dialogOpen' :close='dialogClose' closeOnEscape='false'>
            <table style='width:371px' id ='poschange'>
                <tr>
                    <td><ejs-radiobutton id='radio1' label='Left Top' value='left top' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio2' label='Center Top' value='center top' name='xy' :change='changePosition'></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio3' label='Right Top' value='right top' name='xy' :change='changePosition'></ejs-radiobutton></td>
                </tr>
                <tr>
                    <td><ejs-radiobutton id='radio4' label='Left Center' value='left center' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio5' checked='true' label='Center Center' value='center center' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio6' label='Right Center' value='right center' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                </tr>
                <tr>
                    <td><ejs-radiobutton id='radio7' label='Left Bottom' value='left bottom' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio8' label='Center Bottom' value='center bottom' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio9' label='Right Bottom' value='right bottom' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                </tr>
            </table>
        </ejs-dialog>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);
Vue.use(RadioButtonPlugin);

export default {
    data: function() {
        return {
            footerTemplate: '<span id="posvalue" style="float:left;margin-left:8px;padding:10px;">Position: { X: "Center", Y: "Center" }</span>',
            position: { X: 'center', Y: 'center' }
        }
    },
    methods: {
        buttonClick: function(args){
            this.$refs.dialogObj.show();
        },
        changePosition: function(event) {
            this.$refs.dialogObj.position = { X: event.value.split(" ")[0], Y: event.value.split(" ")[1] };
            document.getElementById('posvalue').innerHTML = 'Position: {X: "' + event.value.split(" ")[0] + '", Y: "' + event.value.split(" ")[1] + '"}'
            var txt = event.event.target.parentElement.querySelector('.e-label').innerText.split(" ");
            document.getElementById('posvalue').innerHTML = 'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
        },
        dialogClose() {
            document.querySelector('#dialogBtn').style.display='inline-block';
        },
        dialogOpen() {
            document.querySelector('#dialogBtn').style.display='none';
        }
    }
}
</script>

<style>
    html,
    body,
    #container {
        height: 100%;
        overflow: hidden;
        width: 100%;
    }
    .control-section {
        min-height: 350px;
        max-width: 840px;
        margin: 10px;
    }
    #defaultDialog table,
    #defaultDialog th,
    #defaultDialog td {
        border: 1px solid #D8D8D8;
        border-collapse: collapse;
    }

    #container {
        height: 365px;
    }

    #defaultDialog.e-dialog .e-footer-content {
        padding: 0px 1px 4px ! important;
    }

    .tableStyle {
        margin: 17px;
        width: 304px;
    }

    .e-dialog .e-dlgcontent{
        padding: 10px 16px 10px;
    }

    .e-radio +label .e-label {
        line-height:18px;
    }

    td {
        padding: 6px;
    }
</style>


