sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";


    return Controller.extend("com.demo.zb70filter1.controller.View1", {
        onInit: function () {

        },

         onFilterSearch: function () {
            var aFilters = [];

            // 1. Get selected value from Status ComboBox
            var oStatusComboBox = this.byId("idStatusFilter");
            var sSelectedStatus = oStatusComboBox.getSelectedKey(); // Extracts the 'key' property
            
            if (sSelectedStatus) {
                var oStatusFilter = new Filter({
                    path: "Status",
                    operator: FilterOperator.EQ, // EQ is ideal for strict status/dropdown values in OData
                    value1: sSelectedStatus
                });
                aFilters.push(oStatusFilter);
            }

            // 2. Get selected value from Skill ComboBox
            var oSkillComboBox = this.byId("idSkillFilter");
            var sSelectedSkill = oSkillComboBox.getSelectedKey();
            
            if (sSelectedSkill) {
                var oSkillFilter = new Filter({
                    path: "Skill",
                    operator: FilterOperator.EQ,
                    value1: sSelectedSkill
                });
                aFilters.push(oSkillFilter);
            }

            // 3. Apply the combined filters to the table rows binding
            var oTable = this.byId("idtable");
            var oBinding = oTable.getBinding("items");

            if (oBinding) {
                // Filters pushed into the array act as an implicit "AND" condition
                oBinding.filter(aFilters);
            } else {
                console.error("Binding for table items could not be found.");
            }
        }

        
    });
});
