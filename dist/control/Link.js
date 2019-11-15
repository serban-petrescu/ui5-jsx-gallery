"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("gallery.control.Link", {
        metadata: {
            properties: {
                text: { type: "string" },
                active: { type: "boolean", defaultValue: false }
            },
            events: {
                click: {}
            }
        },

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            this.$().click(function () {
                return _this.fireEvent("click");
            });
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<a ");
                oRm.writeControlData(oC);

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
                })({ link: true, item: true, active: oC.getActive() });

                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getText()) || "");
                oRm.write("</a>");
            })();
        }
    });
});
//# sourceMappingURL=Link.js.map
