sap.ui.define([
    "sap/ui/core/Control",
    "jquery.sap.global"
], function (Control, jQuery) {

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

        bounceNewElements: function() {
            let newElements = this._current % this._step === 0 ? 4 : this._current % this._step;
            this.$().find(".withBounce").slice(-newElements).transition("bounce");
        },

        onAfterRendering: function () {
            this.$().find(".loader").visibility({
                once: true,
                observeChanges: true,
                onTopVisible: () => {
                    let length = (this.getCards() || []).length;
                    if (this._current < length) {
                        jQuery.sap.delayedCall(1000, this, () => {
                            this._current = Math.min(length, this._current + this._step);
                            this._loading = this._current !== length;
                            this.invalidate();
                        });
                    }
                }
            });
            this.bounceNewElements();
        },

        renderer: function (oRm, oC) {
            oRm.render(
                <div ui5ControlData={oC} class="ui segment" >
                    <div class="ui grid stackable four column">
                        {
                            (oC.getCards() || []).slice(0, oC._current).forEach(i => (
                                <div class="four wide column withBounce">
                                    <ui5Control>{i}</ui5Control>
                                </div>
                            ))
                        }
                    </div>
                    {
                        oC._loading &&
                        <div class="ui large centered inline text loader active sapUiMediumMarginTopBottom">
                            {oC.getLoadingText() || ""}
                        </div>
                    }
                </div>
            );
        }
    });

});
