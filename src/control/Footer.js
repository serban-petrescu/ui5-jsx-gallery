sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("gallery.control.Footer", {
        metadata: {
            properties: {
                leftHeader: { type: "string" },
                middleHeader: { type: "string" },
                rightHeader: { type: "string" },
                rightText: { type: "string" }
            },
            aggregations: {
                left: { type: "gallery.control.Link", multiple: true },
                middle: { type: "gallery.control.Link", multiple: true },
                right: { type: "gallery.control.Link", multiple: true }
            }
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={ oC } class="ui inverted vertical footer segment">
                    <div class="ui container">
                        <div class="ui stackable inverted divided equal height stackable grid">
                            <div class="three wide column">
                                <h4 class="ui inverted header">{oC.getLeftHeader() || ""}</h4>
                                <div class="ui inverted link list">
                                { (oC.getLeft() || []).forEach(i => <ui5Control>{ i }</ui5Control>) }
                                </div>
                            </div>
                            <div class="three wide column">
                                <h4 class="ui inverted header">{oC.getMiddleHeader() || ""}</h4>
                                <div class="ui inverted link list">
                                { (oC.getMiddle() || []).forEach(i => <ui5Control>{ i }</ui5Control>) }
                                </div>
                            </div>
                            <div class="seven wide column">
                                <h4 class="ui inverted header">{oC.getRightHeader() || ""}</h4>
                                <p>
                                    { oC.getRightText() || "" }
                                    {
                                        (oC.getRight() || []).forEach((l, i) => (
                                            <span>
                                                {(i == 0 ? " " : ", ")}
                                                <ui5Control>{ l }</ui5Control>{
                                                    i === oC.getRight().length - 1 ? "." : ""
                                                }
                                            </span>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });

});
