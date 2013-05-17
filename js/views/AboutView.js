define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend({
    	events: {
			"click #about_close_button": "close"
    	},
        close: function() {
        	router.totals();
        }
    });
    return View;
});