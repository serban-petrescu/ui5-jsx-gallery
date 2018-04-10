sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("gallery.control.Page", {
        metadata: {
            aggregations: {
                content: { type: "sap.ui.core.Control", multiple: true }
            },
            defaultAggregation: "content"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={oC} class="ui pusher">
                    <div class="ui container">
                        {
                            (oC.getContent() || []).forEach(i => (
                                <ui5Control>{i}</ui5Control>
                            ))
                        }
                    </div>
                </div>
            );
        }
    });

});
