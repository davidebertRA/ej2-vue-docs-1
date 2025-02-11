---
layout: post
title: Tool tip in Vue Accumulation chart component | Syncfusion
description: Learn here all about Tool tip in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in Vue Accumulation chart component

Tooltip for the accumulation chart can be enabled by using the `enable` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs27" %}

>Note: To use tooltip feature, inject the `AccumulationTooltip` into the `provide`.

## Header

We can specify header for the tooltip using `header` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs28" %}

## Format

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs29" %}

## Tooltip Template

Any HTML element can be displayed in the tooltip by using the `template` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs30" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#fill) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#textstyle)
property in the tooltip is used to customize the font of the tooltip text. The [`highlightColor`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationChartModel/#highlightcolor) property can be used to change the color of the data point when hovering.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs31" %}

## To customize individual tooltip

Using `tooltipRender` event, you can customize a tooltip for particular point. event, you can customize a tooltip for particular point.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs32" %}

## Tooltip Mapping Name

By default, tooltip shows information of x and y value in points. You can show more information from datasource in tooltip by using the `tooltipMappingName` property of the tooltip. You can use the `${point.tooltip}` as place holders to display the specified tooltip content.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs33" %}