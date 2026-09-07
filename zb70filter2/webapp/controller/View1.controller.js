sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/Popover",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Button",
    "sap/m/Bar"
], function (Controller, Filter, FilterOperator, Popover, List, StandardListItem, Button, Bar) {
    "use strict";


    return Controller.extend("com.demo.zb70filter2.controller.View1", {
        onInit: function () {
            this._oActiveFilters = {};

            // Mantiene in memoria le CHIAVI selezionate per ciascuna colonna per ripresentarle all'utente
            this._oSelectedKeys = {
                "Status": [],
                "Skill": []
            };
        },

        onHeaderFilterPress: function (oEvent) {
            var oButton = oEvent.getSource();

            // Risale al VBox dell'header della colonna
            var oVBox = oButton.getParent();

            // Recupera il primo elemento del VBox (ovvero il controllo <Text>)
            var oTextControl = oVBox.getItems()[0];

            // Ottiene il testo contenuto (es. "Status" o "Skill")
            var sProperty = oTextControl ? oTextControl.getText() : "";

            if (!sProperty) {
                console.error("Impossibile determinare la proprietà della colonna per il filtraggio.");
                return;
            }

            // 1. Crea la Lista con modalità Multi-Selezione da mettere dentro al Popover
            var oList = new List({
                mode: "MultiSelect",
                includeItemInSelection: true
            });

            // 2. Popola gli elementi della lista in base alla colonna cliccata
            // NOTA: Se le chiavi nel tuo EntitySet OData sono minuscole o diverse, cambiale qui nel campo 'key'
            if (sProperty === "Status") {
                oList.addItem(new StandardListItem({ title: "Active", key: "Active" }));
                oList.addItem(new StandardListItem({ title: "Inactive", key: "Inactive" }));
                oList.addItem(new StandardListItem({ title: "PERMANENT", key: "Permanent" }));
            } else if (sProperty === "Skill") {
                oList.addItem(new StandardListItem({ title: "ABAP", key: "ABAP" }));
                oList.addItem(new StandardListItem({ title: "SAPUI5", key: "UI5" }));
                oList.addItem(new StandardListItem({ title: "SAP HANA", key: "HANA" }));
            } else {
                // Opzione di fallback per gestire dinamicamente altre colonne se necessario
                console.warn("Nessun valore preconfigurato per la colonna: " + sProperty);
                return;
            }

            // 3. Crea il Popover standard di SAP.M
            var oPopover = new Popover({
                title: "Filtra per " + sProperty,
                placement: "Bottom",
                contentWidth: "220px",
                content: [oList],
                footer: new Bar({
                    contentRight: [
                        new Button({
                            text: "OK",
                            type: "Emphasized",
                            press: function () {
                                var aSelectedItems = oList.getSelectedItems();
                                // Applica i filtri basandoti sulle selezioni dell'utente
                                this._applyHeaderFilter(sProperty, aSelectedItems);
                                oPopover.close();
                            }.bind(this)
                        }),
                        new Button({
                            text: "Annulla",
                            press: function () {
                                oPopover.close();
                            }
                        })
                    ]
                }),
                afterClose: function () {
                    // Distrugge l'istanza per evitare accumulo di ID duplicati in memoria
                    oPopover.destroy();
                }
            });

            // 4. Mostra il Popover agganciato al rispettivo bottone di filtro
            oPopover.openBy(oButton);
        },

        _applyHeaderFilter: function (sProperty, aSelectedItems) {
            // 1. Mappa il nome visibile della colonna al nome tecnico del campo OData
            // Nel tuo XML usi {oModel>Skill} e {oModel>Status}
            var sODataField = sProperty;
            if (sProperty === "Status") {
                sODataField = "Status"; // Assicurati che corrisponda al maiuscolo/minuscolo del tuo OData
            } else if (sProperty === "Skill") {
                sODataField = "Skill";  // Assicurati che corrisponda al maiuscolo/minuscolo del tuo OData
            }

            // 2. Mappa ciascun elemento selezionato nel popover
            var aPropertyFilters = aSelectedItems.map(function (oItem) {
                // Recupera la chiave tecnica salvata nell'oggetto personalizzato customData dell'Item
                var sSelectedKey = oItem.data("key");

                // Se .data("key") è vuoto, proviamo a prendere il titolo testuale come fallback
                if (!sSelectedKey) {
                    sSelectedKey = oItem.getTitle();
                }

                return new Filter(sODataField, FilterOperator.EQ, sSelectedKey);
            });

            // 3. Gestione dell'array dei filtri della colonna (OR se multipli)
            if (aPropertyFilters.length > 0) {
                this._oActiveFilters[sODataField] = new Filter({
                    filters: aPropertyFilters,
                    and: false
                });
            } else {
                delete this._oActiveFilters[sODataField];
            }

            // 4. Unione di tutte le colonne in AND
            var aFinalFilters = Object.values(this._oActiveFilters);

            // 5. Applica il filtro alla tabella
            var oTable = this.byId("idtable");
            var oBinding = oTable.getBinding("items");

            if (oBinding) {
                oBinding.filter(aFinalFilters);
            } else {
                console.error("Binding degli items della tabella non trovato.");
            }
        },
        onSubmit: function () {
            // Logica del pulsante Submit esistente
        },

        onResetAllFilters: function () {
            // 1. Svuota i filtri logici attivi
            this._oActiveFilters = {};

            // 2. Svuota la memoria delle chiavi selezionate nei Popover per ciascuna colonna
            this._oSelectedKeys = {
                "Status": [],
                "Skill": []
            };

            // 3. Recupera il binding della tabella
            var oTable = this.byId("idtable");
            var oBinding = oTable.getBinding("items");

            if (oBinding) {
                // 4. Passando un array vuoto, rimuove qualsiasi filtro attivo e rinfresca la tabella
                oBinding.filter([]);
                sap.m.MessageToast.show("Tutti i filtri sono stati azzerati");
            } else {
                console.error("Binding degli items della tabella non trovato.");
            }
        },



    });
});
