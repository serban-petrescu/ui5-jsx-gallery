"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("gallery.control.Page", {
        metadata: {
            aggregations: {
                content: { type: "sap.ui.core.Control", multiple: true }
            },
            defaultAggregation: "content"
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("ui");
                oRm.addClass("pusher");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("container");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getContent() || []).forEach(function (i) {
                    return (function () {
                        oRm.renderControl(i);
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=Page.js.map
