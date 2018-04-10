sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/Device"
], function (Control, Device) {

    return Control.extend("gallery.control.Menu", {
        metadata: {
            properties: {
                image: {
                    type: "sap.ui.core.URI"
                }
            },
            aggregations: {
                left: { type: "sap.ui.core.Control", multiple: true },
                right: { type: "sap.ui.core.Control", multiple: true }
            },
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={oC} class="ui menu inverted">
                    <div class="ui container">
                        <div class="item">
                            <img class="ui mini image" src={oC.getImage()} />
                        </div>
                        {
                            (oC.getLeft() || []).forEach(i => {
                                <ui5Control>{i}</ui5Control>
                            })
                        }
                        {
                            !Device.system.phone &&
                            <div class="right menu mobile hidden grid">
                                {
                                    (oC.getRight() || []).forEach(i => {
                                        <div class="item"><ui5Control>{i}</ui5Control></div>
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            );
        }
    });

});
