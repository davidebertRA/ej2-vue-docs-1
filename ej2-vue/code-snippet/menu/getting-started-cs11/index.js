
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-menu ref="menu" id="menu" :items='menuItems' :fields='menuFields' :created='onCreated'></ejs-menu>
</div>
`,

   data: function() {
        return {
           menuItems:  [
            {
                continent: 'Asia',
                countries: [
                    { country: 'China' },
                    { country: 'India' },
                    { country: 'Japan' }
                ]
            },
            {
                continent: 'North America',
                countries: [
                    { country: 'Canada' },
                    { country: 'Mexico' },
                    { country: 'USA' }
                ]
            },
            {
                continent: 'South America',
                countries: [
                    { country: 'Brazil' },
                    { country: 'Colombia' },
                    { country: 'Argentina' }
                ]
            },
            {
                continent: 'Oceania',
                countries: [
                    { country: 'Australia' },
                    { country: 'New Zealand' },
                    { country: 'Samoa' },
                ]
            },
            { continent: 'Antarctica' }
        ],
        menuFields: {
            text: ['continent', 'country'],
            children: ['countries']
        }
     };
   },
   methods: {
       onCreated: function(args) {
            var insertItem = [
                {
                    continent: 'Europe',
                    countries: [
                        { country: 'Finland' },
                        { country: 'Austria' }
                    ]
                }
            ];
            this.$refs.menu.insertBefore(insertItem, 'Oceania', false);
            insertItem = [
                {
                    continent: 'Africa',
                    countries: [
                        { country: 'Nigeria' }
                    ]
                }
            ];
            this.$refs.menu.insertAfter(insertItem, 'Oceania', false);
            this.$refs.menu.removeItems(['South America', 'Mexico'], false);
       }
   }

});