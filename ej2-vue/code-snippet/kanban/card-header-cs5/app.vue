

<template>
  <div id="app">
    <table>
      <tbody>
        <td style="width: 200px">
          <ejs-textbox
            ref="SearchText"
            id="search_text"
            placeholder="Enter search text"
            showClearButton="true"
          ></ejs-textbox>
        </td>
        <td>
          <ejs-button
            id="reset_filter"
            class="e-btn"
            v-on:click.native="resetClick"
            >Reset</ejs-button
          >
        </td>
      </tbody>
    </table>
    <ejs-kanban
      id="kanban"
      ref="kanbanObj"
      keyField="Status"
      :dataSource="kanbanData"
      :cardSettings="cardSettings"
    >
      <e-columns>
        <e-column headerText="To Do" keyField="Open"></e-column>
        <e-column headerText="In Progress" keyField="InProgress"></e-column>
        <e-column headerText="Testing" keyField="Testing"></e-column>
        <e-column headerText="Done" keyField="Close"></e-column>
      </e-columns>
    </ejs-kanban>
  </div>
</template>

<script>
import Vue from "vue";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { extend } from "@syncfusion/ej2-base";
import { Query } from "@syncfusion/ej2-data";
import { kanbanData } from "./datasource.js";
Vue.use(KanbanPlugin);
Vue.use(TextBoxPlugin);
Vue.use(ButtonPlugin);
export default {
  data: function () {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      priorityData: ["None", "High", "Normal", "Low"],
    };
  },

  mounted: function () {
    this.kanbanObj = this.$refs.kanbanObj.ej2Instances;
    this.textObj = this.$refs.SearchText.ej2Instances;
    document.getElementById("search_text").addEventListener("keyup", (e) => {
      let searchValue = e.target.value;
      let searchQuery = new Query();
      if (searchValue !== "") {
        searchQuery = new Query().search(
          searchValue,
          ["Id", "Summary"],
          "contains",
          true
        );
      }
      this.kanbanObj.query = searchQuery;
    });
  },
  methods: {
    resetClick: function () {
      this.textObj.value = "";
      this.reset();
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-kanban/styles/material.css";
</style>



