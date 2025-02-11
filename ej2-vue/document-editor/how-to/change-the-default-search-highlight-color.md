---
layout: post
title: Change the default search highlight color in Vue Document editor component | Syncfusion
description: Learn here all about Change the default search highlight color in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Change the default search highlight color 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change the default search highlight color in Vue Document editor component

Document editor provides an options to change the default search highlight color using [`searchHighlightColor`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorSettingsModel/#searchhighlightcolor) in Document editor settings. The highlight color which is given in [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/#documenteditorsettings) will be highlighted on the searched text. By default, search highlight color is `yellow`.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the default search highlight color.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :documentEditorSettings='settings' height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return { serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      // Add required color to change the default search highlight color
      settings:{ searchHighlightColor: 'Grey' };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar]
    }
  }
</script>
```

Output will be like below:

![How to change the default search highlight color](../images/search-color.png)