
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Image, Link, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteObj":quickToolbarSettings="quickToolbarSettings" :height="340" :toolbarSettings="toolbarSettings">
        <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content,and return the valid <a href="https://ej2.syncfusion.com/home/" target="_blank">HTML markup</a> or
        <a href="https://ej2.syncfusion.com/home/" target="_blank">markdown</a>
        of the content</p>
        <p><b>Key features:</b></p>
          <ul><li><p>Provides IFRAME and DIV modes</p></li>
          <li><p>Capable of handling markdown editing.</p></li>
          <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
          <li><p>Provides a fully customizable toolbar.</p></li>
          <li><p>Provides HTML view to edit the source directly for developers.</p></li>
          <li><p>Supports third-party library integration.</p></li>
          <li><p>Allows preview of modified content before saving it.</p></li>
          <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
          </ul></ejs-richtexteditor>
        </div>
    </div>
</div>

</div>
`,

     data: function() {
        return {
        height: 400,
        quickToolbarSettings: {
            image: [
                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
                'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension',
            ],
            link: ['Open', 'Edit', 'UnLink']
        },
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        },
        };
    },
    provide:{
        richtexteditor:[Toolbar, Image, Link, HtmlEditor, QuickToolbar]
    }

});