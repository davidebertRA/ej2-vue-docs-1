
    import Vue from 'vue';
    import { DiagramPlugin,UmlClassifierShapeModel } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
    id: "Patient",
    //Position of the node
    offsetX: 200,
    offsetY: 200,
    shape: {
      type: "UmlClassifier",
      //Define class object
      class: {
        name: "Patient",
        //Define class attributes
        attributes: [{ name: "accepted", type: "Date" }],
        //Define class methods
        methods: [{ name: "getHistory", type: "getHistory" }]
      },
      classifier: "Class"
    } as UmlClassifierShapeModel
}]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    }

});