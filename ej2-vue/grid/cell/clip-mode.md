---
layout: post
title: Clip mode in Vue Grid component | Syncfusion
description: Learn here all about Clip mode in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Clip mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Clip mode in Vue Grid component

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#clipmode) property.

There are three types of [`clipMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#clipmode). They are:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area,also it will display the tooltip while hover on ellipsis is applied.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/cell/autowrap-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/autowrap-cs3" %}

>By default, [`columns.clipMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#clipmode) value is **Ellipsis**.