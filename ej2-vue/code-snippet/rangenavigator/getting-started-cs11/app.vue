

<template>
    <div id="app">
        <ejs-rangenavigator :valueType='valueType' :value='value' :labelFormat='labelFormat' :tooltip='tooltip'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series :dataSource='data' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
    </div>
</template>
<script>
import { RangeNavigatorComponent, RangenavigatorSeriesDirective,RangenavigatorSeriesCollectionDirective, AreaSeries, DateTime, RangeTooltip } from "@syncfusion/ej2-vue-charts";
import { bitCoinData } from "./default_data.js";

export default {
  components: {
    'ejs-rangenavigator': RangeNavigatorComponent,
    'e-rangenavigator-series': RangenavigatorSeriesDirective,
    'e-rangenavigator-series-collection': RangenavigatorSeriesCollectionDirective
  },
  data() {
    return {
     valueType: 'DateTime',
     value: [new Date('2017-09-01'), new Date('2018-02-01')],
     tooltip: { enable: true, displayMode: "Always", format: "MM/dd/yyyy" },
     labelFormat: 'MMM-yy',
     data: bitCoinData
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries, RangeTooltip]
  }
};
</script>


