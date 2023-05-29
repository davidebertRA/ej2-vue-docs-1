---
layout: post
title: Download in Vue Pdfviewer component | Syncfusion
description: Learn here all about Download in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Download 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Download in Vue Pdfviewer component

The PDF Viewer supports downloading the loaded PDF file. You can enable/disable the download using the following code snippet.

![Alt text](./images/download.png)

You can invoke download action using following code snippet.,

```

<template>
    <div id="app">
        <ejs-button ref="downloadBtn" v-on:click.native="downloadClicked">Download</ejs-button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath"
            :documentLoad="documentLoad">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         Annotation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch } from '@syncfusion/ej2-vue-pdfviewer';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
      documentPath:"PDF_Succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, 
                 BookmarkView, ThumbnailView, Print, TextSelection, TextSearch ]},

  methods: {
    downloadClicked: function (args) {
      viewer.download();
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
    },
  }
}
</script>

```

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)