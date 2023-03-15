
    import Vue from 'vue';
    import { DiagramPlugin,BpmnDiagrams,Diagram,BpmnGatewayModel } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(BpmnDiagrams);

    Vue.use(DiagramPlugin);

    let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as Activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets the activity as task
        activity: {
            activity: 'Task',
            //Sets the call of the task as true
            task: {
                call: true
            }
        },
    },
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