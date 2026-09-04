sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.validation.validation.controller.View1", {
        onInit() {
        },

        onSubmit() {
            var empid = this.getView().byId("empid").getValue();
            if (empid === "") {
                this.getView().byId("empid").setValueState("Error");
                this.getView().byId("empid").setValueStateText("Employeid is mandatory please fill the field");
            } else {
                this.getView().byId("empid").setValueState("None");


                // var regex = /^[a-zA-Z ]+$/; Alphabet validation
                // var regex = /^[0-9]+$/; Numeric validation
                // employeeid must be alphanumeric validation
                var regex = /^[a-zA-Z0-9 ]+$/;
                if (!empid.match(regex)) {
                    this.getView().byId("empid").setValueState("Error");
                    this.getView().byId("empid").setValueStateText("Employeid must contain only letters and numbers");
                } else {
                    this.getView().byId("empid").setValueState("None");

                    // format validation
                    if (empid.length < 10) {
                        this.getView().byId("empid").setValueState("Error");
                        this.getView().byId("empid").setValueStateText("Employeid must have 10 digits");
                    } else {
                        this.getView().byId("empid").setValueState("None");

                    }
                }
            }
        }
    });
});