
import Vue from 'vue';
import { loadCldr,L10n} from '@syncfusion/ej2-base';
import { TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

Vue.use(TimePickerPlugin);
loadCldr(numberingSystems, gregorian, numbers);
L10n.load({
    'de': {
        'timepicker': { placeholder: 'Wählen Sie Zeit' }
    }
});


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-timepicker id="timepicker"  locale="de" ></ejs-timepicker>
      </div>
    </div>
`,

});