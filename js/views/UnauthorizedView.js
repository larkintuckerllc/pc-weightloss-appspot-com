define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend({
    	events: {
			"click #logout_button": "logout"
    	},
        logout: function() {
          	FB.logout();
        	delete router.credentials;
          	router.start();
        }
    });
    return View;
});