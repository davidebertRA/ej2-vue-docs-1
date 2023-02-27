---
layout: post
title: Getting started with Vue Switch component | Syncfusion
description:  Checkout and learn about Getting started with Vue Switch component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Switch, and configure its available functionalities in Vue, using Vue quickstart seed repository.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the Switch component in your application is given below:

```js
|-- @syncfusion/ej2-vue-buttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-vue-base
```

## Installation and configuration

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

Install Syncfusion `Switch` packages using below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

## Registering Switch component using `Vue.use()`

Import the Switch Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(SwitchPlugin);

export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Switch`. Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize Switch

Add the EJ2 Vue Switch using `<ejs-switch>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
  <ejs-switch checked=true></ejs-switch>
</template>

<script>
import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(SwitchPlugin);

export default {}
</script>
```

## Adding CSS Reference

Add Switch component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Switch.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/switch/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/switch/getting-started-cs2" %}

## Set text on Switch

Switch component has text support. This can be achieved by setting [`onLabel`](https://ej2.syncfusion.com/vue/documentation/api/switch#onlabel)
and [`offLabel`](https://ej2.syncfusion.com/vue/documentation/api/switch#offlabel) on Switch.

> Switch does not have text support for material themes, and does not support long custom text.
