define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend({
    	events: {
			"click #login_button": "login"
    	},
        login: function() {
          	FB.login(function(response) { }, {scope:'email'});
        }
    });
    return View;
});