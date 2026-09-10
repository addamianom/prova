sap.ui.define([
    "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.demo.zb70passa.controller.View2", {

        onInit: function () {

 this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.PatternMatched, this);
 
},
        onPatternMatched: function () {
             this.getOwnerComponent().getModel().getProperty("/id");
            this.getOwnerComponent().getModel().getProperty("/order");

            this.getView().byId("inpid1").setText("id");
            this.getView().byId("inpOrderno1").setText("order");
 
        },
        onBack: function (){
             this.getOwnerComponent().getRouter().navTo("RouteView1");
              
        }

        });
});
