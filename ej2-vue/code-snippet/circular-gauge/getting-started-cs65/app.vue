<template>
    <div id="app">
      <div class='wrapper'>
         <ejs-circulargauge >
          <e-axes>
            <e-axis>
              <e-pointers>
                <e-pointer :value='val'/>
              </e-pointers>
            </e-axis>
          </e-axes>
         </ejs-circulargauge>
      </div>
    </div>
</template>
<script>
import { CircularGaugeComponent, AxisDirective, AxesDirective, PointerDirective, PointersDirective } from '@syncfusion/ej2-vue-circulargauge';

export default {
   components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axis': AxisDirective,
    'e-axes': AxesDirective,
    'e-pointer': PointerDirective,
    'e-pointers': PointersDirective
   },
   data () {
    return {
      val : 35
    }
  }
}
</script>
<style>
  .wrapper {
    max-width: 300px;
    margin: 0 auto;
  }
</style>


