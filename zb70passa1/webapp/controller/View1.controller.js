sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70passa1/model/formatter",
    "sap/ui/model/json/JSONModel"
],
function (Controller, formatter, JSONModel) {
    "use strict";

    return Controller.extend("com.demo.zb70passa1.controller.View1", {
        fr: formatter,
        onInit: function () {

        },
        onPress: function () {
            var id = this.getView().byId("inpid").getValue();
            var order = this.getView().byId("inpOrderno").getValue();
            this.getOwnerComponent().getModel().setProperty("/id", id);
            this.getOwnerComponent().getModel().setProperty("/order", order);
            this.getOwnerComponent().getRouter().navTo("RouteView2");
           // let oRouter = this().getOwnerComponent().getRouter();
            // oRouter.navTo("RouteView2");
        }
    });
});
