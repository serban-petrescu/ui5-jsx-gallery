"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

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
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("card");
                oRm.addClass("centered");
                oRm.writeControlData(oC);
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");
                oRm.addClass("user");
                oRm.writeAttributeEscaped("href", oC.getUrl());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<img ");
                oRm.addClass("ui");
                oRm.addClass("avatar");
                oRm.addClass("image");
                oRm.writeAttributeEscaped("src", oC.getProfile());
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((" " + oC.getName()) || "");
                oRm.write("</a>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("image");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");

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
                })(["ui", oC.getCategoryColor() || "black", "ribbon", "label"]);

                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getCategory() || "") || "");
                oRm.write("</div>");
                oRm.write("<img ");
                oRm.writeAttributeEscaped("src", oC.getImage());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<span ");
                oRm.addClass("right");
                oRm.addClass("floated");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<i ");
                oRm.addClass("heart");
                oRm.addClass("outline");
                oRm.addClass("like");
                oRm.addClass("icon");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</i>");
                oRm.writeEscaped((oC.getLikes() || "0") || "");
                oRm.write("</span>");
                oRm.write("<a ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<i ");
                oRm.addClass("comment");
                oRm.addClass("icon");
                oRm.addClass("outline");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</i>");
                oRm.writeEscaped((oC.getComments() || "0") || "");
                oRm.write("</a>");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=Card.js.map
