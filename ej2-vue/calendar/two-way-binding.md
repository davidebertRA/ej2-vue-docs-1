---
layout: post
title: Two way binding in Vue Calendar component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Vue Calendar component

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one Calendar component, v-model will automatically update the value in the other Calendar.

The following example demonstrates how to set the `two-way-binding` in the Calendar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/calendar/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/two-way-cs1" %}