---
layout: post
title: Time line in Vue Gantt component | Syncfusion
description: Learn here all about Time line in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Time line 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Time line in Vue Gantt component

In the Gantt component, timeline is used to represent the project duration as individual cells with defined unit and formats.

## Timeline view modes

Gantt contains the following in-built timeline view modes:

* Hour – Minute
* Day – Hour
* Week – Day
* Month – Week
* Year – Month

Timescale mode in the Gantt component can be defined using the [`timelineViewMode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineViewMode/) property, and you can define a timescale mode for the top tier and bottom tier using the [`topTier.unit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings/#unit) and [`bottomTier.unit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings/#unit) properties.

### Week timeline mode

In the `Week` timeline mode, the upper part of the schedule header displays the weeks, whereas the bottom half of the header displays the days. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/timeline-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs1" %}

### Month timeline mode

In the `Month` timeline mode, the upper part of the schedule header displays the months, whereas the bottom header of the schedule displays its corresponding weeks. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/timeline-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs2" %}

### Year timeline mode

In the `Year` timeline mode, the upper schedule header displays the years whereas, the bottom header displays its corresponding months. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/timeline-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs3" %}

### Day timeline mode

In the `Day` timeline mode, the upper part of the header displays the days whereas, the bottom schedule header displays its corresponding hours. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/timeline-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs4" %}

### Hour timeline mode

An `Hour` timeline mode tracks the tasks in minutes scale. In this mode, the upper schedule header displays hour scale and the lower schedule header displays its corresponding minutes.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/timeline-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs5" %}

## Week start day customization

In the Gantt component, you can customize the week start day using the [`weekStartDay`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/#weekstartday) property. By default, the [`weekStartDay`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/#weekstartday) is set to `0`, which specifies the Sunday as a start day of the week. But, you can customize the week start day by using the following code example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/timeline-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs6" %}

## Customize automatic timescale update action

In the Gantt component, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [`updateTimescaleView`](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/#updatetimescaleview) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/timeline-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs7" %}s