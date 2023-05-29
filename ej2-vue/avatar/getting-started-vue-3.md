---
layout: post
title: Getting started vue 3 with Vue Avatar component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Avatar component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Avatar Component in Vue 3

This section explains how to use Avatar component in Vue 3 application.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Creating Vue application using Vue CLI

The easiest way to create a Vue application is to use the [`Vue CLI`](https://github.com/vuejs/vue-cli). Vue CLI versions above [`4.5.0`](https://v3.vuejs.org/guide/migration/introduction.html#vue-cli) are mandatory for creating applications using Vue 3. Use the following command to uninstall older versions of the Vue CLI.

```bash
npm uninstall vue-cli -g
```

Use the following commands to install the latest version of Vue CLI.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Create a new project using the command below.

```bash
vue create quickstart
cd quickstart
```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion Avatar package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.
The Avatar component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-layouts --save
```

## Adding CSS reference for Syncfusion Vue Avatar component

Import the needed css styles for the  Avatar component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
</style>
```

## Adding Syncfusion Vue Avatar component in the application

You have completed all the necessary configurations needed  for rendering the Syncfusion Vue component. Now, you are going to add the Avatar component using following steps.

1. Add an HTML span element with `e-avatar` class into the `<template>` section of the `App.vue` file in `src` directory.

    ```
    <template>
      <div id='element'>
          <span class="e-avatar e-avatar-xlarge"></span>
          <span class="e-avatar e-avatar-large"></span>
          <span class="e-avatar"></span>
          <span class="e-avatar e-avatar-small"></span>
          <span class="e-avatar e-avatar-xsmall"></span>
      </div>
    </template>
    ```

2. Summarizing the above steps, update the `src/App.vue` file with following code.

    ```
    <template>
    <div id='element'>
        <span class="e-avatar e-avatar-xlarge"></span>
        <span class="e-avatar e-avatar-large"></span>
        <span class="e-avatar"></span>
        <span class="e-avatar e-avatar-small"></span>
        <span class="e-avatar e-avatar-xsmall"></span>
    </div>
    </template>

    <script>
    export default {
        name: "App"
    }
    </script>

    <style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";

    #element {
        display: block;
        width: 300px;
        margin: 130px auto;
        border-radius: 3px;
        justify-content: center;
    }

    /* Add your custom avatar image. */
    .e-avatar {
        background-image: url(https://ej2.syncfusion.com/vue/documentation/samples/avatar/media-formats-cs1/pic01.png);
        margin: 2px;
    }
    </style>

    ```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port `localhost:8080` .

![Output](./images/vue3-avatar-demo.PNG)
