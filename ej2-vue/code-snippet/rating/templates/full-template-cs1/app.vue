

<template>
    <div class='wrap'>
        <ejs-rating id="rating" value="3" emptyTemplate="<span class='custom-font sf-icon-empty-star'></span>" fullTemplate="<span class='custom-font sf-icon-fill-star'></span>" ></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

export default {}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

.e-rating-container .custom-font {
  /* To change the icon font color. */
  color: rgb(255, 215, 0);
}

@font-face {
  font-family: 'rating-template';
  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfMAAAEoAAAAVmNtYXDnEOdaAAABjAAAADhnbHlm+icDjQAAAcwAAAE0aGVhZCK49ucAAADQAAAANmhoZWEIUQQEAAAArAAAACRobXR4DAAAAAAAAYAAAAAMbG9jYQAcAJoAAAHEAAAACG1heHABDwBkAAABCAAAACBuYW1lmYExxgAAAwAAAAKFcG9zdCH169QAAAWIAAAAQAABAAAEAAAAAFwEAAAAAAAD9AABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAAgPX4jF8PPPUACwQAAAAAAN/TWPsAAAAA39NY+wAAAAAD9AP0AAAACAACAAAAAAAAAAEAAAADAFgAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAQQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAEAAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAkAAAABAAEAAEAAOcB//8AAOcA//8AAAABAAQAAAABAAIAAAAAABwAmgABAAAAAAP0A/QACQAAAQUTAyUFAxMlAwFn/qX6OwE1ATU7+v6lmQKsNf7//pasrAFqAQE1AUgAAAIAAAAAA/QD5AAdAFcAAAEfBAUPAxUTLwEjDwETNS8DJT8EJwMFDwQVHwIDBx8EMzclBRczPwU1Az8CNS8DJQMvBisBDwUCYAICBgMHASCwBAMCGuoHCAjpGgIDBLEBHgcGBgJiHXb+uQgHBgQBAgTUHgECBAUHCAkIAQ4BDgcJBAQEBwQDHdMEAgMFBgf+tHYDAgMEBAQEBQUEBAQEAwICnwMDBgIDNbAGBgYE/uCBAgKBAR0HBgYGsDQCBAYD3Fr+9jwDBAcHBQgIB9T+twUIBwcEAwKVlQIBAgIFBwgJAUnUBwgJCAcFBD0BCgQDBAICAgEBAgICBAMAAAAAEgDeAAEAAAAAAAAAAQAAAAEAAAAAAAEADwABAAEAAAAAAAIABwAQAAEAAAAAAAMADwAXAAEAAAAAAAQADwAmAAEAAAAAAAUACwA1AAEAAAAAAAYADwBAAAEAAAAAAAoALABPAAEAAAAAAAsAEgB7AAMAAQQJAAAAAgCNAAMAAQQJAAEAHgCPAAMAAQQJAAIADgCtAAMAAQQJAAMAHgC7AAMAAQQJAAQAHgDZAAMAAQQJAAUAFgD3AAMAAQQJAAYAHgENAAMAAQQJAAoAWAErAAMAAQQJAAsAJAGDIHJhdGluZy10ZW1wbGF0ZVJlZ3VsYXJyYXRpbmctdGVtcGxhdGVyYXRpbmctdGVtcGxhdGVWZXJzaW9uIDEuMHJhdGluZy10ZW1wbGF0ZUZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAcgBhAHQAaQBuAGcALQB0AGUAbQBwAGwAYQB0AGUAUgBlAGcAdQBsAGEAcgByAGEAdABpAG4AZwAtAHQAZQBtAHAAbABhAHQAZQByAGEAdABpAG4AZwAtAHQAZQBtAHAAbABhAHQAZQBWAGUAcgBzAGkAbwBuACAAMQAuADAAcgBhAHQAaQBuAGcALQB0AGUAbQBwAGwAYQB0AGUARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwECAQMBBAAJZmlsbC1zdGFyCmVtcHR5LXN0YXIAAA==) format('truetype');
  font-weight: normal;
  font-style: normal;
}

[class^="sf-icon-"],
[class*=" sf-icon-"] {
  font-family: 'rating-template' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.sf-icon-fill-star:before {
  content: "\e700";
}

.sf-icon-empty-star:before {
  content: "\e701";
}

</style>


