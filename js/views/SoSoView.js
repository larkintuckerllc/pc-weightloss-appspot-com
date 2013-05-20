define(["backbone","mustache","views/FoodView"],function(Backbone,Mustache,FoodView) {
    var View = Backbone.View.extend({
    	events: {
			"click .prev_button": "good",
			"click .next_button": "poor"
    	},
        initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Daily Log");
        	this.$el.attr("data-theme", "e");
        	var template = Mustache.compile($("#soso_template").html());
           	this.$el.html(template());
    		var groups = [
    		              	[
{quality: "soso" ,group: "wholegrain", groupName: "Whole Grain", name: "Oatmeal (1 c)", points: 7},
{quality: "soso" ,group: "wholegrain", groupName: "Whole Grain", name: "WW Bread (2 sl)", points: 7},
{quality: "soso" ,group: "wholegrain", groupName: "Whole Grain", name: "WW Pasta (1 c)", points: 7},
{quality: "soso" ,group: "wholegrain", groupName: "Whole Grain", name: "Brown Rice (1 c)", points: 7},
{quality: "soso" ,group: "wholegrain", groupName: "Whole Grain", name: "WW Wrap (1)", points: 7},
{quality: "soso" ,group: "wholegrain", groupName: "Whole Grain", name: "Corn (1/2 c)", points: 7},
{quality: "soso" ,group: "wholegrain", groupName: "Whole Grain", name: "FF Popcorn (4 c)", points: 7}
							],
							 [
{quality: "soso" ,group: "driedfruits", groupName: "Dried Fruits", name: "Apricots (1/4 c)", points: 7},
{quality: "soso" ,group: "driedfruits", groupName: "Dried Fruits", name: "Cranberries (1/4 c)", points: 7},
{quality: "soso" ,group: "driedfruits", groupName: "Dried Fruits", name: "Dates (1/4 c)", points: 7},
{quality: "soso" ,group: "driedfruits", groupName: "Dried Fruits", name: "Raisins (1/4 c)", points: 7}
							],
							 [
{quality: "soso" ,group: "otheroptions", groupName: "Other Options", name: "Raisin Bran (1 c)", points: 7},
{quality: "soso" ,group: "otheroptions", groupName: "Other Options", name: "Total (3/4 c)", points: 7},
{quality: "soso" ,group: "otheroptions", groupName: "Other Options", name: "Smart Start (1 c)", points: 7}
							],
							 [
{quality: "soso" ,group: "higherfiberoptions", groupName: "Higher Fiber Options", name: "Arnold's Double Fiber Bread (2 sl)", points: 7},
{quality: "soso" ,group: "higherfiberoptions", groupName: "Higher Fiber Options", name: "Ole' High Fiber Wrap (2)", points: 7},
{quality: "soso" ,group: "higherfiberoptions", groupName: "Higher Fiber Options", name: "Uncle Sam's (3/4 c)", points: 7},
{quality: "soso" ,group: "higherfiberoptions", groupName: "Higher Fiber Options", name: "Fiber One Bar (1)", points: 7} 
    		              	  ]
    		               	];    		
			var $ul = this.$el.find(".foods_listview");
    		for (var i=0; i<groups.length; i++) {
    			var group = groups[i];
    			for (var j=0; j<group.length; j++) {
       				var food = group[j];
    				if (j==0) {
    					$ul.append("<li data-role=\"list-divider\">" + food.groupName + "</li>");
    				}
            		var view = new FoodView({food: food, model: this.model});
            		$ul.append(view.render().el);
    			}
    		}
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
    	},
        good: function() {
        	router.good();
        },
        poor: function() {
        	router.poor();
        }
    });
    return View;
});