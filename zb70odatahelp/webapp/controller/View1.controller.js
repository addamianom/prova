sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zb70odatahelp/model/formatter",
    "sap/ui/model/json/JSONModel",
     "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"

],
    function (Controller, formatter, JSONModel,Filter, FilterOperator, Sorter ) {
        "use strict";

        return Controller.extend("com.demo.zb70odatahelp.controller.View1", {
            f: formatter,
            onInit: function () {

            },
            onPress: function () {

                this.getOwnerComponent().getRouter().navTo("RouteView2");
                // let oRouter = this().getOwnerComponent().getRouter();
                // oRouter.navTo("RouteView2");
            },
            onSelEmp: function (oEvent) {
                /* var employe =  oEvent.getParameter("listItem").getBindingContext().getProperty("Empid");
                    console.log(employe); */
                var empid = oEvent.getParameter("listItem").getBindingContext().getProperty("Empid");

                // nel json model
                // var sPath =  oEvent.getParameter("listItem").getBindingContext().getPath();
                // var index = sPath.split("/")[1];
                //  alert(index);
                this.getOwnerComponent().getRouter().navTo("RouteView2", { Index: empid });
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
                this.getView().byId("table").getBinding("items").filter(afilter);

            },
            sortAsc: function () {
                var oSorter = new Sorter("Name", false);
                this.getView().byId("table").getBinding("items").sort(oSorter);

            },

            sortDesc: function () {
                var oSorter = new Sorter("Name", true);
                this.getView().byId("table").getBinding("items").sort(oSorter);
            },

             onClose: function () {
              this._dialog.close();
           },
           onSelEmpHelp: function (oEvent) {
            
                // 2. Recuperi il valore della proprietà "Empid" dal modello
           var sEmpId = oEvent.getParameter("listItem").getBindingContext().getProperty("Empid");
               
              this.getView().byId("inpOrderno").setValue(sEmpId);
              if (this._dialog) {
                 this._dialog.close();
                } 
           } ,

             onValueHelpPress: function () {
                if (!this._dialog){

              this._dialog = sap.ui.xmlfragment(this.getView().getId(), 
                  "com.demo.zb70odatahelp.view.EmpF4Help", this);
                  this.getView().addDependent(this._dialog);
            }
                this._dialog.open();
             },

             onSearchhelp: function (oEvent) {
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
                this.getView().byId("table1").getBinding("items").filter(afilter);

            },
            sortAschelp: function () {
                var oSorter = new Sorter("Name", false);
                this.getView().byId("table1").getBinding("items").sort(oSorter);

            },
            sortDeschelp: function () {
                var oSorter = new Sorter("Name", true);
                this.getView().byId("table1").getBinding("items").sort(oSorter);
            }




        });
    });
