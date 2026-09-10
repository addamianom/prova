sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70passa1/model/formatter",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, formatter, JSONModel) {
        "use strict";

        return Controller.extend("com.demo.zb70passa1.controller.View2", {
           f: formatter,
            onInit: function () {
                this.getOwnerComponent().getRouter().
                    getRoute("RouteView2").attachPatternMatched(this.onPatternMatched, this);
            },
            onPatternMatched: function () {
                var id = this.getOwnerComponent().getModel("testata").getProperty("/id");
                var order = this.getOwnerComponent().getModel("testata").getProperty("/order");
                this.getView().byId("inpid1").setText(id);
                this.getView().byId("inporder1").setText(order);
            },
            onBack: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }

        });
    });
