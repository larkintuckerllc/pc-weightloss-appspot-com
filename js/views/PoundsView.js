define(["backbone","mustache","jquery","jquerymobile"],function(Backbone,Mustache,$) {
    var View = Backbone.View.extend({
    	events: {
			"click #pounds_minus_button": "minus",
			"click #pounds_plus_button": "plus",
    		"click #pounds_cancel_button": "cancel",
			"click #pounds_save_button": "save",
    	},
    	initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Daily Log");
        	this.$el.attr("data-close-btn", "none");
        	var lastWeight = 0; 
        	if (this.model.weights().length > 0) {
        		lastWeight = this.model.weights().at(0).pounds();
        	}				
        	var templateObject = {lastWeight: lastWeight};        	
        	var template = Mustache.compile($("#pounds_template").html());
        	this.$el.html(template(templateObject));
        },
        render: function() {
        	var $slider = this.$el.find("#pounds_input");
			if ($slider.hasClass("ui-slider-input")) {
	        	var lastWeight = 0; 
	        	if (this.model.weights().length > 0) {
	        		lastWeight = this.model.weights().at(0).pounds();
	        	}				
	        	$slider.val(lastWeight);
				$slider.slider("refresh");
			}
        },
        minus: function() {
        	var $slider = this.$el.find("#pounds_input");
        	var currentWeight = parseInt($slider.val());
        	if (currentWeight > 0) {
        		$slider.val(currentWeight - 1);
            	$slider.slider("refresh");	
        	}
        },
        plus: function() {
        	var $slider = this.$el.find("#pounds_input");
        	var currentWeight = parseInt($slider.val());
        	if (currentWeight < 400) {
        		$slider.val(currentWeight + 1);
            	$slider.slider("refresh");
        	}       	
        },
        cancel: function() {
			router.weights();				
        },
        save: function() {
        	var now = new Date();
        	var pounds = this.$el.find("#pounds_input").val();	
        	var weight = {date: now.getTime(), pounds: pounds};
			$('#block-ui').show();
			$.mobile.loading("show");
			this.model.weights().create(weight,{success: function() {
				$.mobile.loading("hide");
        		$('#block-ui').hide();		
				router.weights();				
			}, 
			error: function() {
				router.error();
			}});
        }
    });
    return View;
});