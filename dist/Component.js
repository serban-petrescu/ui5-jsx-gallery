"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "gallery/model/models"], function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("gallery.Component", {

        metadata: {
            manifest: "json"
        },

        init: function init() {
            this.setModel(models.createDeviceModel(), "device");
            this.setModel(models.createMainModel(this.getModel("i18n").getResourceBundle()));
            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});
//# sourceMappingURL=Component.js.map
