"use strict";

sap.ui.define(["jquery.sap.global", "sap/ui/model/json/JSONModel", "sap/ui/Device"], function (jQuery, JSONModel, Device) {
    "use strict";

    return {
        createDeviceModel: function createDeviceModel() {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createMainModel: function createMainModel() {
            return new JSONModel({
                browse: [{
                    "image": "assets/photos/liBJwUowFnw.jpg",
                    "category": 5,
                    "likes": 412,
                    "comments": 46,
                    "user": {
                        "avatar": "assets/avatar/joe.jpg",
                        "name": "HENG STREAM",
                        "url": "https://unsplash.com/@hngstrm?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/3TmLV0fLzfU.jpg",
                    "category": 1,
                    "likes": 991,
                    "comments": 74,
                    "user": {
                        "avatar": "assets/avatar/jenny.jpg",
                        "name": "Aaron Burden",
                        "url": "https://unsplash.com/@aaronburden?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/rFxk_Ea9PME.jpg",
                    "category": 17,
                    "likes": 444,
                    "comments": 43,
                    "user": {
                        "avatar": "assets/avatar/chris.jpg",
                        "name": "Artiom Vallat",
                        "url": "https://unsplash.com/@virussinside?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/-td0Hjr3gL0.jpg",
                    "category": 4,
                    "likes": 850,
                    "comments": 90,
                    "user": {
                        "avatar": "assets/avatar/joe.jpg",
                        "name": "Raul Chamizo",
                        "url": "https://unsplash.com/@graciaspisha?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/1WKbltC83A0.jpg",
                    "category": 4,
                    "likes": 751,
                    "comments": 24,
                    "user": {
                        "avatar": "assets/avatar/zoe.jpg",
                        "name": "Noam Jordan",
                        "url": "https://unsplash.com/@noamjordan?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/sSBq1dqQJ_c.jpg",
                    "category": 18,
                    "likes": 199,
                    "comments": 18,
                    "user": {
                        "avatar": "assets/avatar/nom.jpg",
                        "name": "eberhard grossgasteiger",
                        "url": "https://unsplash.com/@eberhardgross?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/m3TYLFI_mDo.jpg",
                    "category": 5,
                    "likes": 985,
                    "comments": 33,
                    "user": {
                        "avatar": "assets/avatar/nom.jpg",
                        "name": "Gerrie van der Walt",
                        "url": "https://unsplash.com/@gitfo?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/2qUCYwZMUlo.jpg",
                    "category": 19,
                    "likes": 615,
                    "comments": 70,
                    "user": {
                        "avatar": "assets/avatar/joe.jpg",
                        "name": "shane Keaney",
                        "url": "https://unsplash.com/@shane_keaney?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/9hoepATfDVE.jpg",
                    "category": 22,
                    "likes": 837,
                    "comments": 71,
                    "user": {
                        "avatar": "assets/avatar/nan.jpg",
                        "name": "Job Savelsberg",
                        "url": "https://unsplash.com/@jobsavelsberg?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/kU5OECh-_K4.jpg",
                    "category": 3,
                    "likes": 908,
                    "comments": 17,
                    "user": {
                        "avatar": "assets/avatar/stevie.jpg",
                        "name": "Thomas Fields",
                        "url": "https://unsplash.com/@fields_th?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/yk9QThtWV4o.jpg",
                    "category": 21,
                    "likes": 818,
                    "comments": 35,
                    "user": {
                        "avatar": "assets/avatar/laura.jpg",
                        "name": "Macie Jones",
                        "url": "https://unsplash.com/@macieej?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/Kwdp-0pok-I.jpg",
                    "category": 16,
                    "likes": 193,
                    "comments": 9,
                    "user": {
                        "avatar": "assets/avatar/stevie.jpg",
                        "name": "Nafinia Putra",
                        "url": "https://unsplash.com/@nputra?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/6yMnWHFehxQ.jpg",
                    "category": 7,
                    "likes": 869,
                    "comments": 83,
                    "user": {
                        "avatar": "assets/avatar/tom.jpg",
                        "name": "Dave Redfern",
                        "url": "https://unsplash.com/@daveredfern?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/N2-2dlNDhXw.jpg",
                    "category": 8,
                    "likes": 269,
                    "comments": 4,
                    "user": {
                        "avatar": "assets/avatar/matt.jpg",
                        "name": "Brandan Keller",
                        "url": "https://unsplash.com/@brandanleekeller?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/-Rh55gRXRLo.jpg",
                    "category": 21,
                    "likes": 664,
                    "comments": 11,
                    "user": {
                        "avatar": "assets/avatar/matt.jpg",
                        "name": "Annie Spratt",
                        "url": "https://unsplash.com/@anniespratt?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/VpBpMSMEzJc.jpg",
                    "category": 13,
                    "likes": 547,
                    "comments": 45,
                    "user": {
                        "avatar": "assets/avatar/nom.jpg",
                        "name": "FXSD",
                        "url": "https://unsplash.com/@fxsd?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/coUZnech6qw.jpg",
                    "category": 8,
                    "likes": 425,
                    "comments": 20,
                    "user": {
                        "avatar": "assets/avatar/nan.jpg",
                        "name": "Malte Schmidt",
                        "url": "https://unsplash.com/@maltesimo?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/EpUJJ7kNImk.jpg",
                    "category": 24,
                    "likes": 586,
                    "comments": 90,
                    "user": {
                        "avatar": "assets/avatar/justen.jpg",
                        "name": "Anderson Aguirre",
                        "url": "https://unsplash.com/@andersonaguirre?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/O0ta3hn-tHc.jpg",
                    "category": 15,
                    "likes": 470,
                    "comments": 19,
                    "user": {
                        "avatar": "assets/avatar/chris.jpg",
                        "name": "Jakub Kriz",
                        "url": "https://unsplash.com/@jakubkriz?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/g4wujH0p80o.jpg",
                    "category": 9,
                    "likes": 852,
                    "comments": 77,
                    "user": {
                        "avatar": "assets/avatar/ade.jpg",
                        "name": "Sandeep Swarnkar",
                        "url": "https://unsplash.com/@sandeeep?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/asH76DZ6z8Y.jpg",
                    "category": 13,
                    "likes": 987,
                    "comments": 45,
                    "user": {
                        "avatar": "assets/avatar/laura.jpg",
                        "name": "Jake Oates",
                        "url": "https://unsplash.com/@jake_oates2000?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/GF1g07yq5-w.jpg",
                    "category": 18,
                    "likes": 148,
                    "comments": 80,
                    "user": {
                        "avatar": "assets/avatar/nom.jpg",
                        "name": "Joseph Chan",
                        "url": "https://unsplash.com/@yulokchan?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/QK31Jlfhrnc.jpg",
                    "category": 19,
                    "likes": 119,
                    "comments": 50,
                    "user": {
                        "avatar": "assets/avatar/ade.jpg",
                        "name": "Mohamed Khimji",
                        "url": "https://unsplash.com/@mohamedkhimji?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/g8a9oCVI_TA.jpg",
                    "category": 23,
                    "likes": 255,
                    "comments": 40,
                    "user": {
                        "avatar": "assets/avatar/daniel.jpg",
                        "name": "Jean Blackmer",
                        "url": "https://unsplash.com/@jblackmer?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/fPWYI02j8bI.jpg",
                    "category": 15,
                    "likes": 475,
                    "comments": 44,
                    "user": {
                        "avatar": "assets/avatar/zoe.jpg",
                        "name": "AquaChara",
                        "url": "https://unsplash.com/@aquachara?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/WkYtVZCMzgA.jpg",
                    "category": 9,
                    "likes": 202,
                    "comments": 0,
                    "user": {
                        "avatar": "assets/avatar/chris.jpg",
                        "name": "Pedro Lastra",
                        "url": "https://unsplash.com/@peterlaster?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/EU6puhukUJI.jpg",
                    "category": 4,
                    "likes": 538,
                    "comments": 8,
                    "user": {
                        "avatar": "assets/avatar/justen.jpg",
                        "name": "Cassie Matias",
                        "url": "https://unsplash.com/@cass4504?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/bt-Sc22W-BE.jpg",
                    "category": 6,
                    "likes": 860,
                    "comments": 18,
                    "user": {
                        "avatar": "assets/avatar/laura.jpg",
                        "name": "Jake Hills",
                        "url": "https://unsplash.com/@jakehills?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/YQlwWI5S_gg.jpg",
                    "category": 12,
                    "likes": 380,
                    "comments": 41,
                    "user": {
                        "avatar": "assets/avatar/joe.jpg",
                        "name": "Alex Wolfe",
                        "url": "https://unsplash.com/@alxwlfe?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/LyjHGHliXj4.jpg",
                    "category": 20,
                    "likes": 467,
                    "comments": 93,
                    "user": {
                        "avatar": "assets/avatar/steve.jpg",
                        "name": "Florian Schneider",
                        "url": "https://unsplash.com/@flotography?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/Ey3DqRjTGEw.jpg",
                    "category": 14,
                    "likes": 220,
                    "comments": 41,
                    "user": {
                        "avatar": "assets/avatar/justen.jpg",
                        "name": "Justin Clark",
                        "url": "https://unsplash.com/@imjustintime?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/KBrnq3v_HWc.jpg",
                    "category": 24,
                    "likes": 821,
                    "comments": 1,
                    "user": {
                        "avatar": "assets/avatar/veronika.jpg",
                        "name": "Owen CL",
                        "url": "https://unsplash.com/@owencavlys?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/lmmjXCsuv6I.jpg",
                    "category": 8,
                    "likes": 548,
                    "comments": 81,
                    "user": {
                        "avatar": "assets/avatar/stevie.jpg",
                        "name": "Lexie Barnhorn",
                        "url": "https://unsplash.com/@lexie_barnhorn?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/gjGz5nrQiaU.jpg",
                    "category": 4,
                    "likes": 195,
                    "comments": 73,
                    "user": {
                        "avatar": "assets/avatar/steve.jpg",
                        "name": "Ghost Presenter",
                        "url": "https://unsplash.com/@ghostpresenter?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/Fx9O8zKfz9w.jpg",
                    "category": 15,
                    "likes": 339,
                    "comments": 29,
                    "user": {
                        "avatar": "assets/avatar/jenny.jpg",
                        "name": "Dmitry Sytnik",
                        "url": "https://unsplash.com/@macphun?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/2WIO1krqJkg.jpg",
                    "category": 13,
                    "likes": 246,
                    "comments": 13,
                    "user": {
                        "avatar": "assets/avatar/joe.jpg",
                        "name": "Ihor Malytskyi",
                        "url": "https://unsplash.com/@ihor_malytskyi?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/5aMDaV-8nA8.jpg",
                    "category": 22,
                    "likes": 992,
                    "comments": 23,
                    "user": {
                        "avatar": "assets/avatar/elliot.jpg",
                        "name": "sydney Rae",
                        "url": "https://unsplash.com/@srz?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/MWf9zsw0O0U.jpg",
                    "category": 11,
                    "likes": 394,
                    "comments": 36,
                    "user": {
                        "avatar": "assets/avatar/nan.jpg",
                        "name": "Clem Onojeghuo",
                        "url": "https://unsplash.com/@clemono2?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/BGLR0IIeYi4.jpg",
                    "category": 15,
                    "likes": 402,
                    "comments": 49,
                    "user": {
                        "avatar": "assets/avatar/matt.jpg",
                        "name": "Elizabeth Tsung",
                        "url": "https://unsplash.com/@elizabethtsung?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/o97vBPxvSew.jpg",
                    "category": 22,
                    "likes": 156,
                    "comments": 53,
                    "user": {
                        "avatar": "assets/avatar/christian.jpg",
                        "name": "Annie Spratt",
                        "url": "https://unsplash.com/@anniespratt?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/loPG7riCAHM.jpg",
                    "category": 22,
                    "likes": 950,
                    "comments": 78,
                    "user": {
                        "avatar": "assets/avatar/chris.jpg",
                        "name": "Kaiwen Sun",
                        "url": "https://unsplash.com/@ksun?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/6Q_PjiBEFl4.jpg",
                    "category": 6,
                    "likes": 353,
                    "comments": 95,
                    "user": {
                        "avatar": "assets/avatar/tom.jpg",
                        "name": "Marvin Meyer",
                        "url": "https://unsplash.com/@marvelous?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/jHypfHtD0N0.jpg",
                    "category": 17,
                    "likes": 176,
                    "comments": 81,
                    "user": {
                        "avatar": "assets/avatar/chris.jpg",
                        "name": "Gamze Bozkaya",
                        "url": "https://unsplash.com/@gamzebozkaya?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/nuXuNkl4kcU.jpg",
                    "category": 16,
                    "likes": 173,
                    "comments": 58,
                    "user": {
                        "avatar": "assets/avatar/nan.jpg",
                        "name": "Dan Aragón",
                        "url": "https://unsplash.com/@danaragonmx?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/ricbHp3PD9s.jpg",
                    "category": 16,
                    "likes": 694,
                    "comments": 24,
                    "user": {
                        "avatar": "assets/avatar/chris.jpg",
                        "name": "Kevin Jarrett",
                        "url": "https://unsplash.com/@kjarrett?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/65x3S0YWbsc.jpg",
                    "category": 15,
                    "likes": 952,
                    "comments": 98,
                    "user": {
                        "avatar": "assets/avatar/tom.jpg",
                        "name": "Irina Kostenich",
                        "url": "https://unsplash.com/@iriser?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/Isqaiq9Z314.jpg",
                    "category": 13,
                    "likes": 325,
                    "comments": 40,
                    "user": {
                        "avatar": "assets/avatar/jenny.jpg",
                        "name": "Annie Spratt",
                        "url": "https://unsplash.com/@anniespratt?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/EqnEmYuKKb4.jpg",
                    "category": 20,
                    "likes": 564,
                    "comments": 9,
                    "user": {
                        "avatar": "assets/avatar/stevie.jpg",
                        "name": "Chen Hu",
                        "url": "https://unsplash.com/@huchenme?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/RoRoAQTSnEU.jpg",
                    "category": 7,
                    "likes": 982,
                    "comments": 95,
                    "user": {
                        "avatar": "assets/avatar/tom.jpg",
                        "name": "Uthpala Shyamendra",
                        "url": "https://unsplash.com/@shyamen?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/IzhYV4_wZOc.jpg",
                    "category": 13,
                    "likes": 211,
                    "comments": 59,
                    "user": {
                        "avatar": "assets/avatar/matt.jpg",
                        "name": "Zachary Nelson",
                        "url": "https://unsplash.com/@zacharytnelson?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/T7gi_cyrkdg.jpg",
                    "category": 17,
                    "likes": 937,
                    "comments": 19,
                    "user": {
                        "avatar": "assets/avatar/nom.jpg",
                        "name": "Clem Onojeghuo",
                        "url": "https://unsplash.com/@clemono2?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/NuX67NMvbus.jpg",
                    "category": 13,
                    "likes": 753,
                    "comments": 34,
                    "user": {
                        "avatar": "assets/avatar/chris.jpg",
                        "name": "Alex Blajan",
                        "url": "https://unsplash.com/@alexb?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/JiLwY-8rtKU.jpg",
                    "category": 13,
                    "likes": 650,
                    "comments": 4,
                    "user": {
                        "avatar": "assets/avatar/laura.jpg",
                        "name": "Mikita Karasiou",
                        "url": "https://unsplash.com/@starpollen?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/wC69cxOE7Us.jpg",
                    "category": 18,
                    "likes": 744,
                    "comments": 6,
                    "user": {
                        "avatar": "assets/avatar/helen.jpg",
                        "name": "Ales Krivec",
                        "url": "https://unsplash.com/@aleskrivec?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/x-fovtJzRxI.jpg",
                    "category": 20,
                    "likes": 899,
                    "comments": 78,
                    "user": {
                        "avatar": "assets/avatar/ade.jpg",
                        "name": "Matt Artz",
                        "url": "https://unsplash.com/@mattartz?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/Ct7SDwhQ3nc.jpg",
                    "category": 20,
                    "likes": 962,
                    "comments": 51,
                    "user": {
                        "avatar": "assets/avatar/stevie.jpg",
                        "name": "Joy Real",
                        "url": "https://unsplash.com/@joyreal328?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/_svr6IrL9Bs.jpg",
                    "category": 8,
                    "likes": 989,
                    "comments": 54,
                    "user": {
                        "avatar": "assets/avatar/veronika.jpg",
                        "name": "Jennifer Regnier",
                        "url": "https://unsplash.com/@jennifer_regnier?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/An4DuozJUnY.jpg",
                    "category": 18,
                    "likes": 223,
                    "comments": 57,
                    "user": {
                        "avatar": "assets/avatar/matt.jpg",
                        "name": "Kristóf Vizy",
                        "url": "https://unsplash.com/@krisv?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/Wzi3-GBMLL8.jpg",
                    "category": 2,
                    "likes": 989,
                    "comments": 14,
                    "user": {
                        "avatar": "assets/avatar/elliot.jpg",
                        "name": "Rachel Lees",
                        "url": "https://unsplash.com/@rachel_lees?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/dvxcZWAmZhg.jpg",
                    "category": 6,
                    "likes": 396,
                    "comments": 58,
                    "user": {
                        "avatar": "assets/avatar/helen.jpg",
                        "name": "Brooks Leibee",
                        "url": "https://unsplash.com/@baleibee?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/FgY6bF6emj0.jpg",
                    "category": 11,
                    "likes": 975,
                    "comments": 6,
                    "user": {
                        "avatar": "assets/avatar/nom.jpg",
                        "name": "Sam Xu",
                        "url": "https://unsplash.com/@therealsam?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/gVlC9k5MMRU.jpg",
                    "category": 11,
                    "likes": 642,
                    "comments": 49,
                    "user": {
                        "avatar": "assets/avatar/jenny.jpg",
                        "name": "Carlo Verso",
                        "url": "https://unsplash.com/@carloverso?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/7Hu4iWksw2k.jpg",
                    "category": 16,
                    "likes": 995,
                    "comments": 62,
                    "user": {
                        "avatar": "assets/avatar/zoe.jpg",
                        "name": "Jazmin Quaynor",
                        "url": "https://unsplash.com/@jazminantoinette?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/48AT7KOfRsk.jpg",
                    "category": 17,
                    "likes": 369,
                    "comments": 24,
                    "user": {
                        "avatar": "assets/avatar/steve.jpg",
                        "name": "Bjørn Kamfjord",
                        "url": "https://unsplash.com/@bsbjorn?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/b47h830oFWI.jpg",
                    "category": 12,
                    "likes": 208,
                    "comments": 6,
                    "user": {
                        "avatar": "assets/avatar/tom.jpg",
                        "name": "Lars Stuifbergen",
                        "url": "https://unsplash.com/@larsstuifbergen?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/PyRC4T2caUc.jpg",
                    "category": 6,
                    "likes": 507,
                    "comments": 33,
                    "user": {
                        "avatar": "assets/avatar/christian.jpg",
                        "name": "Old Youth",
                        "url": "https://unsplash.com/@oldyouth?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/eTU7o_K4LBI.jpg",
                    "category": 3,
                    "likes": 159,
                    "comments": 11,
                    "user": {
                        "avatar": "assets/avatar/stevie.jpg",
                        "name": "Sebastien Gabriel",
                        "url": "https://unsplash.com/@sgabriel?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/vN8lPsiFmeI.jpg",
                    "category": 4,
                    "likes": 135,
                    "comments": 33,
                    "user": {
                        "avatar": "assets/avatar/tom.jpg",
                        "name": "Christopher Burns",
                        "url": "https://unsplash.com/@christopher__burns?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/d2xKRGefeWs.jpg",
                    "category": 3,
                    "likes": 642,
                    "comments": 51,
                    "user": {
                        "avatar": "assets/avatar/steve.jpg",
                        "name": "Gurwinder Singh",
                        "url": "https://unsplash.com/@gurwinderbrar?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/qHUJaInu0tU.jpg",
                    "category": 24,
                    "likes": 674,
                    "comments": 78,
                    "user": {
                        "avatar": "assets/avatar/helen.jpg",
                        "name": "Lagos04",
                        "url": "https://unsplash.com/@lagos04?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/1Z_y8LNEdPA.jpg",
                    "category": 23,
                    "likes": 132,
                    "comments": 80,
                    "user": {
                        "avatar": "assets/avatar/nan.jpg",
                        "name": "Ali Yahya",
                        "url": "https://unsplash.com/@ayahya09?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/hr6TLCga-W0.jpg",
                    "category": 24,
                    "likes": 637,
                    "comments": 56,
                    "user": {
                        "avatar": "assets/avatar/justen.jpg",
                        "name": "Clem Onojeghuo",
                        "url": "https://unsplash.com/@clemono2?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/gkMjf_XWTN4.jpg",
                    "category": 24,
                    "likes": 697,
                    "comments": 78,
                    "user": {
                        "avatar": "assets/avatar/nom.jpg",
                        "name": "Peter Boccia",
                        "url": "https://unsplash.com/@peterboccia?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/nhkCoS_8VBM.jpg",
                    "category": 7,
                    "likes": 649,
                    "comments": 26,
                    "user": {
                        "avatar": "assets/avatar/laura.jpg",
                        "name": "Alec Bennett",
                        "url": "https://unsplash.com/@alecbennett95?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/MPqywLomNiU.jpg",
                    "category": 15,
                    "likes": 371,
                    "comments": 31,
                    "user": {
                        "avatar": "assets/avatar/stevie.jpg",
                        "name": "Job Savelsberg",
                        "url": "https://unsplash.com/@jobsavelsberg?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/J5DIOISkDko.jpg",
                    "category": 18,
                    "likes": 152,
                    "comments": 57,
                    "user": {
                        "avatar": "assets/avatar/christian.jpg",
                        "name": "Liana Mikah",
                        "url": "https://unsplash.com/@lianamikah?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/tSRERW8Pml0.jpg",
                    "category": 16,
                    "likes": 779,
                    "comments": 99,
                    "user": {
                        "avatar": "assets/avatar/laura.jpg",
                        "name": "Fredo Figaredo",
                        "url": "https://unsplash.com/@fredoneto?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }, {
                    "image": "assets/photos/HVAvrkBiNrM.jpg",
                    "category": 20,
                    "likes": 285,
                    "comments": 74,
                    "user": {
                        "avatar": "assets/avatar/veronika.jpg",
                        "name": "Jon Moore",
                        "url": "https://unsplash.com/@thejmoore?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
                    }
                }],
                feed: [{
                    "name": "Benedicta Wardell",
                    "date": "1498872379",
                    "likes": 472,
                    "comments": 8,
                    "images": [121, 138, 109, 124, 122, 111],
                    "profile": "assets/avatar/helen.jpg"
                }, {
                    "name": "Neddy Cahn",
                    "date": "1520864970",
                    "likes": 515,
                    "comments": 230,
                    "images": [122, 131, 130, 115, 134, 124, 110],
                    "profile": "assets/avatar/tom.jpg"
                }, {
                    "name": "Jacintha Gibbetts",
                    "date": "1504067840",
                    "likes": 638,
                    "comments": 207,
                    "images": [119, 132, 130, 145, 148, 146, 130, 144, 129, 123],
                    "profile": "assets/avatar/joe.jpg"
                }, {
                    "name": "Cathee Brech",
                    "date": "1514097267",
                    "likes": 440,
                    "comments": 706,
                    "images": [101, 109, 124, 132, 136, 148, 118, 146, 104, 114],
                    "profile": "assets/avatar/nan.jpg"
                }, {
                    "name": "Shannah Feavearyear",
                    "date": "1503093255",
                    "likes": 244,
                    "comments": 519,
                    "images": [113, 144, 100, 102, 124, 136, 133, 121],
                    "profile": "assets/avatar/nom.jpg"
                }, {
                    "name": "Gerhardine Tilby",
                    "date": "1496432325",
                    "likes": 978,
                    "comments": 640,
                    "images": [116, 113, 145, 111, 122, 133, 107],
                    "profile": "assets/avatar/steve.jpg"
                }, {
                    "name": "Fremont Kindall",
                    "date": "1514513007",
                    "likes": 550,
                    "comments": 473,
                    "images": [114, 115, 104, 145, 117, 134, 129, 119, 149, 148],
                    "profile": "assets/avatar/helen.jpg"
                }, {
                    "name": "Silvanus Silvermann",
                    "date": "1520028203",
                    "likes": 993,
                    "comments": 476,
                    "images": [100, 121, 110, 137, 114, 147, 136, 143, 133, 150],
                    "profile": "assets/avatar/veronika.jpg"
                }, {
                    "name": "Arleta Blanden",
                    "date": "1506478130",
                    "likes": 423,
                    "comments": 583,
                    "images": [110, 126, 116, 127, 123, 147, 149, 143, 107],
                    "profile": "assets/avatar/stevie.jpg"
                }, {
                    "name": "Ryley Yoxen",
                    "date": "1498679755",
                    "likes": 652,
                    "comments": 905,
                    "images": [135, 121, 106, 132, 112, 146],
                    "profile": "assets/avatar/ade.jpg"
                }, {
                    "name": "Richart Drake",
                    "date": "1499377813",
                    "likes": 527,
                    "comments": 89,
                    "images": [117, 124, 130, 113, 108, 102, 139],
                    "profile": "assets/avatar/christian.jpg"
                }, {
                    "name": "Abelard Messom",
                    "date": "1501066953",
                    "likes": 133,
                    "comments": 767,
                    "images": [145, 107, 114, 130, 110, 146, 145, 130, 118, 110],
                    "profile": "assets/avatar/zoe.jpg"
                }, {
                    "name": "Egan Gettone",
                    "date": "1520574712",
                    "likes": 44,
                    "comments": 306,
                    "images": [140, 145, 106, 109, 137, 121, 143],
                    "profile": "assets/avatar/zoe.jpg"
                }, {
                    "name": "Ulrika Hanratty",
                    "date": "1507256736",
                    "likes": 73,
                    "comments": 394,
                    "images": [119, 111, 150, 100, 125, 144, 118, 112, 115],
                    "profile": "assets/avatar/nom.jpg"
                }, {
                    "name": "D'arcy Bradshaw",
                    "date": "1516187949",
                    "likes": 373,
                    "comments": 548,
                    "images": [130, 101, 124, 147, 145, 107, 132],
                    "profile": "assets/avatar/matt.jpg"
                }, {
                    "name": "Warren Rummin",
                    "date": "1500092839",
                    "likes": 749,
                    "comments": 34,
                    "images": [109, 129, 102, 110, 109, 114, 132, 143],
                    "profile": "assets/avatar/veronika.jpg"
                }, {
                    "name": "Lorenza Haslock",
                    "date": "1501354548",
                    "likes": 955,
                    "comments": 349,
                    "images": [127, 126, 133, 132, 138, 144, 112, 142, 149, 103],
                    "profile": "assets/avatar/laura.jpg"
                }, {
                    "name": "Carmella Ellyatt",
                    "date": "1500703408",
                    "likes": 620,
                    "comments": 369,
                    "images": [108, 114, 128, 106, 146, 132, 115, 147],
                    "profile": "assets/avatar/stevie.jpg"
                }, {
                    "name": "Hadlee Taffs",
                    "date": "1506141548",
                    "likes": 71,
                    "comments": 246,
                    "images": [123, 138, 143, 102, 111, 130, 148, 109],
                    "profile": "assets/avatar/laura.jpg"
                }, {
                    "name": "Thaddus Facchini",
                    "date": "1498242193",
                    "likes": 206,
                    "comments": 647,
                    "images": [121, 103, 112, 127, 129, 120, 136, 105],
                    "profile": "assets/avatar/helen.jpg"
                }, {
                    "name": "Valentine Boribal",
                    "date": "1498589459",
                    "likes": 686,
                    "comments": 832,
                    "images": [113, 115, 146, 132, 118, 145, 150, 147],
                    "profile": "assets/avatar/matt.jpg"
                }, {
                    "name": "Priscella Alenshev",
                    "date": "1503387958",
                    "likes": 409,
                    "comments": 872,
                    "images": [145, 147, 117, 125, 101, 143, 100, 116, 133, 140],
                    "profile": "assets/avatar/jenny.jpg"
                }, {
                    "name": "Brade Bullman",
                    "date": "1518551996",
                    "likes": 274,
                    "comments": 136,
                    "images": [110, 143, 120, 144, 103, 149, 137, 141, 148],
                    "profile": "assets/avatar/jenny.jpg"
                }, {
                    "name": "Clemmie Blockey",
                    "date": "1509821862",
                    "likes": 648,
                    "comments": 204,
                    "images": [126, 129, 148, 116, 118, 101, 135, 149],
                    "profile": "assets/avatar/daniel.jpg"
                }, {
                    "name": "Lazare Nudd",
                    "date": "1501981972",
                    "likes": 512,
                    "comments": 138,
                    "images": [142, 129, 122, 135, 105, 146, 126, 123, 148, 110],
                    "profile": "assets/avatar/tom.jpg"
                }]
            });
        }
    };
});
//# sourceMappingURL=models.js.map
