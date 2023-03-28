---
layout: post
title: Context menu in Vue Grid component | Syncfusion
description: Learn here all about Context menu in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Vue Grid component

The Grid has options to show the context menu when right clicked on it. To enable this feature, you need to define either default or custom item in the [`contextMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/grid/#contextmenuitems).

To use the context menu, inject the **ContextMenu** module in the **provide** section.

The default items are in the following table.

Items| Description
----|----
`AutoFit`|  Auto fit the current column.
`AutoFitAll` | Auto fit all columns.
`Edit`|  Edit the current record.
`Delete` | Delete the current record.
`Save` | Save the edited record.
`Cancel` | Cancel the edited state.
`Copy` | Copy the selected records.
`PdfExport` | Export the grid data as Pdf document.
`ExcelExport` | Export the grid data as Excel document.
`CsvExport` | Export the grid data as CSV document.
`Group` | Group the current column.
`Ungroup` | Ungroup the current column.
`SortAscending` | Sort the current column in ascending order.
`SortDescending` | Sort the current column in descending order.
`FirstPage` | Go to the first page.
`PrevPage` | Go to the previous page.
`LastPage` | Go to the last page.
`NextPage` | Go to the next page.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/contextMenu/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/contextMenu/default-cs1" %}

## Custom context menu items

The custom context menu items can be added by defining the [`contextMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/grid/#contextmenuitems) as a collection of [`contextMenuItemModel`](https://ej2.syncfusion.com/vue/documentation/api/grid/contextMenuItemModel/). Actions for this customized items can be defined in the [`contextMenuClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#contextmenuclick) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/contextMenu/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/contextMenu/default-cs2" %}

## Show context menu on left click

By default, the context menu items will be shown in the Grid using the right mouse click action. Show the context menu items during the left mouse click action using the [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) and context menu's `beforeOpen` events of the Grid.

Using the `onclick` eventlistener of Grid , you can get the clicked position values and send them to the `open` method of the context menu in the `onclick` event of the Grid. Also, we have prevented the default right click action to open the context menu items using the [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event of the Grid.

This is demonstrated in the following sample.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/contextMenu/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/contextMenu/default-cs3" %}

> You can hide or show an item in context menu for specific area inside of grid by defining the [`target`](https://ej2.syncfusion.com/vue/documentation/api/grid/contextMenuItemModel/#target) property.

## Enable or disable context menu items

It is possible to enable or disable the default and custom context menu items in the Grid component. This is achieved by using the [enableItems](https://ej2.syncfusion.com/vue/documentation/api/context-menu/#enableitems) method of the ContextMenu. To enable or disable menu items, set the `enable` parameter in the `enableItems` method to true, and vice versa.

In the following sample, the Copy item is enabled or disabled based on some condition (as per the needs of the application) in the [rowSelected](https://ej2.syncfusion.com/vue/documentation/api/grid#rowselected) event of the Grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/contextMenu/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/contextMenu/default-cs4" %}