sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/demo/zformatter/model/formatter"
],
function (Controller, formatter) {
    "use strict";

    return Controller.extend("com.demo.zformatter.controller.View1", {
        f: formatter,
        onInit: function () {

        }
    });
});
