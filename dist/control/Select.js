"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("gallery.control.Select", {
        metadata: {
            properties: {
                selectedKey: {
                    type: "string"
                }
            },
            aggregations: {
                items: { type: "sap.ui.core.Item", multiple: true }
            },
            events: {
                change: { value: { type: "string" } }
            },
            defaultAggregation: "items"
        },

        getSelectedItem: function getSelectedItem() {
            var items = this.getItems() || [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.getKey() === this.getSelectedKey()) {
                        return item;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return null;
        },

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            this.$().dropdown({
                onChange: function onChange(value) {
                    _this.setProperty("selectedKey", value, true);
                    _this.fireEvent("change", { value: value });
                }
            });
        },

        renderer: function renderer(oRm, oC) {
            var selectedItem = oC.getSelectedItem();
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("ui");
                oRm.addClass("floating");
                oRm.addClass("dropdown");
                oRm.addClass("labeled");
                oRm.addClass("icon");
                oRm.addClass("button");
                oRm.addClass("basic");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<i ");
                oRm.addClass("world");
                oRm.addClass("icon");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</i>");
                oRm.write("<span ");
                oRm.addClass("text");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((selectedItem ? selectedItem.getText() : "") || "");
                oRm.write("</span>");
                oRm.write("<input ");
                oRm.writeAttribute("type", "hidden");
                oRm.writeAttributeEscaped("value", oC.getSelectedKey() || "");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("menu");
                oRm.addClass("");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getItems() || []).forEach(function (i) {
                    return (function () {
                        oRm.write("<div ");
                        oRm.addClass("item");
                        oRm.writeAttributeEscaped("data-value", i.getKey());
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((i.getText()) || "");
                        oRm.write("</div>");
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=Select.js.map
