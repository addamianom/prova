sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70passa/model/formatter"

],
function (Controller, formatter) {
    "use strict";

    return Controller.extend("com.demo.zb70passa.controller.View1", {
        f: formatter,
        onInit: function () {

        },
        onSubmit: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
           // let oRouter = this().getOwnerComponent().getRouter();
            // oRouter.navTo("RouteView2");
        }
    });
});
