"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("gallery.control.Feed", {
        metadata: {
            aggregations: {
                content: { type: "gallery.control.Event", multiple: true }
            },
            defaultAggregation: "content"
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("ui");
                oRm.addClass("feed");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getContent() || []).forEach(function (i) {
                    return (function () {
                        oRm.renderControl(i);
                    })();
                })) || "");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=Feed.js.map
