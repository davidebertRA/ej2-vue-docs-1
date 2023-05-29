---
layout: post
title: Getting started with Vue Range slider component | Syncfusion
description:  Checkout and learn about Getting started with Vue Range slider component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the simple Slider component with its basic usage in step-by-step procedure.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Installation and configuration

* You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications. To install Vue CLI use the following command.

    ```bash
    npm install -g @vue/cli
    ```

* To setup basic  sample use the following Vue CLI commands.

    ```bash
    vue create quickstart
    ```

* Install Syncfusion `Slider` packages using below command.

    ```bash
    npm install @syncfusion/ej2-vue-inputs --save
    ```

## Registering Slider component using `Vue.use()`

Import the Slider Plugin from the Essential JS 2 Vue package and register the same using `Vue.use()` with Component Plugin as its argument.

Refer to the code snippet given below.

```ts
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(SliderPlugin);
```

> By registering component plugin in Vue, all child directives are also globally registered. We can also use `Vue.Component()` to register `Slider`. Refer [here](https://helpstaging.syncfusion.com:14038/ej2-vue/licensing/license-key-registration) to know more about component registration.

## Initialize Slider

Add the EJ2 Vue Slider using `<ejs-slider>` to the `<template>` section of the `App.vue` file in `src` directory.

```
<template>
    <div id="app">
    <ejs-slider id='default' :value='value'></ejs-slider>
  </div>
</template>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);

export default {
  data() {
    return {
      value: 30
    };
  }
}
</script>
```

## Adding CSS Reference

Add Slider component's styles as given below in `<style>` section of the `App.vue` file.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
```

## Run the application

Now run the `npm run dev` command in the console, it will build your application and open in the browser.

The following example shows a basic Slider.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/range-slider/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/getting-started-cs1" %}

## Types

The types of Slider are as follows:

| **Types** | **Usage** |
| --- | --- |
| Default | Shows a default Slider to select a single value. |
| MinRange | Displays the shadow from the start value to the current selected value. |
| Range | Selects a range of values. It also displays the shadow in-between the selection range. |

>Both the Default Slider and Min-Range Slider have same behavior that is used to select a single value. In Min-Range Slider, a shadow is considered from the start value to current handle position. But the Range Slider contains two handles that is used to select a range of values and a shadow is considered in between the two handles.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/range-slider/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/getting-started-cs2" %}

## Customization

### Orientation

The Slider can be displayed, either in horizontal or vertical orientation. By default, the Slider renders in horizontal orientation.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/range-slider/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/getting-started-cs3" %}

### Tooltip

The Slider displays the tooltip to indicate the current value by clicking the Slider bar or drag the Slider handle. The Tooltip position can be customized by using the `placement` property. Also decides the tooltip display mode on a page, i.e., on hovering, focusing, or clicking on the Slider handle. Tooltip always remains/displays on the page.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/range-slider/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/getting-started-cs4" %}

### Buttons

The Slider value can be changed by using the Increase and Decrease buttons. In Range Slider, by default the first handle value will be changed while clicking the button. Change the handle focus and press the button to change the last focused handle value.

> After enabling the slider buttons if the 'Tab' key is pressed, the focus goes to the handle and not to the button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/range-slider/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/getting-started-cs5" %}

## See Also

[Slider Formatting](./format)

[Limits in Slider](./limits)

[Ticks in Slider](./ticks)
