

<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Marker, } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return {
      shapeData: world_map,
      markerSettings: [{
          visible: true,
          shape: 'Image',
          imageUrl: 'https://ej2.syncfusion.com/vue/demos/src/maps/images/ballon.png',
          height: 20,
          width: 20,
          dataSource: [
              { latitude: 37.0000, longitude: -120.0000, city: 'California' },
              { latitude: 40.7127, longitude: -74.0059, city: 'New York' },
              { latitude: 42, longitude: -93, city: 'Iowa' }
          ]
      }]
    }
},
provide: {
    maps: [Marker]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>


