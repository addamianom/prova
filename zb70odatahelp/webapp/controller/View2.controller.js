sap.ui.define([
    "sap/ui/core/mvc/Controller",
 "com/demo/zb70odatahelp/model/formatter",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, formatter, JSONModel) {
        "use strict";

        return Controller.extend("com.demo.zb70odatahelp.controller.View2", {
           fr:formatter,
            onInit: function () {
                this.getOwnerComponent().getRouter().
                    getRoute("RouteView2").attachPatternMatched(this.onPatternMatched, this);
            },
            onPatternMatched: function (oEvent) {
               var index = oEvent.getParameter("arguments").Index;
               this.getView().bindElement("/EmployeeSet('" + index + "')" );

            },
            onBack: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }

        });
    });

