---
layout: post
title: Getting started with Vue Tab component | Syncfusion
description:  Checkout and learn about Getting started with Vue Tab component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains about how to create a simple **Tab** using VueJS and configure the Tab header content using Essential JS 2.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following is the list of dependencies required to use the Tab component in your application.

```javascript
|-- @syncfusion/ej2-vue-navigations
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-vue-base
  |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons

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
You can choose the component that you want to install. For this application, we are going to use Tab component.

To install Tab component, use the following command

```bash
npm install @syncfusion/ej2-vue-navigations –save
```

## Registering Vue Component

For Registering Vue Component two ways are available. They are as follows.
* Vue.use()
* Vue.component()

### Using Vue.use()

Import the Component Plugin from the EJ2 Vue Package and register the same using Vue.use() with Component Plugin as its argument.

Refer the code snippet given below.

```ts
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(TabPlugin);
```

> By Registering Component Plugin in Vue, all child directives are also globally registered.

### Using Vue.component()

Import the Component and Component Plugin from EJ2 Vue Package,
register the same using the Vue.component() with name of Component from ComponentPlugin
and the EJ2 Vue Component as its arguments.

Refer the code snippet given below.

```ts
import { TabComponent, TabPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.component(TabPlugin.name, TabComponent);
```

Note: By using Vue.component(), only the EJ2 Vue Component is registered. Child directives needs to be registered separately.

## Creating Vue Sample

Add the EJ2 Vue Tab using `<ejs-tab>` to the `<template>` section of the `App.vue` file in src directory,
the content attribute of the Tab component is provided as name in data option in the `<script>` section.

```
<template>
    <div id="app">
    <ejs-tab id='element'>
        <e-tabitems>
                    <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
                    <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
                    <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</template>
<script>
import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(TabPlugin);
export default {
  name: 'app',
   data: function(){
        return {

          headerText0: { text: 'ASP.NET' },
          headerText1: { text: 'ASP.NET MVC' },
          headerText2: { text: 'JavaScript' },

        content0: 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +
        'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +
        'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +
        'to Microsoft\'\s Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
        'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +
        'ASP.NET components to process SOAP messages.',

         content1: 'The ASP.NET MVC is a web application framework developed by Microsoft, which implements the ' +
        'model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is ' +
        'proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using ' +
        'only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.',

         content2: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as ' +
        'part of web browsers so that client-side scripts could interact with the user, control the browser, communicate ' +
        'asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in ' +
        'both game development and the creation of desktop applications.',

        }
   }
}
</script>
```

## Adding CSS Reference

Add Tab component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>
```

## Running the Application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/tab/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/getting-started-cs1" %}

## Initialize the Tab using HTML elements

The Tab component can be rendered based on the given HTML element using `<ejs-tab>` tag.
Header section must be enclosed with in a wrapper element using `e-tab-header` class and corresponding content must be mapped with `e-content` class.
You need to follow the below structure of HTML elements to render the Tab,

```

  <ejs-tab id="element">   --> Root Tab element
    <div class="e-tab-header">      --> Tab header
       <div>   --> Header Item
       </div>
    </div>
    <div class="e-content">      --> Tab content
       <div>   --> Content Item
       </div>
    </div>
  </ejs-tab>

```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/tab/tab-container-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-container-cs1" %}

## See Also

* [How to load tab with DataSource](./how-to/load-tab-with-data-source/)

N> You can refer to our [Vue Tab](https://www.syncfusion.com/vue-ui-components/vue-tabs) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Tab Component example](https://ej2.syncfusion.com/vue/demos/#/material/tab/default.html) that shows how to render the Tab in Vue.
