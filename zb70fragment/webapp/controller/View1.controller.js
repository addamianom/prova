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
            var value = oEvent.getParameter("newValue");
            var afilter = [];
            if (value !== "") {
                var oFilter = new Filter("Name", FilterOperator.Contains, value);

                // Crea il filtro per la colonna Skill
                var oFilterSkill = new sap.ui.model.Filter("Skill", FilterOperator.Contains, value);

                // Unisce i due filtri in un unico filtro logico OR (and = false)
                var oCombinedFilter = new sap.ui.model.Filter({
                    filters: [oFilter, oFilterSkill],
                    and: false
                });


                afilter.push(oCombinedFilter);

            }
            this.getView().byId("idtable").getBinding("items").filter(afilter);

        },
        sortAsc: function () {
            var oSorter = new Sorter("Name", false);
            this.getView().byId("idtable").getBinding("items").sort(oSorter);

        },

        sortDesc: function () {
            var oSorter = new Sorter("Name", true);
            this.getView().byId("idtable").getBinding("items").sort(oSorter);
        }

    });


});


