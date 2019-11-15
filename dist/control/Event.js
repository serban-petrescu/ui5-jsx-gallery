"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

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

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            this.$().find("img").click(function () {
                return _this.fireEvent("click");
            });
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("event");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("label");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<img ");
                oRm.writeAttributeEscaped("src", oC.getProfile());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("summary");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");
                oRm.addClass("user");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getName()) || "");
                oRm.write("</a>");
                oRm.writeEscaped((" " + oC.getTitle()) || "");
                oRm.write("<div ");
                oRm.addClass("date");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getDate()) || "");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("extra");
                oRm.addClass("images");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getImages() || []).forEach(function (i) {
                    return (function () {
                        oRm.write("<a ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write("<img ");
                        oRm.writeAttributeEscaped("src", i);
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write("</a>");
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("meta");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");
                oRm.addClass("like");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<i ");
                oRm.addClass("like");
                oRm.addClass("icon");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</i>");
                oRm.writeEscaped((oC.getLikes()) || "");
                oRm.write("</a>");
                oRm.write("<a ");
                oRm.addClass("comment");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<i ");
                oRm.addClass("comment");
                oRm.addClass("icon");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</i>");
                oRm.writeEscaped((oC.getComments()) || "");
                oRm.write("</a>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=Event.js.map
