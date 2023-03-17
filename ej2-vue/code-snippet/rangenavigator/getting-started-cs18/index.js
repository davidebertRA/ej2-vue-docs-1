
import Vue from "vue";
import { RangeNavigatorPlugin, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { GetDateTimeData  } from "./default_data.js";

Vue.use(RangeNavigatorPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-rangenavigator :valueType='valueType' :intervalType='intervalType' :labelStyle='labelStyle'
        :value='value' :labelFormat='labelFormat' :dataSource='dataSource'
        xName='x' yName='y'>
      </ejs-rangenavigator>
    </div>
`,

  data() {
    return {
     valueType: "DateTime",
      intervalType: "Months",
      labelFormat: "MMM",
      labelStyle: { color: 'red', size:'10px'}
      value: [new Date('2018-06-01'), new Date('2018-07-01')],
      dataSource: GetDateTimeData(new Date('2018-01-01'), new Date('2019-01-01')),
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries]
  }

});