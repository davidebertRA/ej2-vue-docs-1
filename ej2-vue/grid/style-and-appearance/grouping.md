---
layout: post
title: Grouping in Vue Grid component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Grid component

## Customizing the group header

Use the below CSS to customize the group header element.

```

.e-grid .e-groupdroparea {
    background-color: #deecf9;
}

```

## Customizing the group expand or collapse icons

Use the below CSS to customize the Grid group expand/collapse icon. You can use the available Syncfusion [icons](https://ej2.syncfusion.com/documentation/appearance/icons/#material) based on your theme.

```

.e-grid .e-icon-gdownarrow::before{
  content:'\e916'
}
.e-grid .e-icon-grightarrow::before{
  content:'\e913'
}

```

## Customizing the group caption row

Below CSS customizes the Grid group caption row element.

```

.e-grid .e-groupcaption {
    background-color: #deecf9;
}
.e-grid .e-recordplusexpand,
.e-grid .e-recordpluscollapse {
    background-color: #deecf9;
}

```

## Customizing the indent cell

Use the below CSS to customize the Grid grouping indent cell element.

```

.e-grid .e-indentcell {
    background-color: #deecf9;
}

```