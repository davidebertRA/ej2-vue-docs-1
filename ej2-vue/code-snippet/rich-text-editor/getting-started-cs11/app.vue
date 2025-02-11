

<template>
  <ejs-richtexteditor ref="defaultRTE" :height="340" locale="de-DE">
    <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul>
      <li>
        <p>Provides IFRAME and DIV modes</p>
      </li>
      <li>
        <p>Capable of handling markdown editing.</p>
      </li>
      <li>
        <p>Contains a modular library to load the necessary functionality on demand.</p>
      </li>
      <li>
        <p>Provides a fully customizable toolbar.</p>
      </li>
      <li>
        <p>Provides HTML view to edit the source directly for developers.</p>
      </li>
      <li>
        <p>Supports third-party library integration.</p>
      </li>
      <li>
        <p>Allows preview of modified content before saving it.</p>
      </li>
      <li>
        <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
      </li>
    </ul>
  </ejs-richtexteditor>
</template>

<script>
  import Vue from 'vue';
  import { L10n } from '@syncfusion/ej2-base';
  import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

  L10n.load({
    'de-DE': {
      'richtexteditor': {
        "alignments": "Alignments",
        "justifyLeft": "Ausrichten von Text links",
        "justifyCenter": "Text-Zentrum",
        "justifyRight": "Ausrichten von Text rechts",
        "justifyFull": "rechtfertigen",
        "fontName": "Wählen Sie Schriftfamilie",
        "fontSize": "Wählen Sie Schriftgröße",
        "fontColor": "Wählen Sie die Farbe",
        "backgroundColor": "Hintergrundfarbe",
        "bold": "fett",
        "italic": "kursiv",
        "underline": "unterstreichen",
        "strikethrough": "Durchgestrichen",
        "clearAll": "Alles",
        "clearFormat": "Klar Format",
        "cut": "schneiden",
        "copy": "Kopieren",
        "paste": "Paste",
        "unorderedList": "Legen Sie ungeordnete Liste",
        "orderedList": "Geordnete Liste einfügen",
        "indent": "Einzug",
        "outdent": "Einzug verkleinern",
        "undo": "lösen",
        "redo": "Wiederherstellen",
        "superscript": "Überschrift",
        "subscript": "index",
        "createLink": "Link einfügen",
        "removeLink": "fjern Hyperlink",
        "openLink": "Open link",
        "editLink": "Edit link",
        "image": "Bild einfügen",
        "replace": "ersetzen",
        "align": "ausrichten",
        "caption": "Bildbeschriftung",
        "formats": "Formats",
        "remove": "Löschen",
        "insertLink": "Link einfügen",
        "display": "Anzeige",
        "alttext": "alternativer Text",
        "dimension": "Größe",
        "fullscreen": "Vollbild",
        "maximize": "Maximieren",
        "minimize": "minimieren",
        "zoomIn": "hineinzoomen",
        "zoomOut": "Rauszoomen",
        "upperCase": "Großbuchstaben",
        "lowerCase": "Kleinbuchstaben",
        "print": "Drucken",
        "sourcecode": "Quellcode",
        "preview": "Vorschau",
        "viewside": "Seite anzeigen",
        "insertcode": "Code eingeben",
        "linkText": "Displaytekst",
        "linkTooltipLabel": "tooltip",
        "linkWebUrl": "Webadres",
        "linkOpenInNewWindow": "Open de link in een nieuw venster",
        "linkHeader": "Link invoegen",
        "dialogInsert": "invoegen",
        "dialogCancel": "Annuleer",
        "dialogUpdate": "Bijwerken",
        "imageHeader": "Voeg afbeelding in",
        "imageLinkHeader": "U kunt ook een link van internet opgeven",
        "imageUploadMessage": "Zet hier een afbeelding neer of klik om te uploaden",
        "imageDeviceUploadMessage": "Klik hier om te uploaden",
        "imageAlternateText": "Alternatieve tekst",
        "alternateHeader": "Alternatieve tekst",
        "browse": "Blader",
        "imageUrl": "URL",
        "imageCaption": "onderschrift",
        "imageSizeHeader": "Afbeeldingsgrootte",
        "imageHeight": "Hoogte",
        "imageWidth": "Breedte",
        "textPlaceholder": "Text eingeben",
        "inserttablebtn": "Tabelle einfügen",
        "tabledialogHeader": "Tabelle einfügen",
        "tableWidth": "Breite",
        "cellpadding": "Zellauffüllung",
        "cellspacing": "Zellabstand",
        "columns": "Anzahl der Spalten",
        "rows": "Reihenanzahl",
        "tableRows": "Tabellenzeilen",
        "tableColumns": "Tabellenspalten",
        "tableCellHorizontalAlign": "Horizontale Ausrichtung der Tabellenzelle",
        "tableCellVerticalAlign": "Vertikale Ausrichtung der Tabellenzelle",
        "createTable": "Tabelle erstellen",
        "removeTable": "Tabelle entfernen",
        "tableHeader": "Tabellenkopfzeile",
        "tableRemove": "Tabelle entfernen",
        "tableCellBackground": "Tabellenzellenhintergrund",
        "tableEditProperties": "Eigenschaften der Tabellenbearbeitung",
        "styles": "Styles",
        "insertColumnLeft": "Spalte links einfügen",
        "insertColumnRight": "Spalte rechts einfügen",
        "deleteColumn": "Spalte löschen",
        "insertRowBefore": "Zeile vor einfügen",
        "insertRowAfter": "Zeile einfügen nach",
        "deleteRow": "Zeile löschen",
        "tableEditHeader": "Tabelle bearbeiten",
        "TableHeadingText": "Überschrift",
        "TableColText": "Col",
        "imageInsertLinkHeader": "Link einfügen",
        "editImageHeader": "Bild bearbeiten",
        "alignmentsDropDownLeft": "Linksbündig",
        "alignmentsDropDownCenter": "Im Zentrum anordnen",
        "alignmentsDropDownRight": "Rechts ausrichten",
        "alignmentsDropDownJustify": "Justize ausrichten",
        "imageDisplayDropDownInline": "In der Reihe",
        "imageDisplayDropDownBreak": "Brechen",
        "tableInsertRowDropDownBefore": "Reihe vorher einfügen",
        "tableInsertRowDropDownAfter": "Zeile danach einfügen",
        "tableInsertRowDropDownDelete": "Zeile löschen",
        "tableInsertColumnDropDownLeft": "Spalte links einfügen",
        "tableInsertColumnDropDownRight": "Spalte rechts einfügen",
        "tableInsertColumnDropDownDelete": "Spalte löschen",
        "tableVerticalAlignDropDownTop": "Top ausrichten",
        "tableVerticalAlignDropDownMiddle": "Mitte ausrichten",
        "tableVerticalAlignDropDownBottom": "Unten ausrichten",
        "tableStylesDropDownDashedBorder": "Gestrichelte Grenzen",
        "tableStylesDropDownAlternateRows": "Alternative Zeilen",
        "pasteFormat": "Format einfügen",
        "pasteFormatContent": "Wählen Sie die Formatierungsaktion aus",
        "plainText": "Einfacher Text",
        "cleanFormat": "sauber",
        "keepFormat": "Behalten",
        "formatsDropDownParagraph": "Absatz",
        "formatsDropDownCode": "Kodex",
        "formatsDropDownQuotation": "Zitat",
        "formatsDropDownHeading1": "Überschrift 1",
        "formatsDropDownHeading2": "Überschrift 2",
        "formatsDropDownHeading3": "Überschrift 3",
        "formatsDropDownHeading4": "Überschrift 4",
        "fontNameSegoeUI": "Segoe UI",
        "fontNameArial": "Arial",
        "fontNameGeorgia": "Georgia",
        "fontNameImpact": "Einschlag'",
        "fontNameTahoma": "Tahoma",
        "fontNameTimesNewRoman": "Mal Neu römisch",
        "fontNameVerdana": "Verdana"
      }
    }
  });

  Vue.use(RichTextEditorPlugin);

  export default {
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  }
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>


