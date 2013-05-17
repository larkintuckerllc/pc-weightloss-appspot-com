define(["backbone","jquery","jquerymobile"],function(Backbone,$) {
    var View = Backbone.View.extend( {
    	tagName: "li",
    	events: {
    		"click": "add"
    	},
    	initialize: function(options) {
    		this.name = options.name;
        	this.$el.attr("data-icon", "plus"); 
        	this.$el.html("<a><li>" + this.name + "</li></a>");
            return this;
        },
        add: function() {
        	router.minutes(this.name, this.model);
        }
    });
    return View;
});