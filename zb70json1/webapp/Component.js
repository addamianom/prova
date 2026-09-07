/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/demo/zb70json1/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.demo.zb70json1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                // json model
                var oModel = this.getModel(); // gives odata model
                var empMolel = this.getModel("empModel"); // gives json model 
                oModel.read("/EmployeeSet", {
                    success: function(data) {
                        empMolel.setData(data);
                        },
                    error:function(error) {
                        console.log(error);
                    }
                });
            }
    
        });
    }
);