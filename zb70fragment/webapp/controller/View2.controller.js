sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    
    return Controller.extend("com.demo.zb70fragment.controller.View2", {
        onInit() {
        },
        onPressback: function() {
          this.getOwnerComponent().getRouter().navTo("RouteView1");
        } 
    });
});

