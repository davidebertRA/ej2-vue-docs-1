---
layout: post
title: Track changes in Vue Document editor component | Syncfusion
description: Learn here all about Track changes in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Track changes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Track changes in Vue Document editor component

Track Changes allows you to keep a record of changes or edits made to a document. You can then choose to accept or reject the modifications. It is a useful tool for managing changes made by several reviewers to the same document. If track changes option is enabled, all editing operations are preserved as revisions in Document Editor.

## Enable track changes in Document Editor

The following example demonstrates how to enable track changes.

```ts
<ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container' :enableTrackChanges='true'></ejs-documenteditorcontainer>
```

## Get all tracked revisions

The following example demonstrate how to get all tracked revision from current document.

```ts
<ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container' :enableTrackChanges='true'></ejs-documenteditorcontainer>

/**
 * Get revisions from the current document
 */
let revisions : RevisionCollection = this.$refs.container.documentEditor.revisions;
```

## Accept or Reject all changes programmatically

The following example demonstrates how to accept/reject all changes.

```ts
<ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container' :enableTrackChanges='true'></ejs-documenteditorcontainer>

/**
 * Get revisions from the current document
 */
let revisions : RevisionCollection = this.$refs.container.documentEditor.revisions;

/**
 * Accept all tracked changes
 */
revisions.acceptAll();

/**
 * Reject all tracked changes
 */
revisions.rejectAll();
```

## Accept or reject a specific revision

The following example demonstrates how to accept/reject specific revision in the Document Editor.

```ts
/**
 * Get revisions from the current document
 */
let revisions : RevisionCollection = this.$refs.container.documentEditor.revisions;
/**
 * Accept specific changes
 */
revisions.get(0).accept();
/**
 * Reject specific changes
 */
revisions.get(1).reject();
```

## Navigate between the tracked changes

The following example demonstrates how to navigate tracked revision programmatically.

```ts
<ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container' :enableTrackChanges='true'></ejs-documenteditorcontainer>
/**
 * Navigate to next tracked change from the current selection.
 */
this.$refs.container.documentEditor.selection.navigateNextRevision();

/**
 * Navigate to previous tracked change from the current selection.
 */
this.$refs.container.documentEditor.selection.navigatePreviousRevision();
```

## Filtering changes based on user

In DocumentEditor, we have built-in review panel in which we have provided support for filtering changes based on the user.

![Track changes](images/track-changes.png)

## Protect the document in track changes only mode

Document Editor provides support for protecting the document with `RevisionsOnly` protection. In this protection, all the users are allowed to view the document and do their corrections, but they cannot accept or reject any tracked changes in the document. Later, the author can view their corrections and accept or reject the changes.

Document editor provides an option to protect and unprotect document using [`enforceProtection`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor/#enforceprotection) and [`stopProtection`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor/#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document editor container.

```ts
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return { serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/'};
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar]
    },
    mounted(){
    //enforce protection
    this.$refs.container.ej2Instances.documentEditor.editor.enforceProtection('123','RevisionsOnly');
    //stop the document protection
    this.$refs.container.ej2Instances.documentEditor.editor.stopProtection('123');
    }
  }
</script>
```

Tracked changes only protection can be enabled in UI by using [Restrict Editing pane](../document-editor/document-management#restrict-editing-pane)

![Enable track changes only protection](images/tracked-changes.png)

>Note: In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly |RevisionsOnly`. In stop protection method, parameter denotes the password.

## Event

You can restrict the accept and reject changes based on the author name. The following example demonstrates how to restrict an author from accept/reject changes.

```ts

<template>
  <div>
    <div>
      <div>
        <DocumentEditorContainerComponent
          ref="container"
          style="display: block;"
          :height="'590px'"
          @beforeAcceptRejectChanges="beforeAcceptRejectChanges"
          :enableToolbar="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';
  
Vue.use(DocumentEditorContainerPlugin);

export default {
  components: {
    DocumentEditorContainerComponent
  },
  methods: {
    beforeAcceptRejectChanges(args) {
      // Check the author of the revision
      if (args.author !== 'Hary') {
        // Cancel the accept/reject action
        args.cancel = true;
      }
    }
  }
};
</script>