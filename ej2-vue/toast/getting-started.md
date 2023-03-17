---
layout: post
title: Getting started with Vue Toast component | Syncfusion
description:  Checkout and learn about Getting started with Vue Toast component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains the steps required to create the toast component using VueJS and configure its properties. This section demonstrates the basic functions of the toast component in Vue environment.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the toast component in your application:

```js
|-- @syncfusion/ej2-vue-notifications
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-vue-base
```

## Get Started with Vue CLI

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

You can choose the component that you want to install. For this application, we are going to use Toast component.

To install Toast component, use the following command

```bash
npm install @syncfusion/ej2-vue-notifications --save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { ToastPlugin } from '@syncfusion/ej2-vue-notifications';

Vue.use(ToastPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package,
register the same using the Vue.component() with name of Component from ComponentPlugin
and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { ToastComponent, ToastPlugin } from '@syncfusion/ej2-vue-notifications';

Vue.component(ToastPlugin.name, ToastComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue Sample

Add the EJ2 Vue Tab using `<ejs-toast>` to the `<template>` section of the `App.vue` file in src directory,
the content attribute of the Toast component is provided as name in data option in the `<script>` section.

```
<template>
  <div id="app">
       <ejs-toast ref='defaultRef' title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?'></ejs-toast>
  </div>
</template>

<script>
import Vue from 'vue';
import { ToastPlugin } from '@syncfusion/ej2-vue-notifications';
Vue.use(ToastPlugin);
export default {
  name: 'app',
  mounted: function() {
      this.$refs.defaultRef.show();
  }
}
</script>
```

## Adding CSS Reference

Add Toast component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>
```

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toast/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/getting-started-cs1" %}

## See Also

* [Render different types of toast](./how-to/show-different-types-of-toast)

+N> You can refer to our [Vue Toast](https://www.syncfusion.com/vue-components/vue-toaster) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Toast Example](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/toast/default.html) that shows you how to render the Toast in Vue.