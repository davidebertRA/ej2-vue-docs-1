---
layout: post
title: Getting started with Vue Split button component | Syncfusion
description:  Checkout and learn about Getting started with Vue Split button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple SplitButton and to configure it.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the SplitButton component in your application is given as follows:

```js
|-- @syncfusion/ej2-vue-splitbuttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Installation and configuration

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue applications.
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

Install Syncfusion `SplitButton` packages using below command.

```bash
npm install @syncfusion/ej2-vue-splitbuttons --save
```

## Registering SplitButton component using `Vue.use()`

Import the SplitButton Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```javascript
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";

Vue.use(SplitButtonPlugin);

export default {}
```

> By registering component plugin in Vue, all child directives are also globally registered.
We can also use `Vue.Component()` to register `SplitButton`.
Refer [here](https://ej2.syncfusion.com/vue/documentation/base/getting-started/#registering-vue-component) to know more about component registration.

## Initialize SplitButton

Add the EJ2 Vue SplitButton using `<ejs-splitbutton>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
<ejs-splitbutton :items='items' content='Paste'></ejs-splitbutton>
</template>

<script>
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";

Vue.use(SplitButtonPlugin);

export default {
    data () {
        return {
            items:[
            {
                text: 'Cut'
            },
            {
                text: 'Copy'
            },
            {
                text: 'Paste'
            }]
        };
    }
}
</script>
```

## Adding CSS Reference

Add SplitButton component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic SplitButton component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/split-button/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs2" %}

## See Also

* [SplitButton with icons](./icons-and-separator#splitbutton-icons)