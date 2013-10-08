function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Use Of Sugar.js in Appcelerator /n Check your Console",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    require("sugar");
    Ti.API.info("Index of c :) " + [ "a", "b", "c" ].indexOf("c"));
    Ti.API.info("This remove name which contain o :) " + [ "rocteady", "and", "bop" ].findAll(/o/));
    Ti.API.info("Average value :)" + [ 1, 65, 2, 79, 34 ].average());
    Ti.API.info("Seperate value :) " + "offon".chars());
    Ti.API.info("Formating value :) " + 4235e3.format());
    Ti.API.info("Second to Minute :) " + Date.create("3200 seconds ago").relative());
    Ti.API.info("Current Date and it return true or false :) " + Date.create().is("the 7th of June"));
    Ti.API.info("Pad :) " + 40..pad(5));
    Ti.API.info("5 year before value :) " + 5..yearsBefore("2001"));
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;