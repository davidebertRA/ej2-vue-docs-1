
import Vue from 'vue';
import { CircularGaugePlugin, Gradient, Annotations } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
  <div class='wrapper'>
   <ejs-circulargauge style='display:block' align='center' :title='title' :titleStyle='titleStyle' :centerY='centerY'>
   <e-axes>
   <e-axis :radius='gaugeRadius' :startAngle='startAngle' minimum=0  maximum=14 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
   <e-pointers>
   <e-pointer :type='type1' :value='value1' :radius='pointerRadius1' :markerShape='markerShape1' :imageUrl='imageUrl1' :markerWidth='markerWidth1' :markerHeight='markerHeight1' :animation='animation1'>
   </e-pointer>
   <e-pointer :type='type2' :value='value2' :radius='pointerRadius2' :markerShape='markerShape2' :imageUrl='imageUrl2' :markerWidth='markerWidth2' :markerHeight='markerHeight2' :animation='animation2'>
   </e-pointer>
   <e-pointer :type='type3' :value='value3' :radius='pointerRadius3' :markerShape='markerShape3' :imageUrl='imageUrl3' :markerWidth='markerWidth3' :markerHeight='markerHeight3' :animation='animation3'>
   </e-pointer>
   <e-pointer :type='type4' :value='value4' :radius='pointerRadius4' :markerShape='markerShape4' :imageUrl='imageUrl4' :markerWidth='markerWidth4' :markerHeight='markerHeight4' :animation='animation4'>
   </e-pointer>
   <e-pointer :type='type5' :value='value5' :radius='pointerRadius5' :markerShape='markerShape5' :imageUrl='imageUrl5' :markerWidth='markerWidth5' :markerHeight='markerHeight5' :animation='animation5'>
   </e-pointer>
   <e-pointer :type='type6' :value='value6' :radius='pointerRadius6' :markerShape='markerShape6' :imageUrl='imageUrl6' :markerWidth='markerWidth6' :markerHeight='markerHeight6' :animation='animation6'>
   </e-pointer>
   <e-pointer :type='type7' :value='value7' :radius='pointerRadius7' :markerShape='markerShape7' :imageUrl='imageUrl7' :markerWidth='markerWidth7' :markerHeight='markerHeight7' :animation='animation7'>
   </e-pointer>
   </e-pointers>
   </e-axis>
   </e-axes>
   </ejs-circulargauge>
  </div>
  </div>
`,

    data: function () {
        var rangeLinearGradient = {
          startValue: '0%', endValue: '100%',
          colorStop: [
          { color: '#9E40DC', offset: '0%', opacity: 0.9 },
          { color: '#E63B86', offset: '70%', opacity: 0.9 }]
        }
        return {
        title: 'Short Put Distance',
        titleStyle: {
          size: '18px'
        },
       centerY: '57%',
       annotations: [{
            content: '12 M', radius: '108%', angle: 98, zIndex: '1'
        }, {
            content: '11 M', radius: '80%', angle: 81, zIndex: '1'
        }, {
            content: '10 M', radius: '50%', angle: 69, zIndex: '1'
        }, {
            content: 'Doe', radius: '108%', angle: 190, zIndex: '1'
        }, {
            content: 'Almaida', radius: '80%', angle: 185, zIndex: '1'
        }, {
            content: 'John', radius: '50%', angle: 180, zIndex: '1'
        }],
        lineStyle: {
            width: 0
        },
        gaugeRadius: '90%',
        labelStyle: {
            font: {
              size: '0px'
            }
        },
        majorTicks: {
          width: 0,
        },
        minorTicks: {
          width: 0,
        },
        startAngle: 200, endAngle: 130,
        ranges: [{
            start: 0, end: 12, radius: '115%',
            startWidth: 25, endWidth: 25,
            linearGradient : rangeLinearGradient
        }, {
            start: 0, end: 11, radius: '85%',
            startWidth: 25, endWidth: 25,
            linearGradient : rangeLinearGradient
        }, {
            start: 0, end: 10, radius: '55%',
            startWidth: 25, endWidth: 25,
            linearGradient : rangeLinearGradient
          }],
        type1: 'Marker', value1: 12, markerShape1: 'Image',
        imageUrl1: 'templates/circular-gauge/images/football.png',
        pointerRadius1: '108%', markerWidth1: 28, markerHeight1: 28,
        animation1: { duration: 1500 },

        type2: 'Marker', value2: 11, markerShape2: 'Image',
        imageUrl2: 'templates/circular-gauge/images/basketball.png',
        pointerRadius2: '78%', markerWidth2: 28, markerHeight2: 28,
        animation2: { duration: 1200 },

        type3: 'Marker', value3: 10, markerShape3: 'Image',
        imageUrl3: 'templates/circular-gauge/images/golfball.png',
        pointerRadius3: '48%', markerWidth3: 28, markerHeight3: 28,
        animation3: { duration: 900 },

        type4: 'Marker', value4: 12, markerShape4: 'Image',
        imageUrl4: 'templates/circular-gauge/images/athletics.png',
        pointerRadius4: '0%', markerWidth4: 90, markerHeight4: 90,
        animation4: { duration: 0 },

        type5: 'Marker', value5: 0.1, markerShape5: 'Image',
        imageUrl5: 'templates/circular-gauge/images/girl1.png',
        pointerRadius5: '108%', markerWidth5: 28, markerHeight5: 28,
        animation5: { duration: 1500 },

        type6: 'Marker', value6: 0.1, markerShape6: 'Image',
        imageUrl6: 'templates/circular-gauge/images/man1.png',
        pointerRadius6: '78%', markerWidth6: 28, markerHeight6: 28,
        animation6: { duration: 1500 },

        type7: 'Marker', value7: 0.1, markerShape7: 'Image',
        imageUrl7: 'templates/circular-gauge/images/man2.png',
        pointerRadius7: '48%', markerWidth7: 28, markerHeight7: 28,
        animation7: { duration: 1500 }
      }
  },
  provide: {
        circulargauge: [Gradient, Annotations]
    }

});