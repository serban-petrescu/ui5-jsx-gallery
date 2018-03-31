sap.ui.define([
    "jquery.sap.global",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (jQuery, JSONModel, Device) {
    "use strict";

    return {
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createMainModel: function (i18n) {
            return new JSONModel({

            });
        }
    };

});
