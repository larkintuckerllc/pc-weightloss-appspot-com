define(["backbone","mustache","views/FoodView"],function(Backbone,Mustache,FoodView) {
    var View = Backbone.View.extend({
    	events: {
			"click .back_button": "totals",
			"click .next_button": "soso"
    	},
    	initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Daily Log");
        	this.$el.attr("data-theme", "d");
        	var template = Mustache.compile($("#good_template").html());
           	this.$el.html(template());
    		var groups = [
    		               	[
{quality: "good" ,group: "calfreebev", groupName: "Cal Free Bev", name: "Coffee", points: 0},
{quality: "good" ,group: "calfreebev", groupName: "Cal Free Bev", name: "Crystal Bay", points: 0},
{quality: "good" ,group: "calfreebev", groupName: "Cal Free Bev", name: "Crystal Light", points: 0},
{quality: "good" ,group: "calfreebev", groupName: "Cal Free Bev", name: "Diet Sodas", points: 0},
{quality: "good" ,group: "calfreebev", groupName: "Cal Free Bev", name: "Propel", points: 0},
{quality: "good" ,group: "calfreebev", groupName: "Cal Free Bev", name: "Sugar Free Jello", points: 0},
{quality: "good" ,group: "calfreebev", groupName: "Cal Free Bev", name: "Unsweet Tea", points: 0},
{quality: "good" ,group: "calfreebev", groupName: "Cal Free Bev", name: "Water", points: 0}
	],
   	[
{quality: "good" ,group: "fatfreecond", groupName: "Fat Free Cond", name: "Mustard", points: 0},
{quality: "good" ,group: "fatfreecond", groupName: "Fat Free Cond", name: "Vinegar", points: 0},
{quality: "good" ,group: "fatfreecond", groupName: "Fat Free Cond", name: "Worcestershire", points: 0}    		               	 
	],
   	[    
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Basil", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Cinnamon", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Cilantro", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Cumin", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Dill", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Ginger", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Oregano", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Parsley", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Rosemary", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Thyme", points: 0},
{quality: "good" ,group: "herbspices", groupName: "Herb/Spices", name: "Tumeric", points: 0}
	],
   	[    
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Black Beans (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Black-Eye-Peas (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Garbonzo Beans (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Kidney Beans (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Lentils (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Lima Beans (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Northern Beans (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Pinto Beans (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Red Beans (1/2 c)", points: 1},
{quality: "good" ,group: "legumes", groupName: "Legumes", name: "Soy Beans (1/2 c)", points: 1}
    		               	],
    		               	[
{quality: "good" ,group: "highfiberprotein", groupName: "High Fiber / Protein", name: "Go Lean - Orig (1/2 c)", points: 1},
{quality: "good" ,group: "highfiberprotein", groupName: "High Fiber / Protein", name: "Fiber One - Orig (1/2 c)", points: 1},
{quality: "good" ,group: "highfiberprotein", groupName: "High Fiber / Protein", name: "All Bran (1/2 c)", points: 1},
{quality: "good" ,group: "highfiberprotein", groupName: "High Fiber / Protein", name: "Bran Buds (1/2 c)", points: 1}
    		               	 ],
    		               	[
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Asparagus (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Beets (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Broccoli (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Brussel Sprouts (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Cabbage (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Carrots (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Cauliflower (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Celery (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Collard Greens (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Cucumber (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Eggplant (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Green Beens (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Kale (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Lettuce (1 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Mushrooms (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Okra (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Onion (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Peas (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Pepper (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Spinach (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Sprouts (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Squash (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Sweet Potato (1/2 c)", points: 2},
{quality: "good" ,group: "vegetables", groupName: "Vegetables", name: "Zucchini (1/2 c)", points: 2}
    		               	 ],
    		               	 [
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Apple (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Apricots (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Banana (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Blackberries (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Blueberries  (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Cantaloupe (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Cherries (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Cranberries (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Grapefruit (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Grapes (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Honeydew (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Kiwi (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Mango (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Nectarine (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Orange (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Peach (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Pear (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Pineapple (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Plum (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Rasberries (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Strawberreis (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Tangerine (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Tomato (1/2 c)", points: 3},
{quality: "good" ,group: "fruits", groupName: "Fruits", name: "Watermelon (1/2 c)", points: 3}
							],
							[
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "A-1 Sauce (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "BBQ Sauce (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "Chicken Broth (1/2 c)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "FF Cool Whip (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "FF Dressing (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "FF Mayonnaise (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "Honey (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "Hummus (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "Jelly (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "Ketchup (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "Salsa (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "Spag Sauce (1 Tbsp)", points: 3},
{quality: "good" ,group: "lfcondiments", groupName: "LF Condiments", name: "Sugar (1 Tbsp)", points: 3}    		               	  
							 ],
						   	 [
{quality: "good" ,group: "lfsugardairy", groupName: "LF and Sugar Dairy", name: "Lite Almond Milk (1 c)", points: 4},
{quality: "good" ,group: "lfsugardairy", groupName: "LF and Sugar Dairy", name: "LF Cheese (2 oz)", points: 4},
{quality: "good" ,group: "lfsugardairy", groupName: "LF and Sugar Dairy", name: "FF PI Gk Yogurt  (1 c)", points: 4},
{quality: "good" ,group: "lfsugardairy", groupName: "LF and Sugar Dairy", name: "LF Cottage Ch (1 c)", points: 4},
{quality: "good" ,group: "lfsugardairy", groupName: "LF and Sugar Dairy", name: "LF Yogurt  (1 c)", points: 4},
{quality: "good" ,group: "lfsugardairy", groupName: "LF and Sugar Dairy", name: "Light Soy Milk  (1 c)", points: 4},
{quality: "good" ,group: "lfsugardairy", groupName: "LF and Sugar Dairy", name: "Skim Milk (1 c)", points: 4}
    		               	  ],
    		               	  [
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Almonds (1/4 c)", points: 5},
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Avocado (1/4 c)", points: 5},
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Cashews (1/4 c)", points: 5},
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Olives (1/4 c)", points: 5},
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Peanuts (1/4 c)", points: 5},
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Pecans (1/4 c)", points: 5},
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Nut Butter (1 Tbsp)", points: 5},
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Seeds (1/4 c)", points: 5},
{quality: "good" ,group: "nuts", groupName: "Nuts", name: "Walnuts (1/4 c)", points: 5}
							  ],
						   	  [
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Beef - 97% Lean (3 oz)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Chicken Breast  (3 oz)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Egg Whites (8)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Fish (3 oz)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Ham - Lean (3 oz)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Pork Loin (3 oz)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Smart Dog (3 oz)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Turkey (3 oz)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Egg Beaters (1 c)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Boca Burger (3 oz)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Tofu (3/4 c)", points: 6},
{quality: "good" ,group: "leanmeats", groupName: "Lean Meats", name: "Shrimp (12)", points: 6}
							  ],
						   	  [
{quality: "good" ,group: "proteinbars", groupName: "Protein Bars", name: "Zone (1 bar)", points: 6},
{quality: "good" ,group: "proteinbars", groupName: "Protein Bars", name: "Balance (1 bar)", points: 6},
{quality: "good" ,group: "proteinbars", groupName: "Protein Bars", name: "Powerbar (1 bar)", points: 6},
{quality: "good" ,group: "proteinbars", groupName: "Protein Bars", name: "Cliff (1 bar)", points: 6}
							  ],
						   	  [
{quality: "good" ,group: "proteindrinks", groupName: "Protein Drinks", name: "Slimfast (8 oz)", points: 6},
{quality: "good" ,group: "proteindrinks", groupName: "Protein Drinks", name: "Myoplex (8 oz)", points: 6},
{quality: "good" ,group: "proteindrinks", groupName: "Protein Drinks", name: "Muscle Milk (8 oz)", points: 6}
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
        totals: function() {
        	router.totals();
        },
        soso: function() {
        	router.soso();
        }
    });
    return View;
});