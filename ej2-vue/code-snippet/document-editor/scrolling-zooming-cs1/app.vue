

<template>
      <div id="app">
          <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;"></ejs-documenteditor>
      </div>
</template>
<script>
    import Vue from 'vue'
    import { DocumentEditorPlugin } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorPlugin);

    export default {
        data: function() {
            return {
            };
        },
        mounted: function() {
                let defaultDocument: object = {
                    "sections": [
                        {
                            "blocks": [
                                {
                                    "paragraphFormat": {
                                        "styleName": "Normal"
                                    },
                                    "inlines": [
                                        {
                                            "text": "First page"
                                        }
                                    ]
                                }
                            ],
                            "headersFooters": {},
                        },
                        {
                            "blocks": [
                                {
                                    "paragraphFormat": {
                                        "styleName": "Normal"
                                    },
                                    "inlines": [
                                        {
                                            "text": "Second page"
                                        }
                                    ]
                                }
                            ],
                            "headersFooters": {},
                        }
                    ],
                    "characterFormat": {},
                    "paragraphFormat": {},
                    "background": {
                        "color": "#FFFFFFFF"
                    },
                    "styles": [
                        {
                            "type": "Paragraph",
                            "name": "Normal",
                            "next": "Normal"
                        },
                        {
                            "type": "Character",
                            "name": "Default Paragraph Font"
                        }
                    ]
            }
            this.$refs.documenteditor.open(JSON.stringify(defaultDocument));
            //Scroll to specified page.
            this.$refs.documenteditor.scrollToPage(2);
        }
    }
</script>
<style>
      @import "../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>


