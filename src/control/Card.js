sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("gallery.control.Card", {
        metadata: {
            properties: {
                image: { type: "sap.ui.core.URI" },
                profile: { type: "sap.ui.core.URI" },
                url: { type: "sap.ui.core.URI" },
                name: { type: "string" },
                likes: { type: "int" },
                comments: { type: "int" },
                category: { type: "string" },
                categoryColor: { type: "string" }
            },
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div class="ui card centered" ui5ControlData={ oC }>
                    <div class="content">
                        <a class="user" href={ oC.getUrl() }>
                            <img class="ui avatar image" src={ oC.getProfile() } />{ " " + oC.getName() }
                        </a>
                    </div>
                    <div class="image">
                        <div class={["ui", oC.getCategoryColor() || "black", "ribbon", "label"]}>
                            { oC.getCategory() || "" }
                        </div>
                        <img src={oC.getImage()} />
                    </div>
                    <div class="content">
                        <span class="right floated">
                            <i class="heart outline like icon"></i>
                            { oC.getLikes() || "0" }
                        </span>
                        <a>
                            <i class="comment icon outline"></i>
                            { oC.getComments() || "0" }
                        </a>
                    </div>
                </div>
            );
        }
    });

});
