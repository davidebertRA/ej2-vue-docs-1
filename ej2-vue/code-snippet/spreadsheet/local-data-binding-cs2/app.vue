

<template>
   <ejs-spreadsheet ref="spreadsheet" locale="fr-CH">
   <e-sheets>
          <e-sheet>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
</template>

<script>
import Vue from "vue";
import { L10n } from '@syncfusion/ej2-base';
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);

L10n.load({
    'fr-CH': {
        'spreadsheet': {
            'File': 'Fichier',
            'Home': 'Accueil',
            'Insert': 'Insérer',
            'Formulas': 'Formules',
            'Data': 'Les données',
            'View': 'Vue',
            'Cut': 'Coupe',
            'Copy': 'Copie',
            'Paste': 'Pâte',
            'PasteSpecial': 'Pâte spéciale',
            'All': 'Tous les',
            'Values': 'Valeurs',
            'Formats': 'Les formats',
            'Font': 'fonte',
            'FontSize': 'Taille de police',
            'Bold': 'Audacieux',
            'Italic': 'Italique',
            'Underline': 'Souligner',
            'Strikethrough': 'Barré',
            'TextColor': 'Couleur du texte',
            'FillColor': 'La couleur de remplissage',
            'HorizontalAlignment': 'Alignement horizontal',
            'AlignLeft': 'Alignez à gauche',
            'AlignCenter': 'centre',
            'AlignRight': 'Aligner à droite',
            'VerticalAlignment': 'Alignement vertical',
            'AlignTop': 'Aligner en haut',
            'AlignMiddle': 'Aligner le milieu',
            'AlignBottom': 'Aligner le bas',
            'InsertFunction': 'Insérer une fonction',
            'Delete': 'Effacer',
            'Rename': 'Rebaptiser',
            'Hide': 'Cacher',
            'Unhide': 'Démasquer',
            'NumberFormat': 'Nombre Format',
        }
    }
});

export default {
   data: () => {
    return {
      dataSource: defaultData,
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
 @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
 @import "../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css";
</style>


