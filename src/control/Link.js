sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("gallery.control.Link", {
        metadata: {
            properties: {
                text: { type: "string" },
                active: { type: "boolean", defaultValue: false}
            },
            events: {
                click: {}
            }
        },

        onAfterRendering: function () {
            this.$().click(() => this.fireEvent("click"));
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <a ui5ControlData={oC} class={{link: true, item: true, active: oC.getActive()}}>
                { oC.getText() }
                </a>
            );
        }
    });

});
