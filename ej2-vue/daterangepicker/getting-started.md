---
layout: post
title: Getting started with Vue Daterangepicker component | Syncfusion
description:  Checkout and learn about Getting started with Vue Daterangepicker component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple DateRangePicker and how to configure the DateRangePicker component.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the DateRangePicker component in your application is given below:

```javascript
|-- @syncfusion/ej2-vue-calendars
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-data
  |-- @syncfusion/ej2-vue-base
  |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-inputs
       |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Get Started with Vue CLI

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.

To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. You can choose the component that you want to install. For this application, we are going to use DateRangePicker component.

To install DateRangePicker component, use the following command

```bash
npm install @syncfusion/ej2-vue-calendars --save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package, register the same using the Vue.component() with name of Component from ComponentPlugin and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { DateRangePickerComponent, DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.component(DateRangePickerPlugin.name, DateRangePickerComponent);
```

> By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue Sample

Add the EJ2 Vue DateRangePicker using `<ejs-daterangepicker>` to the `<template>` section of the `App.vue` file in src directory, the content attribute of the DateRangePicker component is provided as name in data option in the `<script>` section.

```
<template>
    <div id="app">
    <ejs-daterangepicker :placeholder="waterMark" ></ejs-daterangepicker>
  </div>
</template>
<script>
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);
export default {
  name: 'app',
  data () {
    return {
      waterMark : 'Select a Range'
    }
  }
}
</script>
```

## Adding CSS Reference

To render the DateRangePicker component, need to import DateRangePicker and its dependent component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
</style>
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs5" %}

## Setting the start date and end date

The start and end date in a range can be defined with the help of startDate and endDate property. The following example demonstrates to set the start and end date on initializing the DateRangePicker. To know more about range restriction in DateRangePicker, please refer this [page](./range-restriction).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/min-max-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/min-max-cs1" %}

> You can refer to our [Vue DateRangePicker](https://www.syncfusion.com/vue-ui-components/vue-date-range-picker) feature tour page for its groundbreaking feature representations. You can also explore our [Vue DateRangePicker example](https://ej2.syncfusion.com/vue/demos/#/material/daterangepicker/default.html) that shows how to render the DateRangePicker in Vue.

## See Also

* [Render DateRangePicker with pre-defined ranges](./customization#preset-ranges)
* [Render DateRangePicker with specific culture](./globalization)
