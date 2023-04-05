---
layout: post
title: Bar in Vue Chart component | Syncfusion
description: Learn here all about Bar Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Bar Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Bar Chart in Vue Chart Component

## Bar

To render a bar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Bar` and inject `BarSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs1" %}

##  Bar space and width

The [`columnSpacing`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnspacing) and [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnwidth) properties are used to customize the space between bars.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs" %}

## Grouped Bar

You can use the [`groupName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#groupname) property to group the data points in the bar type charts. Data points with same group name are grouped together.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/group-bar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/group-bar-cs1" %}

## Series customization

The following properties can be used to customize the `bar` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [Fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](../api/chart/borderModel/#properties) – Specifies the [Color](../api/chart/borderModel/#color) and [Width](../api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs5" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)