define(["backbone","mustache","jquery","jquerymobile"],function(Backbone,Mustache,$) {
    var View = Backbone.View.extend({
    	events: {
    		"click #minutes_cancel_button": "cancel",
			"click #minutes_add_button": "add"
    	},
    	initialize: function() {
    		this.name = this.options.name;
    		this.day = this.options.day;
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Food Log");
        	this.$el.attr("data-close-btn", "none");
        	var template = Mustache.compile($("#minutes_template").html());
        	this.$el.html(template({name: this.name}));
    	},
        add: function() {
        	var minutes = this.$el.find("#minutes_input").val();			
        	var day = this.day;
        	var exercise = { name: this.name, minutes: minutes};
        	var now = new Date();
        	exercise.date = now.getTime();
        	$('#block-ui').show();
			$.mobile.loading("show");
			day.exercises().create(exercise,{success: function() {
				day.fetch({success: function() {
					$.mobile.loading("hide");
					$('#block-ui').hide(); 
					router.exerciseOptions();   				
				},
				error: function() {
					router.error();
				}});				
			}, 
			error: function() {
				router.error();
			}});
        },
        cancel: function() {
        	router.exerciseOptions();
        }
    });
    return View;
});