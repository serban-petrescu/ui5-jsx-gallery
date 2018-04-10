sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Global",
    "jquery.sap.global",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/DateFormat"
], function (Controller, sapUi, jQuery, JSONModel, DateFormat) {
    "use strict";

    var oRelativeDateFormat = DateFormat.getDateInstance({relative: true, relativeScale: "auto"});

    return Controller.extend("gallery.controller.Main", {

        onInit: function () {
            this.getView().setModel(new JSONModel({
                page: "home"
            }), "view");
        },

        onLanguageChange: function (oEvent) {
            sapUi.getCore().getConfiguration().setLanguage(oEvent.getParameter("value"));
            this.getView().getModel().refresh(true);
        },

        onCardClick: function (oEvent) {
            oEvent.getSource().setActive(true);
        },

        goToHome: function () {
            this.getView().getModel("view").setProperty("/page", "home");
        },

        goToFeed: function () {
            this.getView().getModel("view").setProperty("/page", "feed");
        },

        goToBrowse: function () {
            this.getView().getModel("view").setProperty("/page", "browse");
        },

        formatRelativeDate: function (iDate) {
            return oRelativeDateFormat.format(new Date(parseInt(iDate, 10) * 1000));
        },

        formatImageArray: function (aImages) {
            return aImages.map(i => "assets/thumbs/" + i + ".jpg");
        },

        formatCategory: function (iCategory) {
            return this.getView().getModel("i18n").getResourceBundle().getText("photoCategory_" + (iCategory % 5 + 1));
        },

        formatCategoryColor: function (iCategory) {
            switch (iCategory % 5) {
                case 0: return "blue";
                case 1: return "green";
                case 2: return "black";
                case 3: return "red";
                default: return "orange";
            }
        }

    });

});
