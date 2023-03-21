---
layout: post
title: Getting started vue 3 with Vue Linear gauge component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Linear gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Linear Gauge component in Vue 3

This section explains how to use Linear Gauge component in Vue 3 application.

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

```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Vue 3 Terminal](./images/vue3-terminal.png)

## Adding Syncfusion Linear Gauge package in the application

Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The Linear Gauge component will be used in this example. To install it in the **quickstart** folder use the following command.

```bash
npm install @syncfusion/ej2-vue-lineargauge --save
```

## Adding Syncfusion Linear Gauge component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Linear Gauge component using following steps.

**1.** Import the Linear Gauge component in the `<script>` section of the `src/App.vue` file.

```
<script>
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-lineargauge'
</script>
```

**2.** Register the Linear Gauge component along with the required child directives which are used in this example. Find the list of child directives and the tag names that can be used in the Linear Gauge component in the following table.
  
| Directive Name     | Tag Name    |
|--------------------|-------------|
| `AxesDirective`    | `e-axes`    |
| `AxisDirective`    | `e-axis`    |
| `PointersDirective`| `e-pointers`|
| `PointerDirective` | `e-pointer` |
| `RangesDirective`  | `e-ranges`  |
| `RangeDirective`   | `e-range`   |

```js
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-lineargauge'
//Component registeration.
export default {
    name: "App",
    components: {
      'ejs-lineargauge' : LinearGaugeComponent,
      'e-axes' : AxesDirective,
      'e-axis' : AxisDirective,
      'e-pointers': PointersDirective,
      'e-pointer' : PointerDirective,
      'e-ranges' : RangesDirective,
      'e-range' : RangeDirective
    }
}

```

In the above code snippet, you have registered Linear Gauge and the directives for axis, pointer and range. Axis directives are used to define the axis settings for the Linear Gauge component. Pointer and range directives are used to define the properties of pointer and  range respectively.
  
**3.** Add the component definition in template section.

```
<template>
    <ejs-lineargauge :title ='title' orientation='Horizontal'>
        <e-axes>
            <e-axis minimum=0 maximum=200>
                <e-pointers>
                    <e-pointer value=140 color='red'></e-pointer>
                </e-pointers>
                <e-ranges>
                    <e-range start=0 end=80 startWidth=15 endWidth=15></e-range>
                    <e-range start=80 end=120 startWidth=15 endWidth=15></e-range>
                    <e-range start=120 end=140 startWidth=15 endWidth=15></e-range>
                    <e-range start=140 end=200 startWidth=15 endWidth=15></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>
</template>

```

Above is the Linear Gauge component definition with `title` and `orientation` properties and definitions for axis, pointer and range.

**4.** Declare the bound properties in the `script` section.

```js
  data: function () {
      return {
          title: 'Linear Gauge',
      }
  }

```

**5.** Summarizing the above steps, update the `src/App.vue` file with following code.

```
<template>
    <ejs-lineargauge :title ='title' orientation='Horizontal'>
        <e-axes>
            <e-axis minimum=0 maximum=200>
                <e-pointers>
                    <e-pointer value=140 color='red'></e-pointer>
                </e-pointers>
                <e-ranges>
                    <e-range start=0 end=80 startWidth=15 endWidth=15></e-range>
                    <e-range start=80 end=120 startWidth=15 endWidth=15></e-range>
                    <e-range start=120 end=140 startWidth=15 endWidth=15></e-range>
                    <e-range start=140 end=200 startWidth=15 endWidth=15></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>
</template>

<script>
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-lineargauge'

export default {
  name: 'App',
  components: {
    'ejs-lineargauge' : LinearGaugeComponent,
    'e-axes' : AxesDirective,
    'e-axis' : AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer' : PointerDirective,
    'e-ranges' : RangesDirective,
    'e-range' : RangeDirective
  },
  data: function () {
      return {
          title: 'Linear Gauge',
      }
  }
}
</script>

```

**6.** Run the application using the following command.

```bash
npm run serve
```

The web server will be initiated and open the **quickstart** app in the browser at port `localhost:8080`.

![Output](./images/vue3-lg-demo.png)

Refer the following sample, [vue3-lineargauge-getting-started](https://github.com/SyncfusionExamples/vue3-lineargauge-getting-started).
