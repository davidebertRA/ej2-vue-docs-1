---
layout: post
title: Load N number of pages on initial loading in Vue Pdfviewer component | Syncfusion
description: Learn here all about Load N number of pages on initial loading in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Load N number of pages on initial loading
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Load N number of pages on initial loading

The initial rendering in a PDF viewer allows users to control the number of pages displayed when opening a PDF document. This improves the user experience by providing flexibility in loading a specific number of pages initially, while additional pages are dynamically rendered as the user scrolls through the document. This approach enhances the responsiveness of the PDF viewer and minimizes delays as users can access specific pages without waiting for the entire document to load.

To utilize this capability in Syncfusion PDF Viewer, use the `initialRenderPages` property. You can achieve the desired outcome by setting this property to the desired number of pages you want to load initially. However, it's important to exercise caution when setting a high value for the initialRenderPages in large documents with numerous pages. Rendering a large number of pages simultaneously can increase memory usage and slow down loading times, impacting the performance of the PDF viewer.

Using the `initialRenderPages` property judiciously is advisable, especially when dealing with larger documents. It is more suitable for scenarios where a smaller range of pages, such as 10-20, can be loaded to provide a quick initial view of the document.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :initialRenderPages="initialRenderPages"  >
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
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      initialRenderPages : 10
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

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
        :initialRenderPages="initialRenderPages"  >
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
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://services.syncfusion.com/vue/production/api/pdfviewer",
      initialRenderPages : 10
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

}
</script>
{% endhighlight %}
{% endtabs %}

```

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      :initialRenderPages="initialRenderPages"  >
    </ejs-pdfviewer>
  </div>
</template>

<script>

import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         Annotation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
  Vue.use(PdfViewerPlugin);

  export default {
    name: 'app',
    data() {
      return {
        serviceUrl: "https://services.syncfusion.com/vue/production/api/pdfviewer",
        documentPath: "PDF_Succinctly.pdf",
        initialRenderPages : 10
      };
    },

    provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},
  }

</script>

```

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/Load%20N%20number%20of%20pages%20on%20initial%20loading)