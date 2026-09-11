sap.ui.define([
    "sap/ui/core/mvc/Controller",
 "com/demo/zb70jsonui/model/formatter",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, formatter, JSONModel) {
        "use strict";

        return Controller.extend("com.demo.zb70jsonui.controller.View2", {
           fr:formatter,
            onInit: function () {
                this.getOwnerComponent().getRouter().
                    getRoute("RouteView2").attachPatternMatched(this.onPatternMatched, this);
            },
            onPatternMatched: function () {
               
            },
            onBack: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }

        });
    });

