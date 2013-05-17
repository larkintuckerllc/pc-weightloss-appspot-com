define(["backbone","views/DayItemView"],function(Backbone,DayItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "totals"
    	},
        initialize: function() {
            this.model.days().on("sync destroy",this.render,this);
        },
        render: function() {
        	var $ul = this.$el.find("#days_listview");
			$ul.empty();
			this.model.days().each(function(day) {
				var dayItemView = new DayItemView({model: day});
				$ul.append(dayItemView.render().el);
			});
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
            return this;
        },
        totals: function() {
        	router.totals();
        }
    });
    return View;
});