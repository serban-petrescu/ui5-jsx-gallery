"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("gallery.control.IconHeader", {
        metadata: {
            properties: {
                icon: { type: "string" },
                title: { type: "string" },
                subtitle: { type: "string" }
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<h2 ");
                oRm.addClass("ui");
                oRm.addClass("center");
                oRm.addClass("aligned");
                oRm.addClass("icon");
                oRm.addClass("header");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<i ");

                (function (mC) {
                    var mClasses = mC || {};

                    if (mClasses instanceof Array) {
                        for (var i = 0; i < mClasses.length; ++i) {
                            if (mClasses[i]) {
                                oRm.addClass(mClasses[i]);
                            }
                        }
                    } else {
                        for (var sKey in mClasses) {
                            if (mClasses.hasOwnProperty(sKey) && mClasses[sKey]) {
                                oRm.addClass(sKey);
                            }
                        }
                    }
                })(["circular", oC.getIcon(), "icon"]);

                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</i>");
                oRm.writeEscaped((oC.getTitle() || "") || "");
                oRm.write("</h2>");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("center");
                oRm.addClass("aligned");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getSubtitle() || "") || "");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=IconHeader.js.map
