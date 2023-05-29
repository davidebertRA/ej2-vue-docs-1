---
layout: post
title: Accessibility in Vue Context menu component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue Context menu component

## ARIA attributes

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies. SplitButton provides built-in compliance with `WAI-ARIA` specifications. `WAI-ARIA` support is achieved through the attributes like `aria-expanded`, `aria-owns` and `aria-haspopup` applied for action item in SplitButton. It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. SplitButton component contains the  `menuItem` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| menuItem | This role will be specified for an action items. |
| aria-haspopup | Indicates the availability and type of interactive splitbutton popup element. |
| aria-expanded | Indicates whether the splitbutton popup can be expanded or collapsed, as well as indicates whether its current state is expanded or collapsed. |
| aria-owns | Identifies an elements in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. |

## Keyboard interaction

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Esc</kbd></td><td>
Closes the opened popup.</td></tr>
<tr>
<td>
<kbd>Enter</kbd></td><td>
Opens the popup, or activates the highlighted item and closes the popup.</td></tr>
<tr>
<td>
<kbd>Space</kbd></td><td>
Opens the popup.</td></tr>
<tr>
<td>
<kbd>Up</kbd></td><td>
Navigates up or to the previous action item.</td></tr>
<tr>
<td>
<kbd>Down</kbd></td><td>
Navigates down or to the next action item.</td></tr>
<tr>
<td>
<kbd>Alt + Up Arrow</kbd></td><td>
Opens the popup.</td></tr>
<tr>
<td>
<kbd>Alt + Down Arrow</kbd></td><td>
Closes the popup.</td></tr>
</table>

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs1" %}
