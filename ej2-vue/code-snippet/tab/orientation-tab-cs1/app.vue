

<template>
<div id='container'>
    <ejs-tab id='element' ref="element" heightAdjustMode='Auto' overflowMode='Popup' reorderActiveTab='false' height='150px' width='700px'>
        <e-tabitems>
            <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
            <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
            <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
            <e-tabitem :header='headerText3' :content="content3"></e-tabitem>
            <e-tabitem :header='headerText4' :content="content4"></e-tabitem>
            <e-tabitem :header='headerText5' :content="content5"></e-tabitem>
            <e-tabitem :header='headerText6' :content="content6"></e-tabitem>
            <e-tabitem :header='headerText7' :content="content7"></e-tabitem>
            <e-tabitem :header='headerText8' :content="content8"></e-tabitem>
            <e-tabitem :header='headerText9' :content="content9"></e-tabitem>
            <e-tabitem :header='headerText10' :content="content10"></e-tabitem>
            <e-tabitem :header='headerText11' :content="content11"></e-tabitem>
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
          headerText0: { text: 'HTML' },
          headerText1: { text: 'C Sharp(C#)' },
          headerText2: { text: 'Java' },
          headerText3: { text: 'VB.Net' },
          headerText4: { text: 'Xamarin' },
          headerText5: { text: 'ASP.NET' },
          headerText6: { text: 'ASP.NET MVC' },
          headerText7: { text: 'JavaScript' },
          headerText8: { text: 'React' },
          headerText9: { text: 'Angular' },
          headerText10: { text: 'Vue' },
          headerText11: { text: 'Typescript' },
          content0: 'HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to ' +
        'create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually ' +
        'engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web ' +
        'browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a ' +
        'website semantically along with cues for presentation, making it a markup language, rather than a programming language.',

         content1: 'C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its ' +
        'development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.',

        content2: 'Java is a set of computer software and specifications developed by Sun Microsystems, later acquired ' +
        'by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform ' +
        'computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to ' +
        'enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to ' +
        'provide many features of native applications and can be embedded in HTML pages.',

        content3: 'The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also ' +
        'includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.',

        content4: 'Xamarin is a San Francisco, California based software company created in May 2011[3] by the engineers ' +
        'that created Mono,[4] Mono for Android and MonoTouch that are cross-platform implementations of the Common Language ' +
        'Infrastructure (CLI) and Common Language Specifications (often called Microsoft .NET). With a C#-shared codebase, ' +
        'developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share ' +
        'code across multiple platforms.[5] Xamarin has over 1 million developers in more than 120 countries around the World ' +
        'as of May 2015.',

        content5: 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +
        'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +
        'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +
        'to Microsoft\'\s Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
        'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +
        'ASP.NET components to process SOAP messages.',

         content6: 'The ASP.NET MVC is a web application framework developed by Microsoft, which implements the ' +
        'model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is ' +
        'proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using ' +
        'only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.',

         content7: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as ' +
        'part of web browsers so that client-side scripts could interact with the user, control the browser, communicate ' +
        'asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in ' +
        'both game development and the creation of desktop applications.',

        content8:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',

        content9:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS',

        content10:'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',

        content11:'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.'
        }
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

  #app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
  }
  
  .e-content .e-item {
    font-size: 12px;
    margin: 10px;
    text-align: justify;
  }
  
  #element {
    margin-top: 80px;
    margin-left: 80px;
  }
  
  #default {
    margin-top: 15px;
  }
</style>


