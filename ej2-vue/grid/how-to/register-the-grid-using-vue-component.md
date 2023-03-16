---
layout: post
title: Register the grid using vue component in Vue Grid component | Syncfusion
description: Learn here all about Register the grid using vue component in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Register the grid using vue component 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Register the grid using vue component in Vue Grid component

Import the `GridComponent` from the `@syncfuion/ej2-vue-grids` package,register the same using the `Vue.component()` with name of
the grid selector and the GridComponent as its arguments.

Refer to the code example given below.

```ts
import { GridComponent } from '@syncfusion/ej2-vue-grids';

Vue.component('ejs-grid', GridComponent);
```

Using `Vue.component` will register the grid component alone. Child directives such as `Columns` and `Aggregates` need to be registered separately.

Refer to the code example given below to register column directives

```ts
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';

Vue.component('e-columns', ColumnsDirective);
Vue.component('e-column', ColumnDirective);
```

Refer to the code example given below to register aggregates directives

```ts
import { AggregatesDirective, AggregateDirective, AggregateColumnsDirective, AggregateColumnDirective } from '@syncfusion/ej2-vue-grids';

Vue.component('e-aggregates', AggregatesDirective);
Vue.component('e-aggregate', AggregateDirective);
Vue.component('e-columns', AggregateColumnsDirective);
Vue.component('e-column', AggregateColumnDirective);
```