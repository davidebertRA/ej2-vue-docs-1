---
layout: post
title: "MySQL Data Binding in Vue Pivotview component | Syncfusion"
description: "Learn how to bind data from a MySQL database in the Syncfusion Vue Pivot Table of Syncfusion Essential JS 2 and more."
component: "Pivot Table"
platform: ej2-vue
documentation: ug
---

# MySQL in EJ2 Vue Pivotview Component

This section describes how to retrieve data from a MySQL database using [MySqlClient](https://mysqlclient.readthedocs.io/) and bind it to the Pivot Table via a Web API controller.

## Create a Web API service to fetch MySQL data

**1.** Open Visual Studio and create an ASP.NET Core Web App project type, naming it **MyWebService**. To create an ASP.NET Core Web application, follow the document [link](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022).

![Create ASP.NET Core Web App project](../images/azure-asp-core-web-service-create.png)

**2.** To connect a MySQL Server using the **MySqlClient** in our application, we need to install the [MySql.Data](https://www.nuget.org/packages/MySql.Data) NuGet package. To do so, open the NuGet package manager of the project solution, search for the package **MySql.Data** and install it.

![Add the NuGet package "MySql.Data" to the project](../images/mysql-data-nuget-package-install.png)

**3.** Create a Web API controller (aka, PivotController.cs) file under **Controllers** folder that helps to establish data communication with the Pivot Table.

**4.** In the Web API controller (aka, PivotController), **MySqlConnection** helps to connect the MySQL database. Next, using **MySqlCommand** and **MySqlDataAdapter** you can process the desired query string and retrieve data from the MySQL database. The **Fill** method of the **MySqlDataAdapter** is used to populate the retrieved data into a **DataTable** as shown in the following code snippet.

```csharp
    using Microsoft.AspNetCore.Mvc;
    using MySql.Data.MySqlClient;
    using Newtonsoft.Json;
    using System.Data;

    namespace MyWebService.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class PivotController : ControllerBase
        {
            public dynamic GetMySQLResult()
            {
                // Replace with your own connection string.
                MySqlConnection connection = new MySqlConnection("<Enter your valid connection string here>");
                connection.Open();
                MySqlCommand command = new MySqlCommand("SELECT * FROM orders", connection);
                MySqlDataAdapter dataAdapter = new MySqlDataAdapter(command);
                DataTable dataTable = new DataTable();
                dataAdapter.Fill(dataTable);
                connection.Close();
                return dataTable;
            }
        }
    }

```

**5.** In the **Get()** method of the **PivotController.cs** file, the **GetMySQLResult** method is used to retrieve the MySQL data as a **DataTable**, which is then serialized into JSON string using **JsonConvert.SerializeObject()**.

```csharp
    using Microsoft.AspNetCore.Mvc;
    using MySql.Data.MySqlClient;
    using Newtonsoft.Json;
    using System.Data;

    namespace MyWebService.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class PivotController : ControllerBase
        {
            [HttpGet(Name = "GetMySQLResult")]
            public object Get()
            {
                return JsonConvert.SerializeObject(GetMySQLResult());
            }

            public dynamic GetMySQLResult()
            {
                // Replace with your own connection string.
                MySqlConnection connection = new MySqlConnection("<Enter your valid connection string here>");
                connection.Open();
                MySqlCommand command = new MySqlCommand("SELECT * FROM orders", connection);
                MySqlDataAdapter dataAdapter = new MySqlDataAdapter(command);
                DataTable dataTable = new DataTable();
                dataAdapter.Fill(dataTable);
                connection.Close();
                return dataTable;
            }
        }
    }

```

**6.** Run the application and it will be hosted within the URL `https://localhost:7146`.

**7.** Finally, the retrieved data from MySQL database which is in the form of JSON can be found in the Web API controller available in the URL link `https://localhost:7146/Pivot`, as shown in the browser page below.

![Hosted Web API URL](../images/mysql-data.png)

## Connecting the Pivot Table to a MySQL database using the Web API service

**1.** Create a simple Vue Pivot Table by following the **"Getting Started"** documentation [link](../getting-started).

**2.** Map the hosted Web API's URL link `https://localhost:7146/Pivot` to the Pivot Table in **App.vue** by using the [url](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#url) property under [`dataSourceSettings`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings/).

```ts
<script>
import Vue from "vue";
import {
  FieldList,
  PivotViewPlugin,
} from "@syncfusion/ej2-vue-pivotview";
Vue.use(PivotViewPlugin);
export default {
  data() {
    return {
      dataSourceSettings: {
        url: 'https://localhost:7146/pivot'
        //Other codes here...
      }
    };
  }
};
</script>
<style>
  //Syncfusion Angular controls styles
</style>

```

**3.** Frame and set the report based on the data retrieved from the MySQL database.

```ts
<template>
  <div>
    <div class="control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import {
    FieldList,
    PivotViewPlugin,
  } from "@syncfusion/ej2-vue-pivotview";
  Vue.use(PivotViewPlugin);
  export default {
    data() {
      return {
        dataSourceSettings: {
            url: 'https://localhost:7146/Pivot',
            columns: [{ name: 'ShipName' }],
            values: [{ name: 'Freight', caption: 'Sum of Freight' }],
            rows: [{ name: 'ShipCity' }],
            filters: []
        },
        showFieldList: true
      };
    },
    methods: {
    },
    provide: {
      pivotview: [FieldList]
    }
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>

```

When you run the sample, the resulting pivot table will look like this:

![PivotTable bound with MySQL data](../images/pivottable-with-mysql-data.png)

> Explore our Vue Pivot Table sample and ASP.NET Core Web Application to extract data from a MySQL database and bind to the Pivot Table in [this](https://github.com/SyncfusionExamples/how-to-bind-MySQL-database-to-pivot-table) GitHub repository.
