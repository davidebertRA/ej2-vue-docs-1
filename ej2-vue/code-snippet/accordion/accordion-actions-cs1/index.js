
import Vue from 'vue';
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';
import { ExpandEventArgs, Accordion } from '@syncfusion/ej2-navigations';

Vue.use(AccordionPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-accordion ref="acrdnInstance" expandMode='Single' :expanding="expanding" :expanded="expanded" :created="created" >
      <e-accordionitems>
        <e-accordionitem header='ASP.NET' :content='content0'></e-accordionitem>
        <e-accordionitem header='ASP.NET MVC' :content='content1'></e-accordionitem>
        <e-accordionitem header='JavaScript' :content='content2'></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
  </div>
`,
  
  name: 'app',
  data: function() {
    return {
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
    };
  },
  mounted: function() {
    this.initialLoad = true;
    this.isCollapsed = false;
    this.expandIndex;
  },
  methods: {
    expanded: function (e) {
      var obj = this.$refs.acrdnInstance.ej2Instances;
      if (!e.isExpanded && !this.initialLoad && this.isCollapsed) {
           obj.expandItem(true, this.expandIndex);
           this.isCollapsed = false;
      }
    }
    expanding: function (e) {
      var obj = this.$refs.acrdnInstance.ej2Instances;
      if (e.isExpanded && !this.initialLoad && !this.isCollapsed) {
            e.cancel = true;
            this.expandIndex = obj.items.indexOf(e.item);
            this.isCollapsed = true;
      }
    }
    created: function (e) {
        this.initialLoad = false;
    }
   }

});