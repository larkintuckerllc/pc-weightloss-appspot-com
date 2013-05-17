define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend( {
    	tagName: "li",
  		events: {
			"click": "navigate"
		},
        render: function() {
        	this.$el.html("<a>" + this.model.readableDate() + " <span class=\"ui-li-count\">" + this.model.points() + "</span></a>");
            return this;
        },
        navigate: function() {
        	router.day(this.model);
		}
    });
    return View;
});