<template>
    <div id="app" class="barcodeStyle">
        <ejs-datamatrixgenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :value="value"
              :mode="mode"
            ></ejs-datamatrixgenerator>



    </div>
</template>
<style>
    .barcodeStyle {
            height: 150px;
            width: 200px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script setup>
import { DataMatrixGeneratorComponent as EjsDatamatrixgenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "200px";
const height = "150px";
const mode = "SVG";
const value = "Syncfusion";
        
</script>


