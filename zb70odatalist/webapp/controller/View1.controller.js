sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70odatalist/model/formatter",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, formatter, JSONModel) {
        "use strict";

        return Controller.extend("com.demo.zb70odatalist.controller.View1", {
            fr: formatter,
            onInit: function () {

            },
            onPress: function () {

                this.getOwnerComponent().getRouter().navTo("RouteView2");
                // let oRouter = this().getOwnerComponent().getRouter();
                // oRouter.navTo("RouteView2");
            },
            onSelEmp: function (oEvent) {
            /* var employe =  oEvent.getParameter("listItem").getBindingContext().getProperty("Empid");
                console.log(employe); */
              var  empid =  oEvent.getParameter("listItem").getBindingContext().getProperty("Empid");

            // nel json model
               // var sPath =  oEvent.getParameter("listItem").getBindingContext().getPath();
               // var index = sPath.split("/")[1];
               //  alert(index);
               this.getOwnerComponent().getRouter().navTo("RouteView2", { Index: empid });
            }
            

        });
    });
