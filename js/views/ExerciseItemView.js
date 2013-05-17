define(["backbone","mustache","jquery","jquerymobile"],function(Backbone,Mustache,$) {
    var View = Backbone.View.extend( {
    	tagName: "li",
  		events: {
			"click": "deleteExercise"
		},
        initialize: function() {
        	this.$el.attr("data-icon", "delete");
        	var template = Mustache.compile($("#exercise_template").html()); 
        	this.$el.html(template(this.model));        	
        },
        deleteExercise: function() {
        	var exercise = this.model;
			$('#block-ui').show();
			$.mobile.loading("show");
			var day = exercise.get("dayId");
			exercise.destroy({
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