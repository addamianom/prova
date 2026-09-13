
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70jsonui/model/formatter",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, formatter, JSONModel) {
        "use strict";

        return Controller.extend("com.demo.zb70jsonui.controller.View1", {
            fr: formatter,
            onInit: function () {

            },
            onPress: function () {

                this.getOwnerComponent().getRouter().navTo("RouteView2");
                // let oRouter = this().getOwnerComponent().getRouter();
                // oRouter.navTo("RouteView2");
            },
            onSelRealtion: function (oEvent) {
                var serrel = oEvent.getParameter("selectedItem").getText();
                console.log(serrel);

                var oModel = this.getView().getModel("testata");
                oModel.setProperty("/select", serrel);
            },
            onSelRelCB: function (oEvent) {
                var serrel = oEvent.getParameter("selectedItem").getText();
                console.log(serrel);

                var oModel = this.getView().getModel("testata");
                oModel.setProperty("/combobox", serrel);
            },
            onSelFin: function (oEvent) {
                var serrel;
                var aRelitems = oEvent.getParameter("selectedItems");
                for (var i = 0; i < aRelitems.length; i++) {
                  
                    var sText = aRelitems[i].getText();
                    console.log(sText);

                    // 2. Unisci i testi. Qui ho aggiunto una virgola e uno spazio ", " per separarli
                    if (serrel === "") {
                        serrel = sText;
                    } else {
                        serrel = serrel + ", " + sText;
                    }
                    var oModel = this.getView().getModel("testata");
                    if (oModel) {

                        oModel.setProperty("/multicombobox", serrel);
                    }
                }
            },

            onSelrelb: function (oEvent) {
                var oModel = this.getView().getModel("testata");
                var index = oEvent.getParameter("selectedIndex");
                if (index === 0) {
                    console.log("Italian");
                    oModel.setProperty("/radio", "Italian");
                } else {
                    if (index === 1) {
                        console.log("English");
                        oModel.setProperty("/radio", "English");
                    } else {
                        if (index === 2) {
                            console.log("French");
                            oModel.setProperty("/radio", "French");
                        }
                    }
                }

            },
            onSelChb: function (oEvent) {
                var bchecked = oEvent.getParameter("selected");
                if (bchecked === true) {
                    console.log("Selected")
                } else {
                    console.log("DeSelected")
                }
            }

        });
    });
