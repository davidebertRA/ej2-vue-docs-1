---
layout: post
title: Customization using cssclass in Vue Daterangepicker component | Syncfusion
description: Learn here all about Customization using cssclass in Syncfusion Vue Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Customization using cssclass 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization using cssclass in Vue Daterangepicker component

To customize UI, you can make use of [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker#cssclass) that will be added to the DateRangePicker component as the root CSS class. With this CSS class, you can override existing styles of DateRangePicker.

Following is the list of classes that provides flexible way to customize the DateRangePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-date-range-wrapper | Applied to DateRangePicker wrapper. |
| e-range-icon | Applied to DateRangePicker icon. |
| e-popup | Applied to DateRangePicker popup wrapper.|
| e-calendar | Applied to both Calendar element. |
| e-right-calendar | Applied to right Calendar element. |
| e-left-calendar | Applied to left Calendar element. |
| e-start-label | Applied to start label in a popup. |
| e-end-calendar | Applied to end label in a popup. |
| e-day-span | Applied to day span details label in a popup. |
| e-footer | Applied to footer elements in a popup. |
| e-apply | Applied to apply button in footer in a popup. |
| e-cancel | Applied to cancel button in footer in a popup. |
| e-header | Applied to Calendar header.|
| e-title |Applied to Calendar title. |
| e-icon-container | Applied to Calendar previous and next icon container.|
| e-prev |  Applied to Calendar previous icon.|
| e-next | Applied to Calendar next icon.|
| e-weekend | Applied to Calendar weekend dates.|
| e-other-month |  Applied to Calendar other month dates.|
| e-day | Applied to each day cell of the Calendar.|
| e-selected | Applied to Calendar selected dates.|
| e-disabled | Applied to Calendar disabled dates.|

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs7" %}