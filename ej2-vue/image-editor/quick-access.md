---
layout: post
title: Quick Access Toolbar in Vue Image editor component | Syncfusion
description: Learn here all about Quick Access in Syncfusion Vue Image editor component of Syncfusion Essential JS 2 and more.
control: Quick Access
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Quick access toolbar in the Vue Image Editor component

The quick access toolbars in the Vue Image Editor play a vital role in facilitating interactions with annotations like Rectangle, Ellipse, Line, Arrow, and Path. These toolbars offer a diverse array of tools and options that can be tailored to match the specific requirements and preferences associated with each annotation type. The toolbar is only displayed when an annotation is selected, ensuring a focused and contextual user experience. Users have the flexibility to add or remove items from the toolbar, allowing them to create a personalized set of tools. Additionally, users can also build a completely custom toolbar from the ground up, providing them with complete control over the available options and functionality. 

## Add a custom toolbar item

The quick access toolbar that appears when inserting annotations in the Image Editor is customizable using the [`quickAccessToolbarOpen`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#quickaccesstoolbaropen) event. This event is triggered when the quick access toolbar is opened, allowing you to modify its contents. To add additional toolbar items to the quick access toolbar, you can access the toolbarItems property of the QuickAccessToolbarEventArgs within the event handler. By adding or removing items from the toolbarItems property based on the item property, you can customize the options available in the quick access toolbar according to your needs. This gives you the ability to extend the functionality of the quick access toolbar and provide additional tools and options for working with inserted annotations. 

Here is an example of adding the custom toolbar item to the quick access toolbar. 

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs32" %}