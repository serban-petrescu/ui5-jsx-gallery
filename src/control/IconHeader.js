sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("gallery.control.IconHeader", {
        metadata: {
            properties: {
                icon: { type: "string" },
                title: { type: "string" },
                subtitle: { type: "string" }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={oC}>
                    <h2 class="ui center aligned icon header">
                        <i class={["circular", oC.getIcon(),"icon"]}></i>
                        { oC.getTitle() || "" }
                    </h2>
                    <div class="ui center aligned">
                        { oC.getSubtitle() || "" }
                    </div>
                </div>
            );
        }
    });

});
