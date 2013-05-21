define(["backbone","views/WeightItemView"],function(Backbone,WeightItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "totals",
    		"click #add_weight_button": "addWeight"
    	},
        initialize: function() {
            this.model.weights().on("sync destroy",this.render,this);
        },
        render: function() {
        	var $ul = this.$el.find("#weights_listview");
			$ul.empty();
			this.model.weights().each(function(weight) {
				var weightItemView = new WeightItemView({model: weight});
				$ul.append(weightItemView.el);
			});
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
            return this;
        },
        totals: function() {
        	router.totals();
        },
        addWeight: function() {
        	router.pounds();
        }
    });
    return View;
});