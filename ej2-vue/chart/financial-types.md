---
layout: post
title: Financial types in Vue Chart component | Syncfusion
description: Learn here all about Financial types in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Financial types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Financial types in Vue Chart component

Financial charts are used to illustrate the movements in the price of a financial instrument over time.

Chart supports the following financial series

<!-- markdownlint-disable MD036 -->

## Hilo

Hilo Series illustrates the price movements in stock using the high and low values. To render a Hilo series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Hilo` and inject `HiloSeries` into the `provide`.

Hilo series requires 3 fields (x, high and low) to show the high and low price in the stock.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/hilo-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hilo-cs1" %}

## High Low Open Close

HiloOpenClose series is used to represent the low, high, open and closing values over time.
To render a HiloOpenClose series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `HiloOpenClose` and
inject `HiloOpenCloseSeries` into the `provide`.

HiloOpenClose series requires 5 fields (x, high, low, open and close) to show the high, low, open and close price values in the stock.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/hiloopenclose-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs1" %}

### Customization of HiloOpenClose Series

In HiloOpenClose series, [`bullFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#bearfillcolor) is used to fill the
segment when the open value is greater than the close value and [`bearFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#bearfillcolor) is used to fill the segment when the open value is less than the close value.

By default, bullFillColor is set as red and bearFillColor is set as green.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/hiloopenclose-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs2" %}

## Candle

Candle series are similar to Hilo Open Close series, are used to represent the low, high, open and closing price over time. To render a candle series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Candle` and inject `CandleSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/candle-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/candle-cs1" %}

**Hollow Candles**

Candle charts allow to visually compare the current price with previous price by customizing the appearance.

Candles are filled/left as hollow based on the following criteria.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>States</b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>Filled</td>
<td>candle sticks are filled when the close value is lesser than the open value</td>
</tr>
<tr>
<td>Unfilled</td>
<td>candle sticks are unfilled when the close value is greater than the open value</td>
</tr>
</table>

The color of the candle will be defined by comparing with previous values.

Bear color  will be applied when the current closing value is greater than the previous closing value.
Bull color will be applied when the current closing value is less than the previous closing value.

By default, bullFillColor is set as red and bearFillColor is set as green.

**Solid Candles**

[`enableSolidCandles`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#enablesolidcandles) is used to enable/disable the solid
candles. By default is set to be false. The fill color of the candle will be defined by its opening and closing values.

[`bearFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#bearfillcolor) will be applied when the opening value is less than the closing value.
[`bullFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#bullfillcolor) will be applied when the opening value is greater than closing value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/candle-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/candle-cs2" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)