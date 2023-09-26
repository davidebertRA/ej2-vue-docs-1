---
layout: post
title: Exporting Vue Grid with Templates | Syncfusion
description: Learn here all about Exporting grids with templates in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Exporting grid with templates
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid with templates in Vue Grid control

The grid offers the option to export the column, detail, and caption templates to a PDF document. The template contains images, hyperlinks, and customized text.

## Exporting with column template

The PDF export functionality allows you to export Grid columns that include images, hyperlinks, and custom text to a PDF document.

In the following sample, the hyperlinks and images are exported to PDF using [hyperlink](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfQueryCellInfoEventArgs/#hyperlink) and [image](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfQueryCellInfoEventArgs/#image) properties in the [pdfQueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfquerycellinfo) event.

> PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/column-template-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/column-template-export-cs1" %}

![ColumnTemplateExport](../images/colTemp_pdf_expt.gif)

## Exporting with detail template

By default, the grid will export the parent grid with expanded detail rows alone. Change the exporting option by using the `PdfExportProperties.hierarchyExportMode` property. The available options are:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the parent grid with expanded detail rows. |
| All      | Exports the parent grid with all the detail rows. |
| None     | Exports the parent grid alone. |

The detail rows in the exported PDF can be customized or formatted using the [exportDetailTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#exportdetailtemplate) event. In this event, the detail rows of the PDF document are formatted in accordance with their parent row details.

In the following sample, the detail row content is formatted by specifying the [columnCount](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateProperties/#columncount), [columnHeader](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateProperties/#columnheader), and [rows](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateProperties/#rows) properties using its [parentRow](https://ej2.syncfusion.com/vue/documentation/api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows for the creation of detail rows in the PDF document. Additionally, custom styles can be applied to specific cells using the [style](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateCell/#style) property.

> If `columnCount` is not provided, the columns in the detail row of the PDF grid will be generated based on the count of the `columnHeader`/`rows` first row's [cells](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateRow/#cells).
> When using [rowSpan](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateCell/#rowspan), it is essential to provide the cell's [index](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateCell/#index) for proper functionality.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/detail-template-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/detail-template-export-cs1" %}

![DetailTemplateExport](../images/detailTemp_pdf_expt.gif)

## Exporting with caption template

The PDF export feature enables exporting of Grid with a caption template to an PDF document.

In the following sample, the customized caption text is exported to PDF using [captionText](https://ej2.syncfusion.com/vue/documentation/api/grid/exportGroupCaptionEventArgs/#captiontext) property in the [exportGroupCaption](https://ej2.syncfusion.com/vue/documentation/api/grid/#exportgroupcaption) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/caption-template-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/caption-template-export-cs1" %}

![CaptionTemplateExport](../images/captionTemp_pdf_expt.gif)