
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/demo/zb70jsonfield/model/models"
],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.demo.zb70jsonfield.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () {

                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");



                // json model
                var oModel = this.getModel(); // gives odata model
                var empModel = this.getModel("empModel"); // gives json model 
                oModel.read("/EmployeeSet"), {
                    success: function (data) {
                        empModel.setData(data);
                    },
                    error: function (error) {
                        console.log(error);
                    }
                }
            }

        });
    }
);