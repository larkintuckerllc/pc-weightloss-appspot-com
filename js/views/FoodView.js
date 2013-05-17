define(["backbone","mustache","jquery","jquerymobile"],function(Backbone,Mustache,$) {
    var View = Backbone.View.extend( {
    	tagName: "li",
    	events: {
    		"click": "add"
    	},
    	initialize: function(options) {
    		this.food = options.food;
        	this.$el.attr("data-icon", "plus");
        },
        render: function() {
        	var template = Mustache.compile($("#food_template").html()); 
        	this.$el.html(template(this.food));
            return this;
        },
        add: function() {
        	router.portion(this.food, this.model);
        }
    });
    return View;
});