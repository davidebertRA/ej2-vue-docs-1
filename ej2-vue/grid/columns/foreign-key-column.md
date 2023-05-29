---
layout: post
title: Foreign key column in Vue Grid component | Syncfusion
description: Learn here all about Foreign key column in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Foreign key column 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Foreign key column in Vue Grid component

Foreign key column can be enabled by using [`column.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#datasource), [`column.foreignKeyField`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield) and [`column.foreignKeyValue`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyvalue) properties.

* [`column.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#datasource) - Defines the foreign data.
* [`column.foreignKeyField`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield) - Defines the mapping column name to the foreign data.
* [`column.foreignKeyValue`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyvalue) - Defines the display field from the foreign data.

In the following example, `Employee Name` is a foreign column which shows `FirstName` column from foreign data.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/foreigncolumn-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/foreigncolumn-cs1" %}

> * For remote data, the sorting and grouping is done based on [`column.foreignKeyField`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield) instead of [`column.foreignKeyValue`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyvalue).
> * If [`column.foreignKeyField`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field).

## Use edit template in foreignkey column

By default, foreign key column uses dropdown component for editing. You can render other than the dropdown by using the [`column.edit`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property.

The following example demonstrates the way of using edit template in foreign column.

In the following example, The `Employee Name` is a foreign key column and while editing, AutoComplete component is rendered instead of DropDownList.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/foreignKey-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs1" %}

## Customize filter UI in foreignkey column

You can create your own filtering UI by using [`column.filter`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#filter) property.The following example demonstrates the way to create a custom filtering UI in the foreign column.

In the following example, The `Employee Name` is a foreign key column. DropDownList is rendered using Filter UI.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/foreignKey-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs2" %}

## Perform aggregation in foreignkey column

Default aggregations are not supported in a foreign key column. You can achieve aggregation for the foreign key column by using custom the aggregates. The following example demonstrates the way to achieve aggregation in foreign key column.

In the following example, The `Employee Name` is a foreign key column and the aggregation for the foreign column was calculated in customAggregateFn.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/foreignKey-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs3" %}

## Enable multiple foreign key columns

Multiple foreign key columns with editing options are enabled for the Vue Grid component.

In the following example, **Customer Name** and **Ship City** are foreign key columns that display the **ContactName** and **City** columns from foreign data.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/foreigncolumn-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/foreigncolumn-cs2" %}