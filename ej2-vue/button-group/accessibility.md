---
layout: post
title: Accessibility in Vue Button group component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Vue Button group component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue Button group component

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies. ButtonGroup provides built-in compliance with `WAI-ARIA` specifications. It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. ButtonGroup component contains the `group` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Indicates the `group` for the container that holds two or more buttons. |

## Keyboard interaction

### Normal behavior

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Keyboard shortcuts</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td><kbd>Tab</kbd></td>
<td>Focuses the next button in the ButtonGroup.</td>
</tr>
<tr>
<td><kbd>Enter/Space</kbd></td>
<td>Activates the focussed button in the ButtonGroup.</td>
</tr>
</table>

### Checkbox behavior

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Keyboard shortcuts</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td><kbd>Tab</kbd></td>
<td>Focuses the next button in the ButtonGroup.</td>
</tr>
<tr>
<td><kbd>Space</kbd></td>
<td>Activates the focussed button in the ButtonGroup.</td>
</tr>
</table>

### Radiobutton behavior

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Keyboard shortcuts</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td><kbd>Tab</kbd></td>
<td>Focuses the active button in the ButtonGroup.</td>
</tr>
<tr>
<td><kbd>Arrow Keys</kbd></td>
<td>Activates next/previous button in the ButtonGroup.</td>
</tr>
</table>

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button-group/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs1" %}