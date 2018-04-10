sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

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

        getSelectedItem: function() {
            let items = this.getItems() || [];
            for (let item of items) {
                if (item.getKey() === this.getSelectedKey()) {
                    return item;
                }
            }
            return null;
        },

        onAfterRendering: function () {
            this.$().dropdown({
                onChange: value => {
                    this.setProperty("selectedKey", value, true);
                    this.fireEvent("change", {value: value});
                }
            });
        },

        renderer: function (oRm, oC) {
            let selectedItem = oC.getSelectedItem();
            oRm.render(
                <div ui5ControlData={oC} class="ui floating dropdown labeled icon button basic">
                    <i class="world icon"></i>
                    <span class="text">{ selectedItem ? selectedItem.getText() : "" }</span>
                    <input type="hidden" value={oC.getSelectedKey() || ""} />
                    <div class="menu ">
                    {
                        (oC.getItems() || []).forEach(i => (
                            <div class="item" data-value={i.getKey()}>{ i.getText() }</div>
                        ))
                    }
                    </div>
                </div>
            );
        }
    });

});
