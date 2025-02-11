---
layout: post
title: Range Step Area in Vue Chart component | Syncfusion
description: Learn here all about Range Step Area in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Range Step Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Range Step Area in Vue Chart Component

## Range Step Area

To render a range step area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `RangeStepArea` and inject `RangeStepAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs11" %}

## Series customization

The following properties can be used to customize the `range step area` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs12" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)