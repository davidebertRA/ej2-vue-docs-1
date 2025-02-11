---
layout: post
title: Types in Vue Chips component | Syncfusion
description: Learn here all about Types in Syncfusion Vue Chips component of Syncfusion Essential JS 2 and more.
control: Types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Types in Vue Chips component

The ChipList control has the following types.

* Input Chip
* Choice Chip
* Filter Chip
* Action Chip

## Input Chip

Input Chip holds information in compact form. It converts user input into chips.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chips/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs9" %}

## Choice Chip

Choice Chip allows you to select a single chip from the set of ChipList/ChipCollection. It can be enabled by setting the `selection` property to `Single`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chips/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs10" %}

## Filter Chip

Filter Chip allows you to select a multiple chip from the set of ChipList/ChipCollection. It can be enabled by setting the `selection` property to `Multiple`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chips/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs11" %}

## Action Chip

The Action Chip triggers the event like click or delete, which helps doing action based on the event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chips/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs12" %}

### Deletable Chip

Deletable Chip allows you to delete a chip from ChipList/ChipCollection. It can be enabled by setting the `enableDelete` property to `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chips/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs13" %}