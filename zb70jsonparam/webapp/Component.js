/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "zb70jsonparam/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("zb70jsonparam.Component", {
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

    /*
              // json model
                var oModel = this.getModel(); // gives odata model
                var empModel = this.getModel("empModel"); // gives json model 
              
            oModel.read("/EmployeeSet", {
                    success: function(data) {
                        empModel.setData(data);
                        },
                    error:function(error) {
                        console.log(error);
                    }
                }); */


            }

        });
    }
);