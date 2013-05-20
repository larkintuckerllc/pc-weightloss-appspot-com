define(["backbone","mustache","views/FoodView"],function(Backbone,Mustache,FoodView) {
    var View = Backbone.View.extend({
    	events: {
			"click .prev_button": "soso"			
    	},
        initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Daily Log");
        	this.$el.attr("data-theme", "f");
        	var template = Mustache.compile($("#poor_template").html());
           	this.$el.html(template());
    		var groups = [
    		               	[
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Bagel (1)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Baked Chips (1 c)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Bun (1)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Cereal (1 c)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "FF Cookies (2)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Crackers (6)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Granola Bar (2)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Grits (1 c)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Loaf Bread (2 sl)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Pancakes (1)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Pasta (1 c)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Pop Tarts (2)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Potatoes (1 c)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Pretzels (1/2 c)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Rice (1 c)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Waffle (1 c)", points: 8},
{quality: "poor" ,group: "bread", groupName: "Bread", name: "Wrap (1)", points: 8}
],
	 [
{quality: "poor" ,group: "beverages", groupName: "Beverages", name: "Alcohol (8 oz)", points: 9},
{quality: "poor" ,group: "beverages", groupName: "Beverages", name: "Fuit Juice (8 oz)", points: 9},
{quality: "poor" ,group: "beverages", groupName: "Beverages", name: "Kool-Aid (8 oz)", points: 9},
{quality: "poor" ,group: "beverages", groupName: "Beverages", name: "Soda - Sugar (8 oz)", points: 9},
{quality: "poor" ,group: "beverages", groupName: "Beverages", name: "Sweet Tea (8 oz)", points: 9}
],
	 [
{quality: "poor" ,group: "sportsdrinks", groupName: "Sports Drinks", name: "Gatorade (8 oz)", points: 9},
{quality: "poor" ,group: "sportsdrinks", groupName: "Sports Drinks", name: "Powerade (8 oz)", points: 9}
],
	 [
{quality: "poor" ,group: "ffdesserts", groupName: "FF Desserts", name: "Jello", points: 9},
{quality: "poor" ,group: "ffdesserts", groupName: "FF Desserts", name: "FF Popsicle (1)", points: 9},
{quality: "poor" ,group: "ffdesserts", groupName: "FF Desserts", name: "FF Pudding", points: 9},
{quality: "poor" ,group: "ffdesserts", groupName: "FF Desserts", name: "LF Frozen Yogurt (1 c)", points: 9},
{quality: "poor" ,group: "ffdesserts", groupName: "FF Desserts", name: "Sherbert (1 c)", points: 9},
{quality: "poor" ,group: "ffdesserts", groupName: "FF Desserts", name: "Sorbet (1 c)", points: 9},
{quality: "poor" ,group: "ffdesserts", groupName: "FF Desserts", name: "Syrup (1 Tbsp)", points: 9}
],
	 [
{quality: "poor" ,group: "otheroptions", groupName: "Other Options", name: "Eggs - With Yolk (2)", points: 9}
],
[
{quality: "poor" ,group: "condiments", groupName: "Condiments", name: "Butter (1 Tbsp)", points: 10},
{quality: "poor" ,group: "condiments", groupName: "Condiments", name: "Cream Cheese (1 Tbsp)", points: 10},
{quality: "poor" ,group: "condiments", groupName: "Condiments", name: "Dressing (1 Tbsp)", points: 10},
{quality: "poor" ,group: "condiments", groupName: "Condiments", name: "Margarine (1 Tbsp)", points: 10},
{quality: "poor" ,group: "condiments", groupName: "Condiments", name: "Mayonnaise (1 Tbsp)", points: 10},
{quality: "poor" ,group: "condiments", groupName: "Condiments", name: "Oil (1 Tbsp)", points: 10},
{quality: "poor" ,group: "condiments", groupName: "Condiments", name: "Sour Cream (1 Tbsp)", points: 10}
],
[
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Bacon (2 strips)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Calamari (1/2 c)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Cheese (2 oz)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Chicken (2 oz)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Chicken Nuggets (4)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Chips (1 c)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "French Toast (2)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Fries (1/2 c)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Hamburger (1)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Hashbrown (1 c)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Hot Dog (1)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Lasagna (1 c)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Onion Rings (1 c)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Pizza (1 slice)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Pulled Pork (1/4 c)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Ribs (2)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Sausage (1)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Whole Milk (1 c)", points: 11},
{quality: "poor" ,group: "friedfatfoods", groupName: "Fried / Fat Foods", name: "Wings (2)", points: 11}
],
[
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Brownies (1)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Cake (1 slice)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Candy Bar (1)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Chocolate (1 oz)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Cookies (2)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Crumble (1)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Doughnut (1)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Ice Cream (1 c)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Muffin (1)", points: 12},
{quality: "poor" ,group: "desserts", groupName: "Desserts", name: "Pie (1 slice)", points: 12}
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
        soso: function() {
        	router.soso();
        }
    });
    return View;
});