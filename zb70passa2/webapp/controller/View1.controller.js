sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70passa2/model/formatter",
    "sap/ui/model/json/JSONModel"
],
function (Controller, formatter, JSONModel) {
    "use strict";

    return Controller.extend("com.demo.zb70passa2.controller.View1", {
        f: formatter,
        onInit: function () {

        },
        onPress: function () {
           
            this.getOwnerComponent().getRouter().navTo("RouteView2");
           // let oRouter = this().getOwnerComponent().getRouter();
            // oRouter.navTo("RouteView2");
        }
    });
});
