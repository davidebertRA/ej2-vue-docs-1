

<template>
  <div id='app'>
    <div id='container'>
        <div style='padding-bottom:15px;'>
            <label>Rule Output</label>
                <div class='rule-output-container'>
                    <div id='rule-output'></div>
                </div>
            </div>
        <ejs-recurrenceeditor :selectedType='selectedType' :change='onChange'></ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { RecurrenceEditorPlugin } from '@syncfusion/ej2-vue-schedule';

  Vue.use(RecurrenceEditorPlugin);

  export default {
    data () {
      return {
        selectedType: 1  
      }
    },
    mounted: function () {
        let outputElement = document.querySelector('#rule-output');
        outputElement.innerText = 'Select Rule';
    },
    methods: {
        onChange: function(args) {
            let outputElement = document.querySelector('#rule-output');
            if(args.value == "") {
                outputElement.innerText = 'Select Rule';
            } else {
                outputElement.innerText = args.value;
            }
        }
    }
  }
</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

.recurrence-editor-wrap {
        margin: 0 25%;
    }

    .rule-output-container {
        height: auto;
        border: 1px solid #969696;
    }

    #rule-output {
        padding: 8px 4px;
        text-align: center;
        min-height: 20px;
        overflow: hidden;
        overflow-wrap: break-word;
    }

    @media (max-width: 580px) {
        .recurrence-editor-wrap {
            margin: 0 5%;
        }
    }
</style>


