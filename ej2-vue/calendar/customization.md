---
layout: post
title: Customization in Vue Calendar component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Calendar component

Each day cell of the Calendar can be customized by using the [`renderDayCell`](https://ej2.syncfusion.com/vue/documentation/api/calendar/renderDayCellEventArgs)
event.

The following section demonstrates how to disable or highlight specific dates in the Calendar.

## Disable weekends

You can disable weekends of every month in the Calendar by using the [`renderDayCell`](https://ej2.syncfusion.com/vue/documentation/api/calendar/renderDayCellEventArgs) event. The `renderDayCell` event offers the following arguments on each day cell creation to help you disable the dates.

| **View** | **Description** |
| --- | --- |
| `date` | Defines the current date of the Calendar. |
| `isDisabled` | Specifies whether the current date is to be disabled or not. |
| `isOutOfRange` | Defines whether the current date is out of range or not. |

The following example demonstrates how to disable weekends of every month.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/calendar/min-max-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs4" %}

## Day cell format

You can also highlight specific dates by adding custom CSS or element to the day cell by using the [`renderDayCell`](https://ej2.syncfusion.com/vue/documentation/api/calendar/renderDayCellEventArgs) event. You can customize the appearance of the Calendar by overriding the existing styles. The following list of CSS class names are used to customize the Calendar component.

| **Class Name** | **Description** |
| --- | --- |
| e-calendar | Applied to the Calendar. |
| e-header | Applied to the header.|
| e-title |Applied to the title. |
| e-icon-container | Applied to the previous and next icon container.|
| e-prev |  Applied  to the previous icon.|
| e-next | Applied to the next icon.|
| e-weekend | Applied to weekends.|
| e-other-month |  Applied to days of other months.|
| e-day | Applied to each day cell.|
| e-selected | Applied to the selected dates.|
| e-disabled | Applied to the disabled dates.|

The following example highlights the World Health Day (every 7th April) and World Forest Day (every 21st March) by using the custom icon and ToolTip.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/calendar/min-max-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs5" %}

## Highlight Weekends

You can highlight the weekends of every month in a Calendar by using the [`renderDayCell`](https://ej2.syncfusion.com/vue/documentation/api/calendar/renderDayCellEventArgs) event. The following example demonstrates how to highlights the weekends of every month.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/calendar/highlight-weekend-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/highlight-weekend-cs1" %}

## See Also

* [Add the external button in the Calendar popup](./how-to/set-clear-button-in-calendar)
* [How to skip a month in Calendar](./how-to/skip-a-month-in-calendar)
* [How to change the first day of week](./how-to/change-the-first-day-of-week)
* [How to customize the calendar day header](./how-to/customize-the-calendar-day-header)