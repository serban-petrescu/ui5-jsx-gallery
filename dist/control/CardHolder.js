"use strict";

sap.ui.define(["sap/ui/core/Control", "jquery.sap.global"], function (Control, jQuery) {

    return Control.extend("gallery.control.CardHolder", {
        _current: 8,
        _step: 4,
        _loading: true,

        metadata: {
            properties: {
                loadingText: { type: "string" }
            },
            aggregations: {
                cards: { type: "sap.ui.core.Control", multiple: true }
            },
            defaultAggregation: "cards"
        },

        bounceNewElements: function bounceNewElements() {
            var newElements = this._current % this._step === 0 ? 4 : this._current % this._step;
            this.$().find(".withBounce").slice(-newElements).transition("bounce");
        },

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            this.$().find(".loader").visibility({
                once: true,
                observeChanges: true,
                onTopVisible: function onTopVisible() {
                    var length = (_this.getCards() || []).length;
                    if (_this._current < length) {
                        jQuery.sap.delayedCall(1000, _this, function () {
                            _this._current = Math.min(length, _this._current + _this._step);
                            _this._loading = _this._current !== length;
                            _this.invalidate();
                        });
                    }
                }
            });
            this.bounceNewElements();
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("ui");
                oRm.addClass("segment");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("ui");
                oRm.addClass("grid");
                oRm.addClass("stackable");
                oRm.addClass("four");
                oRm.addClass("column");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getCards() || []).slice(0, oC._current).forEach(function (i) {
                    return (function () {
                        oRm.write("<div ");
                        oRm.addClass("four");
                        oRm.addClass("wide");
                        oRm.addClass("column");
                        oRm.addClass("withBounce");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.renderControl(i);
                        oRm.write("</div>");
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.writeEscaped((oC._loading && (function () {
                    oRm.write("<div ");
                    oRm.addClass("ui");
                    oRm.addClass("large");
                    oRm.addClass("centered");
                    oRm.addClass("inline");
                    oRm.addClass("text");
                    oRm.addClass("loader");
                    oRm.addClass("active");
                    oRm.addClass("sapUiMediumMarginTopBottom");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getLoadingText() || "") || "");
                    oRm.write("</div>");
                })()) || "");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=CardHolder.js.map
