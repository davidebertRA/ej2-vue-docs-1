



<template>
  <div id="app">
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :height="height"
    :allowExcelExport="allowExcelExport" :allowConditionalFormatting="allowConditionalFormatting" :allowPdfExport="allowPdfExport"
    :showToolbar="showToolbar" :allowNumberFormatting="allowNumberFormatting" :allowCalculatedField="allowCalculatedField" :showFieldList="showFieldList"
    :toolbar="toolbar" :saveReport="saveReport" :loadReport="loadReport" :fetchReport="fetchReport" :renameReport="renameReport" :removeReport="removeReport" 
    :newReport="newReport" :displayOption="displayOption" :dataBound="ondataBound"> </ejs-pivotview>
</div>
</template >

<script>
import Vue from "vue";
import {
  PivotViewPlugin,
  FieldList,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting,
  NumberFormatting
} from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

function loadReport(args) {
    var reportCollection = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item) {
        if (args.reportName === item.reportName) {
            args.report = item.report;
        }
    });
    if (args.report) {
        let pivotObj = document.getElementById('pivotview').ej2_instances[0];
        pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
    }
}

var isInitial = true;

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      gridSettings: { columnWidth: 140 },
      allowExcelExport: true,
      allowConditionalFormatting: true,
      allowNumberFormatting: true,
      allowPdfExport: true,
      displayOption: { view:'Both' },
      showToolbar: true,
      allowCalculatedField: true,
      showFieldList: true,
      toolbar: [
        "New",
        "Save",
        "SaveAs",
        "Rename",
        "Remove",
        "Load",
        "Grid",
        "Chart",
        "Export",
        "SubTotal",
        "GrandTotal",
        "ConditionalFormatting",
        "NumberFormatting",
        "FieldList"
      ]
    };
  },
  methods: {
    saveReport: function(args) {
      let reports = [];
      let isSaved = false;
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reports = JSON.parse(localStorage.pivotviewReports);
      }
      if (args.report && args.reportName && args.reportName !== "") {
        reports.map(function(item) {
          if (args.reportName === item.reportName) {
            item.report = args.report;
            isSaved = true;
          }
        });
        if (!isSaved) {
          reports.push(args);
        }
        localStorage.pivotviewReports = JSON.stringify(reports);
      }
    },
    fetchReport: function(args) {
      let reportCollection = [];
      let reeportList = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function(item) {
        reeportList.push(item.reportName);
      });
      args.reportName = reeportList;
    },
    removeReport: function(args) {
      let reportCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      for (let i = 0; i < reportCollection.length; i++) {
        if (reportCollection[i].reportName === args.reportName) {
          reportCollection.splice(i, 1);
        }
      }
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportCollection);
      }
    },
    renameReport: function(args) {
      let reportCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function(item) {
        if (args.reportName === item.reportName) {
          item.reportName = args.rename;
        }
      });
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportCollection);
      }
    },
    newReport: function() {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.setProperties(
        {
          dataSourceSettings: {
            columns: [],
            rows: [],
            values: [],
            filters: []
          }
        },
        false
      );
    },
    loadReport: loadReport,
    ondataBound: function () {
        let pivotObj = document.getElementById('pivotview').ej2_instances[0];
        if (pivotObj && isInitial) {
            isInitial = false;
            pivotObj.toolbarModule.action = 'Load';
            pivotObj.toolbarModule.reportList.value = 'Default report';
            loadReport({ reportName: 'Default report' });
        }
    },
  },
  provide: {
    pivotview: [
      FieldList,
      CalculatedField,
      Toolbar,
      PDFExport,
      ExcelExport,
      ConditionalFormatting,
      NumberFormatting
    ]
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




