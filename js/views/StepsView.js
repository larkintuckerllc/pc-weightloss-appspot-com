define(["backbone","mustache","jquery","jquerymobile"],function(Backbone,Mustache,$) {
    var View = Backbone.View.extend({
    	events: {
    		"click #steps_cancel_button": "cancel",
			"click #steps_save_button": "save"
    	},
    	initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Daily Log");
        	this.$el.attr("data-close-btn", "none");
        	var template = Mustache.compile($("#steps_template").html());
        	this.$el.html(template(this.model));
        },
        render: function() {
        	var $slider = this.$el.find("#steps_input"); 
        	$slider.val(this.model.steps());
			if ($slider.hasClass("ui-slider-input")) {
				$slider.slider("refresh");
			}
        },
        cancel: function() {
			router.totals();				
        },
        save: function() {
			$('#block-ui').show();
			$.mobile.loading("show");
        	var steps = parseInt(this.$el.find("#steps_input").val());	
        	this.model.save({steps: steps}, {
        		success: function() {
        			$.mobile.loading("hide");          					
        			$('#block-ui').hide(); 
        			router.totals();
        		},
        		error: function() {
        			router.error();
        		}
        	});
        }
    });
    return View;
});