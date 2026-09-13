
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
        },
        onSelRelCB: function (oEvent) {
             var serrel = oEvent.getParameter("selectedItem").getText();
            console.log(serrel);
        } ,
        onSelFin: function (oEvent) {
            
           var aRelitems = oEvent.getParameter("selectedItems");
           for (var i=0;i<aRelitems.length;i++) {
            
            console.log(aRelitems[i].getText());
           }
           },

           onSelrelb: function (oEvent) {
             var index = oEvent.getParameter("selectedIndex");
             if (index=== 0 ) {
                console.log("Italian");
             } else {         console.log("English"); }
                  
        
        
        
        }
           


        
    });
});
