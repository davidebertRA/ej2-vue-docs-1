---
layout: post
title: Virtualization in Vue Auto complete component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Vue Auto complete component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in AutoComplete Component

AutoComplete virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.
 
During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [enableVirtualization](../api/auto-complete/#enableVirtualization) option in a AutoComplete activates this virtualization technique.
 
When fetching data from the data source, the [actionBegin](../api/auto-complete/#actionbegin) event is triggered before data retrieval begins. Then, the [actionComplete](../api/auto-complete/#actioncomplete) event is triggered once the data is successfully fetched.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/virtual-scroll/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/virtual-scroll" %}

## Limitation of virtualization

* Virtualization is not supported in the grouping feature.
* Virtual scrolling in a AutoComplete control may not perform optimally when users attempt to interact with the component using the down and up arrow keys while the dropdown popup is closed.