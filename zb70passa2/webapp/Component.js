/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/demo/zb70passa2/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("com.demo.zb70passa2.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
               // json model 1 testata
                var oModel1 = new JSONModel({
                    id:"",
                    order:""
                });
                this.setModel(oModel1, "testata");

                // json model2
                var oModel = this.getModel(); // gives odata model
                var empModel = this.getModel("empModel"); // gives json model 
              
                oModel.read("/EmployeeSet", {
                    success: function(data) {
                        empModel.setData(data);
                        },
                    error:function(error) {
                        console.log(error);
                    }
                }); 

                 // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                // enable routing
                this.getRouter().initialize();
            }

        });
    }
);