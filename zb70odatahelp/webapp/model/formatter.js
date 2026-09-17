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
        },

      colorStatus: function (Status) {
            if (Status === "PERMANENT") {
                return "Success";
            } else  {
                return "Error";
            }
          },

          DateFormat: function (Doj) {
            var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
                pattern: "dd-MM-yyyy"}, sap.ui.getCore().getConfiguration().getLocale());
            return oDateFormat.format(new Date(Doj));
          }


      };
    });
