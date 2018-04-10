sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("gallery.control.Event", {
        metadata: {
            properties: {
                profile: { type: "sap.ui.core.URI" },
                name: { type: "string" },
                title: { type: "string" },
                date: { type: "string" },
                likes: { type: "int" },
                comments: { type: "int" },
                images: { type: "string[]" }
            }
        },

        onAfterRendering: function () {
            this.$().find("img").click(() => this.fireEvent("click"));
        },

        renderer: function (oRm, oC) {
            oRm.render(<div ui5ControlData={ oC } class="event">
                <div class="label"><img src={ oC.getProfile() } /></div>
                <div class="content">
                    <div class="summary">
                        <a class="user">{ oC.getName() }</a>
                        { " " + oC.getTitle() }
                        <div class="date">{ oC.getDate() }</div>
                    </div>
                    <div class="extra images">
                    {
                        (oC.getImages() || []).forEach(i => (
                            <a><img src={ i }/></a>
                        ))
                    }
                    </div>
                    <div class="meta">
                        <a class="like"><i class="like icon"></i>{ oC.getLikes() }</a>
                        <a class="comment"><i class="comment icon"></i>{ oC.getComments() }</a>
                    </div>
                </div>
            </div>
            );
        }
    });

});
