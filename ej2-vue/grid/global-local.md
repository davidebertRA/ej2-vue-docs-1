---
layout: post
title: Global local in Vue Grid component | Syncfusion
description: Learn here all about Global local in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Global local 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Global local in Vue Grid component

## Localization

The `Localization` library allows you to localize default text content of the Grid. The grid component has static text on some features (like group drop area text, pager information text, etc.) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/grid/#locale) value and translation object.

The following list of properties and its values are used in the grid.

Locale key words |Text
-----|-----
EmptyRecord | No records to display
True | true
False | false
InvalidFilterMessage | Invalid Filter Data
GroupDropArea | Drag a column header here to group its column
UnGroup | Click here to ungroup
GroupDisable | Grouping is disabled for this column
FilterbarTitle | \s filter bar cell
EmptyDataSourceError | DataSource must not be empty at initial load since columns are generated from dataSource in AutoGenerate Column Grid
Add | Add
Edit| Edit
Cancel| Cancel
Update| Update
Delete | Delete
Print | Print
Pdfexport | PDF Export
Excelexport | Excel Export
Wordexport | Word Export
Csvexport | CSV Export
Search | Search
Columnchooser | Columns
Save | Save
Item | item
Items | items
EditOperationAlert | No records selected for edit operation
DeleteOperationAlert | No records selected for delete operation
SaveButton | Save
OKButton | OK
CancelButton | Cancel
EditFormTitle | Details of
AddFormTitle | Add New Record
BatchSaveConfirm | Are you sure you want to save changes?
BatchSaveLostChanges | Unsaved changes will be lost. Are you sure you want to continue?
ConfirmDelete | Are you sure you want to Delete Record?
CancelEdit | Are you sure you want to Cancel the changes?
ChooseColumns | Choose Column
SearchColumns | search columns
Matchs | No Matches Found
FilterButton | Filter
ClearButton | Clear
StartsWith | Starts With
EndsWith | Ends With
Contains | Contains
Equal | Equal
NotEqual | Not Equal
LessThan | Less Than
LessThanOrEqual | Less Than Or Equal
GreaterThan | Greater Than
GreaterThanOrEqual | Greater Than Or Equal
ChooseDate | Choose a Date
EnterValue | Enter the value
Copy | Copy
Group | Group by this column
Ungroup | Ungroup by this column
autoFitAll | AutoFit all columns
autoFit | AutoFit this column
Export | Export
FirstPage | First Page
LastPage | Last Page
PreviousPage | Previous Page
NextPage | Next Page
SortAscending | Sort Ascending
SortDescending | Sort Descending
EditRecord | Edit Record
DeleteRecord | Delete Record
FilterMenu | Filter
SelectAll | Select All
Blanks | Blanks
FilterTrue | True
FilterFalse | False
NoResult | No Matches Found
ClearFilter | Clear Filter
NumberFilter | Number Filters
TextFilter | Text Filters
DateFilter | Date Filters
MatchCase | Match Case
Between | Between
CustomFilter | Custom Filter
CustomFilterPlaceHolder | Enter the value
CustomFilterDatePlaceHolder | Choose a date
AND | AND
OR | OR
ShowRowsWhere | Show rows where:
currentPageInfo | {0} of {1} pages
totalItemsInfo | ({0} items)
totalItemInfo | ({0} item)
firstPageTooltip | Go to first page
lastPageTooltip | Go to last page
nextPageTooltip | Go to next page
previousPageTooltip | Go to previous page
nextPagerTooltip | Go to next pager items
previousPagerTooltip | Go to previous pager items
pagerDropDown | Items per page
pagerAllDropDown | Items
All | All

### Loading translations

To load translation object in an application use `load` function of `L10n` class.

The below example demonstrates the Grid in `Deutsch` culture.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/default-cs5" %}

## Internationalization

The `Internationalization` library is used to globalize number, date, and time values in grid component using format strings in the [`columns.format`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#format).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/default-cs6" %}

> * In the above sample, `Freight` column is formatted by `NumberFormatOptions`.
> * By default, [`locale`](https://ej2.syncfusion.com/vue/documentation/api/grid/#locale) value is `en-US`. If you want to change `en-US` culture, then set the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/grid/#locale).

## Right to Left - RTL

RTL provides an option to switch the text direction and layout of Grid component from right to left.It improves the user experiences and accessibility for users who use right-to-left languages(Arabic, Farsi, Urdu, etc). To enable RTL in the Grid, set the [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablertl) to true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/default-cs7" %}

## See Also

* [How to apply CHF currency format in a column in Vue Grid](https://www.syncfusion.com/forums/147456/how-to-apply-chf-currency-format-in-a-column-in-vue-grid)
* [Filter the value with locale and custom format the Vue Grid](https://www.syncfusion.com/forums/165960/filter-the-value-with-locale-and-custom-format-the-vue-grid)
* [How to customize edit dialog button in Vue Grid](https://www.syncfusion.com/forums/166131/how-to-customize-edit-dialog-button-in-vue-grid)