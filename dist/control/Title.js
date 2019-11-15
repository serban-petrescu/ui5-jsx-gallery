"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

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

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("title");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<h1 ");
                oRm.addClass("ui");
                oRm.addClass("center");
                oRm.addClass("aligned");
                oRm.addClass("header");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getTitle() || "") || "");
                oRm.write("</h1>");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("center");
                oRm.addClass("aligned");
                oRm.addClass("subtitle");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getSubtitle() || "") || "");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=Title.js.map
