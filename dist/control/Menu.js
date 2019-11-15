"use strict";

sap.ui.define(["sap/ui/core/Control", "sap/ui/Device"], function (Control, Device) {

    return Control.extend("gallery.control.Menu", {
        metadata: {
            properties: {
                image: {
                    type: "sap.ui.core.URI"
                }
            },
            aggregations: {
                left: { type: "sap.ui.core.Control", multiple: true },
                right: { type: "sap.ui.core.Control", multiple: true }
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("ui");
                oRm.addClass("menu");
                oRm.addClass("inverted");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("container");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("item");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<img ");
                oRm.addClass("ui");
                oRm.addClass("mini");
                oRm.addClass("image");
                oRm.writeAttributeEscaped("src", oC.getImage());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</div>");
                oRm.writeEscaped(((oC.getLeft() || []).forEach(function (i) {
                    (function () {
                        oRm.renderControl(i);
                    })();
                })) || "");
                oRm.writeEscaped((!Device.system.phone && (function () {
                    oRm.write("<div ");
                    oRm.addClass("right");
                    oRm.addClass("menu");
                    oRm.addClass("mobile");
                    oRm.addClass("hidden");
                    oRm.addClass("grid");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped(((oC.getRight() || []).forEach(function (i) {
                        (function () {
                            oRm.write("<div ");
                            oRm.addClass("item");
                            oRm.writeClasses();
                            oRm.write(">");
                            oRm.renderControl(i);
                            oRm.write("</div>");
                        })();
                    })) || "");
                    oRm.write("</div>");
                })()) || "");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=Menu.js.map
