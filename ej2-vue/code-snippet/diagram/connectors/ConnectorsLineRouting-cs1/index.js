

  import Vue from 'vue';
  import { DiagramPlugin,LineRouting,Diagram,DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';
  Diagram.Inject(LineRouting);
  Vue.use(DiagramPlugin);
  let nodes = [
    { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
    { id: 'shape2', offsetX: 300, offsetY: 300, width: 120, height: 50 },
    { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 }
  ];
 let connectors  = [
   { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal' }
 ];
 function getNodeDefaults(obj) {
    obj = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } };
    return obj;
  }
let  constraints = DiagramConstraints.Default | DiagramConstraints.LineRouting;

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :constraints='constraints' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
`,

   name: 'app',
        data () {
            return {
                width: "100%",
                height: "350px",
                connectors:connectors,
                nodes:nodes,
                constraints:constraints,
                getNodeDefaults: (obj) => {
                  obj = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } };
                  return obj;
               },
            }
        }

});