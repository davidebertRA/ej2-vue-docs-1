

<template>
      <div id="app">
          <ejs-documenteditor ref='documenteditor' id='container' pageOutline='#E0E0E0' height="370px" style="width: 100%;" :enablePrint='true' :enableSfdtExport='true'  :enableSelection='true' :enableContextMenu='true' :enableSearch='true' enableOptionsPane='true':enableWordExport='true' :enableTextExport='true' :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' enableHyperlinkDialog='true' :enableTableDialog='true' :enableBookmarkDialog='true':enableTableOfContentsDialog='true' :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true' :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true' :enableTableOptionsDialog='true' :enableRtl='true'  locale='ar-AE'></ejs-documenteditor>
      </div>
</template>
<script>
    import Vue from 'vue';
    import { DocumentEditorPlugin, DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';
    import { L10n, setCulture } from '@syncfusion/ej2-base';

    Vue.use(DocumentEditorPlugin);
    L10n.load({
    'ar-AE': {
        'documenteditor': {
        'Table': 'لجدول',
        'Row': 'لصف',
        'Cell': 'الخليه',
        'Ok': 'موافق',
        'Cancel': 'إلغاء الأمر',
        'Size': 'حجم',
        'Preferred Width': 'العرض المفضل',
        'Points': 'نقاط',
        'Percent': 'المائه',
        'Measure in': 'القياس في',
        'Alignment': 'محاذاه',
        'Left': 'ليسار',
        'Center': 'مركز',
        'Right': 'الحق',
        'Justify': 'تبرير',
        'Indent from left': 'مسافة بادئه من اليسار',
        'Borders and Shading': 'الحدود والتظليل',
        'Options': 'خيارات',
        'Specify height': 'تحديد الارتفاع',
        'At least': 'الاقل',
        'Exactly': 'تماما',
        'Row height is': 'ارتفاع الصف هو',
        'Allow row to break across pages': 'السماح بفصل الصف عبر الصفحات',
        'Repeat as header row at the top of each page': 'تكرار كصف راس في اعلي كل صفحه',
        'Vertical alignment': 'محاذاة عمودي',
        'Top': 'أعلى',
        'Bottom': 'اسفل',
        'Default cell margins': 'هوامش الخلية الافتراضية',
        'Default cell spacing': 'تباعد الخلايا الافتراضي',
        'Allow spacing between cells': 'السماح بالتباعد بين الخلايا',
        'Cell margins': 'هوامش الخلية',
        'Same as the whole table': 'نفس الجدول بأكمله',
        'Borders': 'الحدود',
        'None': 'اي',
        'Single': 'واحد',
        'Dot': 'نقطه',
        'DashSmallGap': 'داشسمجاب',
        'DashLargeGap': 'الاتحاد الخاص',
        'DashDot': 'داشدوت',
        'DashDotDot': 'ددهدودوت',
        'Double': 'انقر نقرا مزدوجا',
        'Triple': 'الثلاثي',
        'ThinThickSmallGap': 'فجوه صغيره سميكه رقيق',
        'ThickThinSmallGap': 'الفجوة الصغيرة رقيقه سميكه',
        'ThinThickThinSmallGap': 'صغيره سميكه رقيقه الفجوة الصغيرة',
        'ThinThickMediumGap': 'فجوه متوسطه سميك',
        'ThickThinMediumGap': 'سميكه الفجوة متوسطه رقيقه',
        'ThinThickThinMediumGap': 'رقيقه سميكه متوسطه الفجوة',
        'ThinThickLargeGap': 'الفجوة الكبيرة رقيقه سميكه',
        'ThickThinLargeGap': 'فجوه كبيره رقيقه سميك',
        'ThinThickThinLargeGap': 'رقيقه سميكه الفجوة الكبيرة',
        'SingleWavy': 'واحد مائج',
        'DoubleWavy': 'مزدوج مائج',
        'DashDotStroked': 'اندفاعه نقطه القوية',
        'Emboss3D': 'D3مزخرف',
        'Engrave3D': 'D3نقش',
        'Outset': 'البدايه',
        'Inset': 'الداخلي',
        'Thick': 'سميكه',
        'Style': 'نمط',
        'Width': 'عرض',
        'Height': 'ارتفاع',
        'Letter': 'رساله',
        'Tabloid': 'التابلويد',
        'Legal': 'القانونيه',
        'Statement': 'بيان',
        'Executive': 'التنفيذي',
        'A3': 'A3',
        'A4': 'A4',
        'A5': 'A5',
        'B4': 'B4',
        'B5': 'B5',
        'Custom Size': 'حجم مخصص',
        'Different odd and even': 'مختلفه غريبه وحتى',
        'Different first page': 'الصفحة الاولي مختلفه',
        'From edge': 'من الحافة',
        'Header': 'راس',
        'Footer': 'تذييل الصفحه',
        'Margin': 'الهوامش',
        'Paper': 'الورق',
        'Layout': 'تخطيط',
        'Orientation': 'التوجه',
        'Landscape': 'المناظر الطبيعيه',
        'Portrait': 'صوره',
        'Table Of Contents': 'جدول المحتويات',
        'Show page numbers': 'إظهار أرقام الصفحات',
        'Right align page numbers': 'محاذاة أرقام الصفحات إلى اليمين',
        'Nothing': 'شيء',
        'Tab leader': 'قائد علامة التبويب',
        'Show levels': 'إظهار المستويات',
        'Use hyperlinks instead of page numbers': 'استخدام الارتباطات التشعبية بدلا من أرقام الصفحات',
        'Build table of contents from': 'بناء جدول محتويات من',
        'Styles': 'انماط',
        'Available styles': 'الأنماط المتوفرة',
        'TOC level': 'مستوي جدول المحتويات',
        'Heading': 'عنوان',
        'Heading 1': 'عنوان 1',
        'Heading 2': 'عنوان 2',
        'Heading 3': 'عنوان 3',
        'Heading 4': 'عنوان 4',
        'Heading 5': 'عنوان 5',
        'Heading 6': 'عنوان 6',
        'List Paragraph': 'فقره القائمة',
        'Normal': 'العاديه',
        'Outline levels': 'مستويات المخطط التفصيلي',
        'Table entry fields': 'حقول إدخال الجدول',
        'Modify': 'تعديل',
        'Color': 'لون',
        'Setting': 'اعداد',
        'Box': 'مربع',
        'All': 'جميع',
        'Custom': 'المخصصه',
        'Preview': 'معاينه',
        'Shading': 'التظليل',
        'Fill': 'ملء',
        'Apply To': 'تنطبق علي',
        'Table Properties': 'خصائص الجدول',
        'Cell Options': 'خيارات الخلية',
        'Table Options': 'خيارات الجدول',
        'Insert Table': 'ادراج جدول',
        'Number of columns': 'عدد الاعمده',
        'Number of rows': 'عدد الصفوف',
        'Text to display': 'النص الذي سيتم عرضه',
        'Address': 'عنوان',
        'Insert Hyperlink': 'ادراج ارتباط تشعبي',
        'Edit Hyperlink': 'تحرير ارتباط تشعبي',
        'Insert': 'ادراج',
        'General': 'العامه',
        'Indentation': 'المسافه البادئه',
        'Before text': 'قبل النص',
        'Special': 'الخاصه',
        'First line': 'السطر الأول',
        'Hanging': 'معلقه',
        'After text': 'بعد النص',
        'By': 'من',
        'Before': 'قبل',
        'Line Spacing': 'تباعد الأسطر',
        'After': 'بعد',
        'At': 'في',
        'Multiple': 'متعدده',
        'Spacing': 'تباعد',
        'Define new Multilevel list': 'تحديد قائمه متعددة الاصعده جديده',
        'List level': 'مستوي القائمة',
        'Choose level to modify': 'اختر المستوي الذي تريد تعديله',
        'Level': 'مستوي',
        'Number format': 'تنسيق الأرقام',
        'Number style for this level': 'نمط الرقم لهذا المستوي',
        'Enter formatting for number': 'إدخال تنسيق لرقم',
        'Start at': 'بداية من',
        'Restart list after': 'أعاده تشغيل قائمه بعد',
        'Position': 'موقف',
        'Text indent at': 'المسافة البادئة للنص في',
        'Aligned at': 'محاذاة في',
        'Follow number with': 'اتبع الرقم مع',
        'Tab character': 'حرف علامة التبويب',
        'Space': 'الفضاء',
        'Arabic': 'العربية',
        'UpRoman': 'حتى الروماني',
        'LowRoman': 'الرومانية منخفضه',
        'UpLetter': '',
        'LowLetter': '',
        'Number': 'عدد',
        'Leading zero': 'يؤدي صفر',
        'Bullet': 'رصاصه',
        'Ordinal': 'الترتيبيه',
        'Ordinal Text': 'النص الترتيبي',
        'For East': 'للشرق',
        'No Restart': 'لا أعاده تشغيل',
        'Font': 'الخط',
        'Font style': 'نمط الخط',
        'Underline style': 'نمط التسطير',
        'Font color': 'لون الخط',
        'Effects': 'الاثار',
        'Strikethrough': 'يتوسطه',
        'Superscript': 'مرتفع',
        'Subscript': 'منخفض',
        'Double strikethrough': 'خط مزدوج يتوسطه خط',
        'Regular': 'العاديه',
        'Bold': 'جريئه',
        'Italic': 'مائل',
        'Cut': 'قطع',
        'Copy': 'نسخ',
        'Paste': 'لصق',
        'Hyperlink': 'الارتباط التشعبي',
        'Open Hyperlink': 'فتح ارتباط تشعبي',
        'Copy Hyperlink': 'نسخ ارتباط تشعبي',
        'Remove Hyperlink': 'أزاله ارتباط تشعبي',
        'Paragraph': 'الفقره',
        'Linked(Paragraph and Character)': 'مرتبط (فقره وحرف)',
        'Character': 'حرف',
        'Merge Cells': 'دمج الخلايا',
        'Insert Above': 'ادراج أعلاه',
        'Insert Below': 'ادراج أدناه',
        'Insert Left': 'ادراج إلى اليسار',
        'Insert Right': 'ادراج اليمين',
        'Delete': 'حذف',
        'Delete Table': 'حذف جدول',
        'Delete Row': 'حذف صف',
        'Delete Column': 'حذف عمود',
        'File Name': 'اسم الملف',
        'Format Type': 'نوع التنسيق',
        'Save': 'حفظ',
        'Navigation': 'التنقل',
        'Results': 'نتائج',
        'Replace': 'استبدال',
        'Replace All': 'استبدال الكل',
        'We replaced all': 'استبدلنا جميع',
        'Find': 'العثور',
        'No matches': 'لا توجد تطابقات',
        'All Done': 'كل القيام به',
        'Result': 'نتيجه',
        'of': 'من',
        'instances': 'الحالات',
        'with': 'مع',
        'Click to follow link': 'انقر لمتابعه الارتباط',
        'Continue Numbering': 'متابعه الترقيم',
        'Bookmark name': 'اسم الإشارة المرجعية',
        'Close': 'اغلاق',
        'Restart At': 'أعاده التشغيل عند',
        'Properties': 'خصائص',
        'Name': 'اسم',
        'Style type': 'نوع النمط',
        'Style based on': 'نمط استنادا إلى',
        'Style for following paragraph': 'نمط للفقرة التالية',
        'Formatting': 'التنسيق',
        'Numbering and Bullets': 'الترقيم والتعداد النقطي',
        'Numbering': 'ترقيم',
        'Update Field': 'تحديث الحقل',
        'Edit Field': 'تحرير الحقل',
        'Bookmark': 'الإشارة المرجعية',
        'Page Setup': 'اعداد الصفحة',
        'No bookmarks found': 'لم يتم العثور علي إشارات مرجعيه',
        'Number format tooltip information': 'تنسيق رقم أحادي المستوي:' + '</br>' + '[بادئه]% [مستوي الاعداد] [لاحقه]' + '</br>'
            // tslint:disable-next-line:max-line-length
            + 'علي سبيل االمثال ، "الفصل% 1." سيتم عرض الترقيم مثل' + '</br>' + 'الفصل الأول- البند' + '</br>' + 'الفصل الثاني- البند' + '</br>...'
            + '</br>' + 'الفصل نون-البند' + '</br>'
            // tslint:disable-next-line:max-line-length
            + '</br>' + 'تنسيق رقم متعدد الإعدادات:' + '</br>' + '[بادئه]% [مستوي المستوي]' + '</br>' + '[لاحقه] + [بادئه]%' + '</br>' + '[المستوي] [لاحقه]'
            + '</br>' + 'علي سبيل المثال ، "% 1.% 2." سيتم عرض الترقيم مثل' + '</br>' + '1.1 البند' + '</br>' + '1.2 البند' + '</br>...' + '</br>' + '1. نون-البند',
        'Format': 'تنسيق',
        'Create New Style': 'إنشاء نمط جديد',
        'Modify Style': 'تعديل النمط',
        'New': 'الجديد',
        'Bullets': 'الرصاص',
        'Use bookmarks': 'استخدام الإشارات المرجعية',
        'Table of Contents': 'جدول المحتويات',
        'AutoFit': 'الاحتواء',
        'AutoFit to Contents': 'احتواء تلقائي للمحتويات',
        'AutoFit to Window': 'احتواء تلقائي للإطار',
        'Fixed Column Width': 'عرض العمود الثابت',
        'Reset': 'اعاده تعيين',
        'Match case': 'حاله المباراة',
        'Whole words': 'كلمات كامل',
        'Add': 'اضافه',
        'Go To': 'الانتقال إلى',
        'Search for': 'البحث عن',
        'Replace with': 'استبدال',
        'TOC 1': 'جدول المحتويات 1',
        'TOC 2': 'جدول المحتويات 2',
        'TOC 3': 'جدول المحتويات 3',
        'TOC 4': 'جدول المحتويات 4',
        'TOC 5': 'جدول المحتويات 5',
        'TOC 6': 'جدول المحتويات 6',
        'TOC 7': 'جدول المحتويات 7',
        'TOC 8': 'جدول المحتويات 8',
        'TOC 9': 'جدول المحتويات 9',
        'Right-to-left': 'من اليمين إلى اليسار',
        'Left-to-right': 'من اليسار إلى اليمين',
        'Direction': 'الاتجاه',
        'Table direction': 'اتجاه الجدول',
        'Indent from right': 'مسافة بادئه من اليمين',
        'Page': 'صفحه',
        'Fit one page': 'احتواء صفحه واحد',
        'Fit page width': 'احتواء عرض الصفحة',
        // tslint:disable-next-line:max-line-length
        'The current page number in the document. Click or tap to navigate specific page.': 'رقم الصفحة الحالية في المستند. انقر أأو اضغط للتنقل في صفحه معينه'
        },
        'colorpicker': {
        'Apply': 'تطبيق',
        'Cancel': 'إلغاء الأمر',
        'ModeSwitcher': 'مفتاح كهربائي الوضع'
        }
    }
    });

    export default {
        data: function() {
            return {
            };
        },
        provide: {
            DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
        },
        mounted() {
            this.$refs.documenteditor.ej2Instances.locale = 'ar-AE';
            this.$refs.documenteditor.ej2Instances.isReadOnly = false;
            let sfdt: string = `{
            "sections": [
                {
                    "blocks": [
                        {
                            "characterFormat": {
                                "fontSize": 18.0,
                                "fontFamily": "Calibri",
                                "fontFamilyBidi": "Calibri"
                            },
                            "paragraphFormat": {
                                "beforeSpacing": 18.0,
                                "afterSpacing": 30.0,
                                "styleName": "Heading 1",
                                "bidi": true
                            },
                            "inlines": [
                                {
                                    "name": "_GoBack",
                                    "bookmarkType": 0
                                },
                                {
                                    "name": "_GoBack",
                                    "bookmarkType": 1
                                },
                                {
                                    "text": "اعمال المغامرة دورات",
                                    "characterFormat": {
                                        "fontSize": 18.0,
                                        "bidi": true,
                                        "fontSizeBidi": 18.0
                                    }
                                }
                            ]
                        }
                    ],
                    "headersFooters": {},
                    "sectionFormat": {
                        "headerDistance": 36.0,
                        "footerDistance": 36.0,
                        "pageWidth": 612.0,
                        "pageHeight": 792.0,
                        "leftMargin": 72.0,
                        "rightMargin": 72.0,
                        "topMargin": 72.0,
                        "bottomMargin": 72.0,
                        "differentFirstPage": false,
                        "differentOddAndEvenPages": false,
                        "bidi": false
                    }
                }
            ],
            "styles": []
            }`;
            this.$refs.documenteditor.open(sfdt);
        }
    });
</script>
<style>
      @import "../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>


