sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("gallery.control.Feed", {
        metadata: {
            aggregations: {
                content: { type: "gallery.control.Event", multiple: true }
            },
            defaultAggregation: "content"
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={oC} class="ui feed">
                    {
                        (oC.getContent() || []).forEach(i => (
                            <ui5Control>{i}</ui5Control>
                        ))
                    }
                </div>
            );
        }
    });

});
