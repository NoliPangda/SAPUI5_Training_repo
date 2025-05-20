sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        
        onInit: function () {
            // Initialization logic if needed
        },

        onSave: function () {
            const name = this.byId("inputName").getValue();
            const street = this.byId("inputStreet").getValue();
            const number = this.byId("inputNo").getValue();
            const zip = this.byId("inputZip").getValue();
            const city = this.byId("inputCity").getValue();
            const country = this.byId("cboxCountry").getSelectedItem();

            const countryText = country ? country.getText() : "";

            const summary = 
                `Saved:\nName: ${name}\nStreet/No.: ${street} ${number}\nZIP/City: ${zip} ${city}\nCountry: ${countryText}`;

            MessageToast.show(summary);
        },

        onClear: function () {
            this.byId("inputName").setValue("");
            this.byId("inputStreet").setValue("");
            this.byId("inputNo").setValue("");
            this.byId("inputZip").setValue("");
            this.byId("inputCity").setValue("");
            this.byId("cboxCountry").setSelectedKey(null);
        }
    });
});