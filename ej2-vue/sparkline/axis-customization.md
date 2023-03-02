---
layout: post
title: Axis customization in Vue Sparkline component | Syncfusion
description: Learn here all about Axis customization in Syncfusion Vue Sparkline component of Syncfusion Essential JS 2 and more.
control: Axis customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in Vue Sparkline component

You can customize axis value types and min and max values of the sparkline.

## Change value type of the sparkline

You can change the sparkline value type by setting the [`valueType`] property to [`Numeric`], [`Category`], or [`DateTime`].
<!-- markdownlint-disable MD036 -->

### DateTime

You can assign date-time values to the sparkline by setting the [`valueType`] property to [`DateTime`].

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs5" %}
<!-- markdownlint-disable MD036 -->

### Category

You can assign category values to the sparkline by setting [`valueType`] to [`Category`].

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs6" %}

### Numeric

You can assign numeric values to the sparkline by setting the [`valueType`] to [`Numeric`].

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs7" %}
<!-- markdownlint-disable MD036 -->

## Change min and max values of axis

You can change the min and max values of x-axis by setting the [`minX`] and [`maxX`] values to the [`axisSettings`] property. You can also change the min and max values of y-axis by setting the [`minY`] and [`maxY`] values to the [`axisSettings`] property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs8" %}

## Change value of axis

You can set horizontal axis line value of the sparkline by setting [`value`] to the [`axisSettings`] property. The following code example shows this.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs9" %}

## Axis line customization

Axis of the sparkline can be collapsed using the [`visible`] property in [`lineSettings`]; this is not applicable for win-loss. You can customize the [`color`], [`width`], [`opacity`], and [`dashArray`] of axis line.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs10" %}