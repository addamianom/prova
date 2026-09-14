sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70jsonlist/model/formatter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"

],
    function (Controller, formatter, JSONModel, Filter, FilterOperator, Sorte) {
        "use strict";

        return Controller.extend("com.demo.zb70jsonlist.controller.View1", {
            fr: formatter,
            onInit: function () {

            },
            onPress: function () {

                this.getOwnerComponent().getRouter().navTo("RouteView2");
                // let oRouter = this().getOwnerComponent().getRouter();
                // oRouter.navTo("RouteView2");
            },
            onSelEmp: function (oEvent) {
                // 1. Recuperi l'elemento selezionato (funziona sia per List che per Table)
                var oSelectedItem = oEvent.getParameter("listItem") || oEvent.getSource();

                // 2. Recuperi il valore della proprietà "Empid" dal modello
                var sEmpId = oSelectedItem.getBindingContext("empModel").getProperty("Empid");

                // 3. Navighi alla seconda view passando l'Empid
                this.getOwnerComponent().getRouter().navTo("RouteView2", {
                    Index: sEmpId
                });
              //  this.getOwnerComponent().getRouter().navTo("RouteView2", { Index: index });
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
                this.getView().byId("idlist").getBinding("items").filter(afilter);

            },
            sortAsc: function () {
                var oSorter = new Sorter("Name", false);
                this.getView().byId("idlist").getBinding("items").sort(oSorter);

            },
            sortDesc: function () {
                var oSorter = new Sorter("Name", true);
                this.getView().byId("idlist").getBinding("items").sort(oSorter);
            }

        });
    });

