define(["backbone","mustache","jquery","jquerymobile"],function(Backbone,Mustache,$) {
    var View = Backbone.View.extend({
    	events: {
    		"click #portion_cancel_button": "cancel",
			"click #portion_add_button": "add"
    	},
    	initialize: function() {
    		this.food = this.options.food;
    		this.day = this.options.day;
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Daily Log");
        	this.$el.attr("data-close-btn", "none");
        	var template = Mustache.compile($("#portion_template").html());
        	var themes = {good: "d", soso: "e", poor: "f"};
        	this.food.theme = themes[this.food.quality];
        	this.$el.html(template(this.food));
    	},
        add: function() {
        	var percent = this.$el.find("#percent_input").val();			
        	var day = this.day;
        	var choice = {quality: this.food.quality,
        			group: this.food.group,
        			name: this.food.name};
        	choice.points = Math.round(percent * this.food.points) / 100;
        	choice.portion = percent;
        	var fraction = percent / 100;
        	var now = new Date();
        	choice.date = now.getTime();
        	$('#block-ui').show();
			$.mobile.loading("show");
			day.choices().create(choice,{success: function() {
				day.fetch({success: function() {
					$.mobile.loading("hide");
					$('#block-ui').hide(); 
					switch(choice.quality) {
		        	case "good":
		        		router.good();
		        		break;
		        	case "soso":
		        		router.soso();
		        		break;
		        	case "poor":
		        		router.poor();
		        		break;
		        	}   				
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
			switch(this.food.quality) {
        	case "good":
        		router.good();
        		break;
        	case "soso":
        		router.soso();
        		break;
        	case "poor":
        		router.poor();
        		break;
        	}   				
        }
    });
    return View;
});