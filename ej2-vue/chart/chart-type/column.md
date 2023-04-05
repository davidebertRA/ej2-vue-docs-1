---
layout: post
title: Column in Vue Chart component | Syncfusion
description: Learn here all about Column in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Column Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column Chart in Vue Chart Component

## Column

To render a column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Column` and inject `ColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs13" %}

## Column space and width

The [`columnSpacing`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnspacing) and [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnwidth) properties are used to customize the space between columns.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs23" %}

## Grouped column

You can use the [`groupName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#groupname) property to group the data points in the column type charts. Data points with same group name are grouped together.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/group-column-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/group-column-cs1" %}

## Series customization

The following properties can be used to customize the `column` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [Fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](../api/chart/borderModel/#properties) – Specifies the [Color](../api/chart/borderModel/#color) and [Width](../api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs18" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)