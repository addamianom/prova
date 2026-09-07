sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.demo.zb70filter.controller.View1", {
        onInit: function () {

        },

        onFilterEmployees: function (oEvent) {
            // 1. Get the search query from the event
            var sQuery = oEvent.getParameter("query");
            
            // 2. Build the filter array
            var aFilters = [];
            if (sQuery && sQuery.length > 0) {
                // Filters based on the 'Name' property of EmployeeSet (case-insensitive contains)
                var oFilter = new Filter("Name", FilterOperator.Contains, sQuery);
                aFilters.push(oFilter);
            }

            // 3. Get the table and its item binding
            var oTable = this.byId("idtable");
            var oBinding = oTable.getBinding("items");

            // 4. Apply the filter to the binding
            oBinding.filter(aFilters);
        },


    });
});
