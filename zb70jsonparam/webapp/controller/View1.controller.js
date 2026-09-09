sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "com/demo/zb70jsonparam/model/formatter",

],
function (Controller) {
    "use strict";
    
    return Controller.extend("zb70jsonparam.controller.View1", {
         f: formatter,

        onInit: function () {

        },

         onSubmit: function () {
         var id = this.getView().byId("inpid").getValue();
         
         this.getOwnerComponent().getRouter().navTo("RouteView2");

        }
        
    });
});
