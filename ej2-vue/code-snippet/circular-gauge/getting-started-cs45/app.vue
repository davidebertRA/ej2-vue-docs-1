


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis>
                        <e-pointers>
                            <e-pointer value=90  type= 'Marker' markerWidth= 15 markerHeight= 15 markerShape= 'InvertedTriangle' radius= '100%'  ></e-pointer>
                             <e-pointer value=90 type= 'RangeBar' markerWidth= 10  radius= '60%'  ></e-pointer>
                             <e-pointer value=90 pointerWidth= 25 :cap= 'cap' :needleTail= 'needleTail' radius= '60%'  ></e-pointer>
                        </e-pointers>
                   </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
export default {
    data: function () {
        return {
          cap: {
                radius: 15,
                border: {
                    width: 5
                }
            },
            needleTail: {
                length: '22%',
            }
        }
    }
};
</script>
<style>
  .wrapper {
    max-width: 300px;
    margin: 0 auto;
  }
</style>


