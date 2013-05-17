define(["backbone","views/FoodView"],function(Backbone,FoodView) {
    var View = Backbone.View.extend({
    	events: {
			"click #same_day_dialog_close": "close"
    	},
        close: function() {
        	router.day(router.mostRecentDay());
        }
   });
    return View;
});