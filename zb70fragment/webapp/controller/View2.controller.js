sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "com/demo/zb70fragment/model/formatter"
], (Controller, formatter) => {
    "use strict";
    
    return Controller.extend("com.demo.zb70fragment.controller.View2", {
        onInit() {
        },
        onPressback: function() {
          this.getOwnerComponent().getRouter().navTo("RouteView1");
        } 
    });
});

