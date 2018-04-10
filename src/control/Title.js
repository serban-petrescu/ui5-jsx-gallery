sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("gallery.control.Title", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                subtitle: {
                    type: "string"
                }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={oC} class="title">
                    <h1 class="ui center aligned header">
                    { oC.getTitle() || "" }
                    </h1>
                    <div class="ui center aligned subtitle">
                        { oC.getSubtitle() || "" }
                    </div>
                </div>
            );
        }
    });

});
