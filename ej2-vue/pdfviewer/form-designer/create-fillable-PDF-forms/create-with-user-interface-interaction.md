---
layout: post
title: Create with user interface interaction in Vue Pdfviewer component | Syncfusion
description: Learn here all about Create with user interface interaction in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Create with user interface interaction 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create form fields with UI interaction in Vue Pdfviewer component

The PDF viewer control provides the option for interaction with Form Fields such as Drag and resize. you can draw a Form Field dynamically by clicking the Form Field icon on the toolbar and draw it in the PDF document. The Form Fields type supported by the PDF Viewer Control are:

    * Textbox
    * Password
    * CheckBox
    * RadioButton
    * ListBox
    * DropDown
    * SignatureField
    * InitialField

## Enable or Disable form designer toolbar

We should inject FormDesigner module and set enableFormDesignerToolbar as true to enable the Form designer icon on the toolbar. By default, enableFormDesignerToolbar is set as true. Use the following code to inject FormDesigner module and to enable the enableFormDesignerToolbar property.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath"
            :enableFormDesignerToolbar= "false">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]}

}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath"
            :serviceUrl="serviceUrl"
            :enableFormDesignerToolbar= "false">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]}

}
</script>
{% endhighlight %}
{% endtabs %}

## Add the form field dynamically

Click the Form Field icon on the toolbar and then click on to the PDF document to draw a Form Field. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/addformfield.gif)

## Drag the form field

We provide options to drag the Form Field which is currently selected in the PDF document. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/dragformfield.gif)

## Resize the form field

We provide options to resize the Form Field which is currently selected in the PDF document. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/resizeformfield.gif)

## Edit or Update the form field dynamically

The properties of the Form Fields can be edited using the Form Field Properties window. It can be opened by selecting the Properties option in the context menu that appears on the right by clicking the Form Field object. Refer the below image for the properties available to customize the appearance of the Form Field.

![Alt text](../../../pdfviewer/images/generalproperties.png)

![Alt text](../../../pdfviewer/images/appearanceproperties.png)

![Alt text](../../../pdfviewer/images/dropdownproperties.png)

## Clipboard operation with form field

The PDF Viewer control supports the clipboard operations such as cut, copy and paste for Form Fields. You can right click on the Form Field object to view the context menu and select to the clipboard options that you would like to perform. Refer the below image for the options in the context menu.

![Alt text](../../../pdfviewer/images/clipboardformfield.png)

## Undo and Redo

We provided support to undo/redo the Form Field actions that are performed at runtime. Use the following code example to perform undo/redo actions.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
      <button v-on:click="undoClicked">Undo</button>
      <button v-on:click="redoClicked">Redo</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},

  methods: {
    undoClicked: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.undo();
    },
    redoClicked: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.redo();
    },
  }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
    <div id="app">
      <button v-on:click="undoClicked">Undo</button>
      <button v-on:click="redoClicked">Redo</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},

  methods: {
    undoClicked: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.undo();
    },
    redoClicked: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.redo();
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}