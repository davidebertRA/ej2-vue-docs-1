---
layout: post
title: Customize context menu in Vue Document editor component | Syncfusion
description: Learn here all about Customize context menu in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Customize context menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in Vue Document editor component

## How to customize context menu in Document Editor

Document Editor allows you to add custom option in context menu. It can be achieved by using the [`addCustomMenu()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/contextMenu/#addcustommenu) method and custom action is defined using the [`customContextMenuSelect`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/customContentMenuEventArgs/)

### Add Custom Option

The following code shows how to add custom option in context menu.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import {
    DocumentEditorContainerPlugin,
    DocumentEditorContainerComponent,
    Toolbar,
  } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return {
        serviceUrl:
          'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar],
    },
    methods: {
      onCreated: function () {
        // creating Custom Options
        let menuItems = [
          {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find',
          },
        ];
        // adding Custom Options
        this.$refs.container.ej2Instances.documentEditor.contextMenu.addCustomMenu(
          menuItems,
          false
        );
        // custom Options Select Event
        this.$refs.container.ej2Instances.documentEditor.customContextMenuSelect =
          (args) => {
            // custom Options Functionality
            let id =
              this.$refs.container.ej2Instances.documentEditor.element.id;
            switch (args.id) {
              case id + 'search_in_google':
                // To get the selected content as plain text
                let searchContent =
                  this.$refs.container.ej2Instances.documentEditor.selection
                    .text;
                if (
                  !this.$refs.container.ej2Instances.documentEditor.selection
                    .isEmpty &&
                  /\S/.test(searchContent)
                ) {
                  window.open('http://google.com/search?q=' + searchContent);
                }
                break;
            }
          };
      },
    },
  };
</script>
```

### Customize custom option in context menu

Document Editor allows you to customize the added custom option and also to hide/show default context menu.

#### Hide default context menu items

Using [`addCustomMenu()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/contextMenu/#addcustommenu) method, you can hide the default context menu. By setting second parameter as true.

The following code shows how to hide default context menu and add custom option in context menu.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import {
    DocumentEditorContainerPlugin,
    DocumentEditorContainerComponent,
    Toolbar,
  } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return {
        serviceUrl:
          'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar],
    },
    methods: {
      onCreated: function () {
        // creating Custom Options
        let menuItems = [
          {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find',
          },
        ];
        // adding Custom Options
        this.$refs.container.ej2Instances.documentEditor.contextMenu.addCustomMenu( menuItems,true);
      }
    }
  };
</script>
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs/).

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import {
    DocumentEditorContainerPlugin,
    DocumentEditorContainerComponent,
    Toolbar,
  } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return {
        serviceUrl:
          'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar],
    },
    methods: {
      onCreated: function () {
        // creating Custom Options
        let menuItems = [
          {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find',
          },
        ];
        // adding Custom Options
        this.$refs.container.ej2Instances.documentEditor.contextMenu.addCustomMenu( menuItems,false);
        // custom Options Select Event
        this.$refs.container.ej2Instances.documentEditor.customContextMenuSelect =
          (args) => {
            // custom Options Functionality
            let id =
              this.$refs.container.ej2Instances.documentEditor.element.id;
            switch (args.id) {
              case id + 'search_in_google':
                // To get the selected content as plain text
                let searchContent =
                  this.$refs.container.ej2Instances.documentEditor.selection
                    .text;
                if (
                  !this.$refs.container.ej2Instances.documentEditor.selection
                    .isEmpty &&
                  /\S/.test(searchContent)
                ) {
                  window.open('http://google.com/search?q=' + searchContent);
                }
                break;
            }
          };
          //  custom options hide/show functionality
        this.$refs.container.ej2Instances.documentEditor.customContextMenuBeforeOpen = (args) => {
        let search = document.getElementById(args.ids[0]);
        search.style.display = 'none';
        let searchContent = this.$refs.container.ej2Instances.documentEditor.selection.text;
        if (!this.$refs.container.ej2Instances.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            search.style.display = 'block';
        }
       };
      },
    },
  };
</script>
```

The following is the output of custom context menu with customization.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/customize-context-menu-cs1" %}
