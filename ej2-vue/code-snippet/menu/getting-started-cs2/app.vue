

<template>
<div>
<ejs-menu :items='datasource' :fields='menuFields'></ejs-menu>
</div>
</template>

<script>
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);

export default {
   data: function() {
        return {
            //Menu datasource
           datasource:  [
            {
                continent: 'Asia',
                countries: [
                    {
                        country: 'China',
                        languages: [
                            { language: 'Chinese' },
                            { language: 'Cantonese' }
                        ]
                    },
                    {
                        country: 'India',
                        languages: [
                            { language: 'English' },
                            { language: 'Hindi' },
                            { language: 'Tamil' }
                        ]
                    },
                    {
                        country: 'Japan',
                        languages: [
                            { language: 'Japanese' }
                        ]
                    }
                ]
            },
            {
                continent: 'Africa',
                countries: [
                    {
                        country: 'Nigeria',
                        languages: [
                            { language: 'English' },
                            { language: 'Hausa' }
                        ]
                    },
                    {
                        country: 'Egypt',
                        languages: [
                            { language: 'Arabic' }
                        ]
                    },
                    {
                        country: 'South Africa',
                        languages: [
                            { language: 'Tswana' },
                            { language: 'Swati' }
                        ]
                    }
                ]
            },
            {
                continent: 'North America',
                countries: [
                    {
                        country: 'Canada',
                        languages: [
                            { language: 'French' }
                        ]
                    },
                    {
                        country: 'Mexico',
                        languages: [
                            { language: 'Spanish' }
                        ]
                    },
                    {
                        country: 'USA',
                        languages: [
                            { language: 'English' }
                        ]
                    }
                ]
            },
            {
                continent: 'South America',
                countries: [
                    {
                        country: 'Brazil',
                        languages: [
                            { language: 'Portuguese' }
                        ]
                    },
                    {
                        country: 'Colombia',
                        languages: [
                            { language: 'Spanish' }
                        ]
                    },
                    {
                        country: 'Argentina',
                        languages: [
                            { language: 'Spanish' }
                        ]
                    }
                ]
            },
            {
                continent: 'Oceania',
                countries: [
                    {
                        country: 'Australia'
                    },
                    {
                        country: 'New Zealand'
                    },
                    {
                        country: 'Samoa'
                    },
                ]
            }
        ],
        menuFields: {
            text: ['continent', 'country', 'language'],
            children: ['countries', 'languages']
        }
    };
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

body {
    margin-top: 100px;
    text-align: center;
}

</style>


