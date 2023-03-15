---
layout: post
title: Zooming in Vue Chart component | Syncfusion
description: Learn here all about Zooming in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Zooming 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in Vue Chart component

## Enable Zooming

Chart can be zoomed in three ways.

* Selection - By setting [`enableSelectionZooming`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#enableselectionzooming) property to true in `zoomSettings`, you can zoom the chart by using the rubber band selection.
* Mousewheel - By setting [`enableMouseWheelZooming`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#enablemousewheelzooming) property to true in `zoomSettings`, you can zoomin and zoomout the chart by scrolling the mouse wheel.
* Pinch - By setting  [`enablePinchZooming`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#enablepinchzooming) property to true in `zoomSettings`, you can zoom the chart through pinch gesture in touch enabled devices.

 >Pinch zooming is supported only in browsers that support multi-touch gestures. Currently IE11, Chrome and Opera

 browsers support multi-touch in desktop devices.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/zoom-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs2" %}

>Note: To use zooming feature, we need to inject `Zoom` into the `provide`.

After zooming the chart, a zooming toolbar will appear with `zoom`,`zoomin`, `zoomout`, `pan` and `reset` buttons.

Selecting the Pan option will allow to pan the chart and selecting the Reset option will reset the zoomed chart.

## Modes

The [`mode`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettings/#mode) property in zoomSettings specifies whether the chart is
allowed to scale along the horizontal axis or vertical axis. The default value of the mode is XY (both axis).

There are three types of mode.

* X - Allows us to zoom the chart horizontally.
* Y - Allows us to zoom the chart vertically.
* XY - Allows us to zoom the chart both vertically and horizontally.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/zoom-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs3" %}

## Toolbar

By default, zoomin, zoomout, pan and reset buttons will be displayed for zoomed chart. You can customize to show the desired options in the toolbar using the [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#toolbaritems) property. Also using the [`showToolbar`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#showtoolbar) property, you can show toolkit for zooming and panning the chart during initial rendering itself.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/zoom-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs4" %}

## Enable pan

Using [`enablePan`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettings/#enablepan) property you can able to pan the zoomed chart without help of toolbar items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs5" %}

## Eanble Scrollbar

Using [`enableScrollbar`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettings/#enablescrollbar) property, you can able to add scrollbar for zoomed chart. Using this scrollbar, you can pan or zoom the chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs6" %}

## Auto interval on zooming

By using [`enableAutoIntervalOnZooming`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/?no-cache=1#enableautointervalonzooming) property,
the axis interval will get calculated automatically with respect to the zoomed range.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs7" %}