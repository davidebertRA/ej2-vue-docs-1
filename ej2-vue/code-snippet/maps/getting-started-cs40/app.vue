

<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps  :titleSettings='titleSettings' :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings' :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import { MapsComponent, LayerDirective, LayersDirective, Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { electionData } from './election-data.js';
export default {
components: {
    'ejs-maps': MapsComponent,
    'e-layer': LayerDirective,
    'e-layers': LayersDirective
},
data () {
    return{
        titleSettings: {
            text: 'USA Election Results - 2016'
        },
        shapeData: usMap,
        dataSource: electionData,
        shapePropertyPath: 'name',
        shapeDataPath: 'State',
        shapeSettings: {
            colorValuePath: 'Candidate',
            colorMapping: [
            {
                value: 'Trump', color: '#D84444'
            },
            {
                value: 'Clinton', color: '#316DB5'
            }]
        },
        dataLabelSettings: {
            visible: true,
            labelPath: 'State',
            smartLabelMode: 'Trim'
        },
        tooltipSettings: {
            visible: true,
            valuePath: 'State'
        },
        legendSettings: {
            visible: true
        }
    }
},
provide: {
    maps: [Legend, DataLabel, MapsTooltip]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>


