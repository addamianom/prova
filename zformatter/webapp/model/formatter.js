sap.ui.define(function () {
    "use strict";
    return {
        formatName: function (Name) {
            return "Mr. " + Name;
        },
        colorSkill: function (Skill) {
            if (Skill === "ABAP") {
                return "Success";
            } else if (Skill === "JAVA") {
                return "Warning";
            } else {
                return "Error";
            }
        }

      };
    });