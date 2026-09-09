sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70fragment/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], (Controller, formatter, Filter, FilterOperator, Sorter) => {
    "use strict";

    return Controller.extend("com.demo.zb70fragment.controller.View1", {
        f: formatter,
        onInit() {
        },
        onPress: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
            // let oRouter = this().getOwnerComponent().getRouter();
            // oRouter.navTo("RouteView2");
        },
        onSelectChange: function (oEvent) {
            // Handle selection change event
        },
        onSearch: function (oEvent) {
            // Handle search event
             var value = oEvent.getParameter("NewValue");
            var afilter = [];
            if (value !== "") {
                var oFilter = new Filter("empModel>Name", FilterOperator.Contains, value);
                afilter.push(oFilter);
            }
            this.getView().byId("idtable").getBinding("items").filter(afilter);
           
        }
        
    });
            

});


