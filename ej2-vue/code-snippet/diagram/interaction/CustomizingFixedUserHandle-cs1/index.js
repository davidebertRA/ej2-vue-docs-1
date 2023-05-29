
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        offsetX: 150,
        offsetY: 150,
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        // A fixed user handle is created and stored in fixed user handle collection of Node.
        fixedUserHandles: [{offset: { x: 0, y: 0 },margin: { right: 20 }, width: 20, height: 20,
            padding:{left:3,right:3,top:3,bottom:3},iconStrokeColor:'white',fill:'black',  id: 'user1', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
    }];
    let connectors = [{
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 200
        },
        type: 'Orthogonal',
        style: {
            strokeColor: '#6BA5D7'
        },
        // A fixed user handle is created and stored in fixed user handle collection of Connector.
        fixedUserHandles: [{ offset: 0.5, width: 20, alignment: 'Before', height: 20,
            padding:{left:3,right:3,top:3,bottom:3},iconStrokeColor:'white',fill:'black', id: 'usercon1',  displacement:{x:10,y:10}, pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                connectors: connectors
            }
        }
    
});