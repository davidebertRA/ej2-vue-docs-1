---
layout: post
title: "MongoDB Data Binding in Vue Pivotview component | Syncfusion"
component: "Pivot Table"
description: "Learn how to bind data from a MongoDB Database in the Syncfusion Vue Pivot Table of Syncfusion Essential JS 2 and more."
platform: ej2-vue
documentation: ug
---

# MongoDB in EJ2 Vue Pivotview Component

This section describes how to consume data from MongoDB database using [MongoDB Driver](https://www.nuget.org/packages/MongoDB.Driver) and [MongoDB Bson](https://www.nuget.org/packages/MongoDB.Bson) libraries and bind it to the Pivot Table via a Web API controller.

## Create a Web API service to fetch MongoDB data

**1.** Open Visual Studio and create an ASP.NET Core Web App project type, naming it **MyWebService**. To create an ASP.NET Core Web application, follow the document [link](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022).

![Create ASP.NET Core Web App project](../images/azure-asp-core-web-service-create.png)

**2.** To connect a MongoDB Server using the **MongoDB.Driver** and **MongoDB.Bson** in our application, we need to install the [MongoDB.Driver](https://www.nuget.org/packages/MongoDB.Driver/) NuGet package. To do so, open the NuGet package manager of the project solution, search for the package **MongoDB.Driver** and install it.

![Add the NuGet package "MongoDB.Driver" to the project](../images/mongodb-data-nuget-package-install.png)

**3.** Create a Web API controller (aka, PivotController.cs) file under **Controllers** folder that helps to establish data communication with the Pivot Table.

**4.** In the Web API controller (aka, PivotController), **MongoClient** helps to connect the MongoDB database. Next, using the **GetDatabase** and **GetCollection** methods, you can retrieve data from the database. The **Find** method of the **IMongoDatabase** is used to populate the retrieved data into a **List**, as shown in the following code snippet.

```csharp
    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;
    using MongoDB.Driver;
    using MongoDB.Bson;

    namespace MyWebService.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class PivotController : ControllerBase
        {
            private static List<ProductDetails> FetchMongoDbResult()
            {
                // Replace with your own connection string.
                string connectionString = "<Enter your valid connection string here>";
                MongoClient client = new MongoClient(connectionString);
                IMongoDatabase database = client.GetDatabase("sample_training");
                var collection = database.GetCollection<ProductDetails>("ProductDetails");
                return collection.Find(new BsonDocument()).ToList();
            }
            public class ProductDetails
            {
                public ObjectId Id { get; set; }
                public int Sold { get; set; }
                public double Amount { get; set; }
                public string? Country { get; set; }
                public string? Products { get; set; }
                public string? Year { get; set; }
                public string? Quarter { get; set; }
            }
        }
    }

```

**5.** In the **Get()** method of the **PivotController.cs** file, the **FetchMongoDbResult()** method is used to retrieve the MongoDB data as a **List**, which is then serialized into JSON using **JsonConvert.SerializeObject()**.

```csharp
    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;
    using MongoDB.Bson;
    using MongoDB.Driver;

    namespace MyWebService.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class PivotController : ControllerBase
        {
            [HttpGet(Name = "GetMongoDbResult")]
            public object Get()
            {
                return JsonConvert.SerializeObject(FetchMongoDbResult());
            }

            private static List<ProductDetails> FetchMongoDbResult()
            {
                // Replace with your own connection string.
                string connectionString = "<Enter your valid connection string here>";
                MongoClient client = new MongoClient(connectionString);
                IMongoDatabase database = client.GetDatabase("sample_training");
                var collection = database.GetCollection<ProductDetails>("ProductDetails");
                return collection.Find(new BsonDocument()).ToList();
            }
            public class ProductDetails
            {
                public ObjectId Id { get; set; }
                public int Sold { get; set; }
                public double Amount { get; set; }
                public string? Country { get; set; }
                public string? Products { get; set; }
                public string? Year { get; set; }
                public string? Quarter { get; set; }
            }
        }
    }

```

**6.** Run the web application and it will be hosted within the URL `https://localhost:44346/`.

**7.** Finally, the retrieved data from MongoDB database which is in the form of JSON can be found in the Web API controller available in the URL link `https://localhost:44346/Pivot`, as shown in the browser page below.

![Hosted Web API URL](../images/mongodb-data.png)

## Connecting the Pivot Table to a MongoDB database using the Web API service

**1.** Create a simple Vue Pivot Table by following the **"Getting Started"** documentation [link](../getting-started).

**2.** Map the hosted Web API's URL link `https://localhost:44346/Pivot` to the Pivot Table component in **App.vue** by using the [url](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#url) property under [`dataSourceSettings`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings/).

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
        url: 'https://localhost:44346/Pivot',
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

**3.** Frame and set the report based on the data retrieved from the MongoDB database.

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
            url: 'https://localhost:44346/Pivot',
            enableSorting: true,
            columns: [
                { name: 'Year' }
            ],
            values: [
                { name: 'Sold', caption: "Units Sold"},
                { name: 'Amount', caption: "Sold Amount"}
            ],
            rows: [
                { name: 'Country' },
                { name: 'Products' }
            ]
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

![PivotTable bound with MongoDB database](../images/mongodb-data-binding.png)

> Explore our Vue Pivot Table sample and ASP.NET Core Web Application to extract data from a MongoDB database and bind to the Pivot Table in [this](https://github.com/SyncfusionExamples/how-to-bind-MongoDB-to-pivot-table) GitHub repository.