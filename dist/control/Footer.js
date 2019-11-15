"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

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

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("ui");
                oRm.addClass("inverted");
                oRm.addClass("vertical");
                oRm.addClass("footer");
                oRm.addClass("segment");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("container");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("stackable");
                oRm.addClass("inverted");
                oRm.addClass("divided");
                oRm.addClass("equal");
                oRm.addClass("height");
                oRm.addClass("stackable");
                oRm.addClass("grid");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("three");
                oRm.addClass("wide");
                oRm.addClass("column");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<h4 ");
                oRm.addClass("ui");
                oRm.addClass("inverted");
                oRm.addClass("header");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getLeftHeader() || "") || "");
                oRm.write("</h4>");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("inverted");
                oRm.addClass("link");
                oRm.addClass("list");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getLeft() || []).forEach(function (i) {
                    return (function () {
                        oRm.renderControl(i);
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("three");
                oRm.addClass("wide");
                oRm.addClass("column");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<h4 ");
                oRm.addClass("ui");
                oRm.addClass("inverted");
                oRm.addClass("header");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getMiddleHeader() || "") || "");
                oRm.write("</h4>");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("inverted");
                oRm.addClass("link");
                oRm.addClass("list");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getMiddle() || []).forEach(function (i) {
                    return (function () {
                        oRm.renderControl(i);
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("seven");
                oRm.addClass("wide");
                oRm.addClass("column");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<h4 ");
                oRm.addClass("ui");
                oRm.addClass("inverted");
                oRm.addClass("header");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getRightHeader() || "") || "");
                oRm.write("</h4>");
                oRm.write("<p ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getRightText() || "") || "");
                oRm.writeEscaped(((oC.getRight() || []).forEach(function (l, i) {
                    return (function () {
                        oRm.write("<span ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((i == 0 ? " " : ", ") || "");
                        oRm.renderControl(l);
                        oRm.writeEscaped((i === oC.getRight().length - 1 ? "." : "") || "");
                        oRm.write("</span>");
                    })();
                })) || "");
                oRm.write("</p>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=Footer.js.map
