define(["backbone","mustache","views/ChoiceItemView","views/ExerciseItemView",
        "jquery","mustache","jquerymobile"],
        function(Backbone,Mustache,ChoiceItemView,ExerciseItemView,
        		$,Mustache) {
    var View = Backbone.View.extend({
    	events: {
			"click .menu_button": "menu",
			"click .food_choices_menu_item": "foodChoices",
			"click .exercise_options_menu_item": "exerciseOptions",
			"click .steps_menu_item": "steps",						
			"click .screen_menu_item": "screen",			
			"click .new_day_menu_item": "newDay",
			"click .days_menu_item": "days",
			"click .logout_menu_item": "logout",
			"click .about_menu_item": "about"			
				
    	},
        initialize: function() {
        	this.model.on("change",this.render,this);
            this.model.choices().on("sync destroy",this.render,this);
            this.model.exercises().on("sync destroy",this.render,this);
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Food Log"); 
        	this.numbers = ["points","minutes","steps","screen","legumes","vegetables","fruits","lfsugardairy","nuts","leanmeats","wholegrain"];
    		var planRanges = {
    				success: {
	    				points: {key: "points", name: "Points",  min: 37, max: 52},
	    				minutes: {key: "minutes", name: "Minutes", min:30, max: "plus"},
	    				steps: {key: "steps", name: "Steps", min: 5000, max: "plus"},
	    				screen: {key: "screen", name: "Screen Time", min: 0, max: 2},
	    				legumes: {key: "legumes", name: "Legumes",  min: 1, max: 2},
	    				vegetables: {key: "vegetables", name: "Vegetables",  min: 4, max: "plus"},
	    				fruits: {key: "fruits", name: "Fruits", total: 0,  min: 1, max: 2},
	    				lfsugardairy: {key: "lfsugardairy", name: "LF & Sugar Dairy",  min: 2, max: 3},
	    				nuts: {key: "nuts", name: "Nuts",  min: 1, max: 2},
	    				leanmeats: {key: "leanmeats", name: "Lean Meats",  min: 2, max: 2},    				
	    				wholegrain: {key: "wholegrain", name: "Whole Grain",  min: 1, max: 1}
    				},
    				champion: {
	    				points: {key: "points", name: "Points",  min: 47, max: 62},
	    				minutes: {key: "minutes", name: "Minutes", min:30, max: "plus"},
	    				steps: {key: "steps", name: "Steps", min: 5000, max: "plus"},
	    				screen: {key: "screen", name: "Screen Time", min: 0, max: 2},
	    				legumes: {key: "legumes", name: "Legumes",  min: 2, max: 3},
	    				vegetables: {key: "vegetables", name: "Vegetables",  min: 5, max: "plus"},
	    				fruits: {key: "fruits", name: "Fruits", total: 0,  min: 2, max: 3},
	    				lfsugardairy: {key: "lfsugardairy", name: "LF & Sugar Dairy", min: 3, max: 4},
	    				nuts: {key: "nuts", name: "Nuts",  min: 1, max: 2},
	    				leanmeats: {key: "leanmeats", name: "Lean Meats",  min: 2, max: 2},    				
	    				wholegrain: {key: "wholegrain", name: "Whole Grain",  min: 1, max: 1}
    				}, 
    				achieve: {
	    				points: {key: "points", name: "Points",  min: 62, max: 75},
	    				minutes: {key: "minutes", name: "Minutes", min:30, max: "plus"},
	    				steps: {key: "steps", name: "Steps", min: 5000, max: "plus"},
	    				screen: {key: "screen", name: "Screen Time", min: 0, max: 2},
	    				legumes: {key: "legumes", name: "Legumes",  min: 3, max: 3},
	    				vegetables: {key: "vegetables", name: "Vegetables",  min: 6, max: "plus"},
	    				fruits: {key: "fruits", name: "Fruits", total: 0,  min: 3, max: 3},
	    				lfsugardairy: {key: "lfsugardairy", name: "LF & Sugar Dairy",  min: 4, max: 4},
	    				nuts: {key: "nuts", name: "Nuts",  min: 2, max: 3},
	    				leanmeats: {key: "leanmeats", name: "Lean Meats",  min: 2, max: 3},    				
	    				wholegrain: {key: "wholegrain", name: "Whole Grain",  min: 1, max: 1}
    				}
    		};
    		this.numberRanges = planRanges[this.model.get("programId").plan()];
        	this.numberTemplate = Mustache.compile($("#number_template").html());
        	var pageTemplate = Mustache.compile($("#day_template").html());
           	this.$el.html(pageTemplate(this.model));
        },
        render: function() {
        	var dayNumbers = this.model.numbers();
        	var $ul = this.$el.find("#choices_listview");
			$ul.empty();		
			$ul.append("<li data-role=\"list-divider\">Totals</li>");
			for (var i = 0; i < this.numbers.length; i++) {
				var numberKey = this.numbers[i];
				var total = dayNumbers[numberKey];
				var ranges = this.numberRanges[numberKey];
				ranges.total = total;
				ranges.theme = "c";
				if ((total >= ranges.min) && ((total <= ranges.max) || (ranges.max == "plus"))) {
					ranges.theme = "d";					
				}
				$ul.append(this.numberTemplate(ranges));			
			}
			$ul.append("<li data-role=\"list-divider\">Choices</li>");
			this.model.choices().each(function(choice) {
				var choiceItemView = new ChoiceItemView({model: choice});
				$ul.append(choiceItemView.render().el);
			});		
			$ul.append("<li data-role=\"list-divider\">Exercises</li>");
			this.model.exercises().each(function(exercise) {
				var exerciseItemView = new ExerciseItemView({model: exercise});
				$ul.append(exerciseItemView.el);
			});					
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
			return this;
        },
    	menu: function() {
    		var $menu = this.$el.find(".menu");
        	if ($menu.hasClass("ui-panel-open")) {
        		$menu.panel("close");        		        		
        	} else {
        		$menu.panel("open");        		
        	}
    	},
        foodChoices: function() {
        	router.good();
        },
        exerciseOptions: function() {
        	router.exerciseOptions();
        },
        steps: function() {
        	router.steps();
        },
        screen: function() {
        	router.screen();
        },
        newDay: function() {
    		var days = this.model.get("programId").days();
        	var lastDate = new Date(router.mostRecentDay().date());
        	var now = new Date();
        	if (now.getYear() != lastDate.getYear() ||
        			now.getMonth() != lastDate.getMonth() ||
        			now.getDate() != lastDate.getDate()) {
    			$('#block-ui').show();
    			$.mobile.loading("show");
    			day = days.create({
    				date: now.getTime(),
    				points: 0,
    			    legumes: 0,
    			    vegetables: 0,
    			    fruits: 0,
    			    lfsugardairy: 0,
    			    nuts: 0,
    			    leanmeats: 0,
    			    wholegrain: 0,
    			    minutes: 0,
    			    steps: 0,
    			    screen: 0
    			}, 
    			{success: function() {
        			$.mobile.loading("hide");          					
        			$('#block-ui').hide(); 
    				router.day(day);
    			},
    			error: function() {
    				router.error();
    			}});  			        		
        	} else {
        		router.sameDay();	
        	}
        },
        days: function() {
        	router.days();
        },
        logout: function() {
          	FB.logout();
        	delete router.credentials;
        	router.start();
        },
        about: function() {
        	router.about();
        }
    });
    return View;
});