sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70passa/model/formatter"

],
function (Controller, formatter) {
    "use strict";

    return Controller.extend("com.demo.zb70passa.controller.View1", {
        fr: formatter,
        onInit: function () {

        },
        onPress: function () {
            var id = this.getView().byId("inpid").getValue();
            var order = this.getView().byId("inpOrderno").getValue();

            this.getOwnerComponent().getModel("oModel").setProperty("/id", id);
            this.getOwnerComponent().getModel("oModel").setProperty("/order", order);

            this.getOwnerComponent().getRouter().navTo("RouteView2");

           // let oRouter = this().getOwnerComponent().getRouter();
            // oRouter.navTo("RouteView2");
        }
    });
});
