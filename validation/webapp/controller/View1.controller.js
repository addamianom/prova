sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.validation.validation.controller.View1", {
        onInit() {
        },

         onSubmit() {
            var empid = this.getView().byId("empid").getValue();
            if (empid === ""){
             this.getView().byId("empid").setValueState("Error");
              this.getView().byId("empid").setValueStateText("Employeid is mandatory please fill the field");
            } else {   
               this.getView().byId("empid").setValueState("None"); 
        }
    });
});