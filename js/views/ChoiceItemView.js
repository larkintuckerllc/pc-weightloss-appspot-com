define(["backbone","mustache","jquery","jquerymobile"],function(Backbone,Mustache,$) {
    var View = Backbone.View.extend( {
    	tagName: "li",
  		events: {
			"click": "deleteChoice"
		},
        initialize: function() {
        	this.$el.attr("data-icon", "delete");
        	var themes = {good: "d", soso: "e", poor: "f"};
        	this.$el.attr("data-theme",themes[this.model.quality()]);
        },
        render: function() {
        	var template = Mustache.compile($("#food_portion_template").html()); 
        	this.$el.html(template(this.model));
            return this;
        },
        deleteChoice: function() {
        	var choice = this.model;
			$('#block-ui').show();
			$.mobile.loading("show");
			var day = choice.get("dayId");
			choice.destroy({
				success: function() {
					day.fetch({
						success: function() {
	        				$.mobile.loading("hide");
	        				$('#block-ui').hide();							
						},
						error: function() {
							router.error();
						}
					});
				}, 
				error: function() {
					router.error();
				}
			});        	
        }
    });
    return View;
});