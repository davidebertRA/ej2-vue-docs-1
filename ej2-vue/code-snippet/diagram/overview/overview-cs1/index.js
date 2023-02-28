
    import Vue from 'vue';
    import { DiagramPlugin, HierarchicalTree, DataBinding,Diagram,OverviewPlugin,Overview,
        ConnectorModel,
        Overview,
        OverviewModel,TreeInfo,
        Node,
        StackPanel,
        ImageElement,
        Container,
        TextElement,
        DataBinding,
        HierarchicalTree } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Vue.use(DiagramPlugin);
    Vue.use(OverviewPlugin);
    /**
 * Overview
 */
    let diagram: Diagram;
    let overview: Overview;
    Diagram.Inject(DataBinding, HierarchicalTree);

        let data: object[] = [{
            'Id': 'parent',
            'Name': 'Maria Anders',
            'Designation': 'Managing Director',
            'IsExpand': 'true',
            'RatingColor': '#C34444'
        },
        {
            'Id': 1,
            'Name': 'Ana Trujillo',
            'Designation': 'Project Manager',
            'IsExpand': 'false',
            'RatingColor': '#68C2DE',
            'ReportingPerson': 'parent'
        },
        {
            'Id': 2,
            'Name': 'Anto Moreno',
            'Designation': 'Project Lead',
            'IsExpand': 'false',
            'RatingColor': '#93B85A',
            'ReportingPerson': 'parent'
        },
        {
            'Id': 3,
            'Name': 'Thomas Hardy',
            'Designation': 'Senior S/w Engg',
            'IsExpand': 'false',
            'RatingColor': '#68C2DE',
            'ReportingPerson': 1
        },
        {
            'Id': 4,
            'Name': 'Christina kaff',
            'Designation': 'S/w Engg',
            'IsExpand': 'false',
            'RatingColor': '#93B85A',
            'ReportingPerson': 2
        },
        {
            'Id': 5,
            'Name': 'Hanna Moos',
            'Designation': 'Project Trainee',
            'IsExpand': 'true',
            'RatingColor': '#D46E89',
            'ReportingPerson': 2
        },
    ];
    let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
        
new Vue({
	el: '#app',
	template: `
    <div id="app" >
        <ejs-diagram id="diagram" :width='width' :height='height'  :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings'
        :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
        <div style="right:0px;bottom:0px;background:#D5D5D5;position:absolute">
        <ejs-overview  id="overview" style="top:30px"
               :sourceID='overviewsourceID'
               :width='overviewwidth'
               :height='overviewheight'></ejs-overview>
               <div>
    </div>
`,

            name: 'app',
            data () {
                return {
                    width: "100%",
        height: "590px",
                    snapSettings: {
            constraints: 0
        },
        layout: {
            type: 'OrganizationalChart',
            margin: {
                top: 20
            },
            getLayoutInfo: (node: Node, tree: TreeInfo) => {
                if (!tree.hasSubTree) {
                    tree.orientation = 'Vertical';
                    tree.type = 'Alternate';
                }
            }
        },
        dataSourceSettings: {
            id: 'Id',
            parentId: 'ReportingPerson',
            dataManager: items
        },
        overviewsourceID: "diagram",
        overviewwidth: "100%",
        overviewheight: "150px",
        getNodeDefaults: (node: NodeModel) => {
            node.height = 50;
            node.style.fill =  '#6BA5D7';
            node.style.borderColor = 'white';
            node.style.strokeColor =  'white';
            return  node;
        },
        getConnectorDefaults: (obj: ConnectorModel): ConnectorModel => {
            obj.style.strokeColor =  '#6BA5D7';
            obj.style.fill =  '#6BA5D7';
            obj.style.strokeWidth =  2;
            obj.targetDecorator.style.fill =  '#6BA5D7';
            obj.targetDecorator.style.strokeColor =  '#6BA5D7';
            obj.targetDecorator.shape = 'None';
            obj.type = 'Orthogonal';
            return  obj;
        },
        setNodeTemplate: (obj: Node, diagram: Diagram): Container => {
            let content: StackPanel = new StackPanel();
            content.id = obj.id + '_outerstack';
            content.style.strokeColor = 'darkgreen';
            content.style.fill = '#6BA5D7';
            content.orientation = 'Horizontal';
            content.padding = {
                left: 5,
                right: 10,
                top: 5,
                bottom: 5
            };
            let innerStack: StackPanel = new StackPanel();
            innerStack.style.strokeColor = 'none';
            innerStack.style.fill = '#6BA5D7';
            innerStack.margin = {
                left: 5,
                right: 0,
                top: 0,
                bottom: 0
            };
            innerStack.id = obj.id + '_innerstack';
            let text: TextElement = new TextElement();
            text.content = obj.data['Name'];
            text.style.color = 'white';
            text.style.strokeColor = 'none';
            text.style.fill = 'none';
            text.id = obj.id + '_text1';
            let desigText: TextElement = new TextElement();
            desigText.margin = {
                left: 0,
                right: 0,
                top: 5,
                bottom: 0
            };
            desigText.content = obj.data['Designation'];
            desigText.style.color = 'white';
            desigText.style.strokeColor = 'none';
            desigText.style.fill = 'none';
            desigText.style.textWrapping = 'Wrap';
            desigText.id = obj.id + '_desig';
            innerStack.children = [text, desigText];
            content.children = [innerStack];
            return content;
        }
                }
            },
            provide: {diagram: [DataBinding, HierarchicalTree]},
        
});