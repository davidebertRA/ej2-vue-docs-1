---
layout: post
title: Select annotation in Vue Pdfviewer component | Syncfusion
description: Learn here all about Select annotation in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Select annotation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Select annotation in Vue Pdfviewer component

The PDF Viewer library allows you to select an annotation from a PDF document. Selecting an annotation can be done using the `selectAnnotation()` method. This method is used to select an annotation using its id.

The following steps are used to select an annotation from a PDF Document.

**Step 1:** Follow the steps provided in this [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** The following code sample represents how to select an annotation in a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
     <button v-on:click="selectAnnotation">SelectAnnotation</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);


export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    selectAnnotation: function() {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      // Unload the PDF document.
      viewer.annotationModule.selectAnnotation(viewer.annotationCollection[0].annotationId);
    }
  }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
  <div id="app">
     <button v-on:click="selectAnnotation">SelectAnnotation</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :serviceUrl="serviceUrl"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);


export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    selectAnnotation: function() {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      // Unload the PDF document.
      viewer.annotationModule.selectAnnotation(viewer.annotationCollection[0].annotationId);
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

```

<button id="selectAnnotation">SelectAnnotation</button>

<script>
    //Event triggers when you click the SelectAnnotation button.
    document.getElementById('selectAnnotation').addEventListener('click', () => {
        //API to select the annotation
        viewer.annotationModule.selectAnnotation(viewer.annotationCollection[0].annotationId);
    });
</script>

```

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Annotations/Interaction%20with%20annotations)