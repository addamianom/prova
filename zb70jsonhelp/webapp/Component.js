/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/demo/zb70jsonhelp/model/models",
          "sap/ui/model/json/JSONModel"

    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("com.demo.zb70jsonhelp.Component", {
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

                 // var oModel = new JSONModel("model/data.json");

                const oModel = new sap.ui.model.json.JSONModel();
                const sPath = sap.ui.require.toUrl("com/demo/zb70jsonhelp/model/data.json");
                oModel.loadData(sPath);

                this.setModel(oModel, "testata");

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            
             // json model
                var oModel1 = this.getModel(); // gives odata model
                var empModel = this.getModel("empModel"); // gives json model 

                oModel1.read("/EmployeeSet", {
                    success: function (data) {
                        empModel.setData(data);
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            
            }
        });
    }
);