sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70fragment/model/formatter"
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("com.demo.zb70fragment.controller.View1", {
        f: formatter,
        onInit() {
        },
        onPress: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
            // let oRouter = this().getOwnerComponent().getRouter();
            // oRouter.navTo("RouteView2");
        }
    });
});
