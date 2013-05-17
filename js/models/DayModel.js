define(["backbone","underscore","models/ChoiceModel","models/ExerciseModel",
        "backbonerelational"],function(Backbone,_,ChoiceModel,ExerciseModel) {
    var Model = Backbone.RelationalModel.extend({
    	urlRoot: "/days",
    	idAttribute: "id",
    	relations: [{
    		type: Backbone.HasMany,
    		key: "choices",
    		relatedModel: ChoiceModel,
    		reverseRelation: {
    			key: "dayId",
    			includeInJSON: 'id'
    		}
    	},
    	{
    		type: Backbone.HasMany,
    		key: "exercises",
    		relatedModel: ExerciseModel,
    		reverseRelation: {
    			key: "dayId",
    			includeInJSON: 'id'
    		}
    	}],
    	initialize: function() {
        	var choices = this.get("choices");
        	choices.comparator = function(choice) {
        	    return choice.date();
        	};
        	choices.sort();
        	choices.create = function(attrs, options) {
            	if ((typeof attrs.points) != "undefined") {
            		attrs.points = attrs.points * 100;
            	}
        		return Backbone.Collection.prototype.create.call(this, attrs, options);
        	};
    	},
    	date: function() {
         	return this.get("date");
        },
    	readableDate: function() {   		
            function lookUpDay(i) {
            	var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            	return days[i];
            }
    		var dateTime = new Date(this.get("date"));
    		var day = lookUpDay(dateTime.getDay());
        	var date = dateTime.getDate();
        	var month = dateTime.getMonth() + 1;
        	return(day + " " + month + "/" + date);
        },
        points: function() {
    		var points = this.get("points");
    		points = points / 100;
        	return points;
        },
        legumes: function() {
    		var legumes = this.get("legumes");
    		legumes = legumes / 100;
        	return legumes;
        },
        vegetables: function() {
    		var vegetables = this.get("vegetables");
    		vegetables = vegetables / 100;
        	return vegetables;
        },
        fruits: function() {
    		var fruits = this.get("fruits");
    		fruits = fruits / 100;
        	return fruits;
        },
        lfsugardairy: function() {
    		var lfsugardairy = this.get("lfsugardairy");
    		lfsugardairy = lfsugardairy / 100;
        	return lfsugardairy;
        },
        nuts: function() {
    		var nuts = this.get("nuts");
    		nuts = nuts / 100;
        	return nuts;
        },
        leanmeats: function() {
    		var leanmeats = this.get("leanmeats");
    		leanmeats = leanmeats / 100;
        	return leanmeats;
        },
        wholegrain: function() {
    		var wholegrain = this.get("wholegrain");
    		wholegrain = wholegrain / 100;
        	return wholegrain;
        },
        minutes: function() {
        	return this.get("minutes");
        },
        steps: function() {
        	return this.get("steps");
        },
        screen: function() {
        	return this.get("screen");
        },        
        numbers: function() {
        	return {points: this.points(),
        			legumes: this.legumes(),
            		vegetables: this.vegetables(),
            		fruits: this.fruits(),
            		lfsugardairy: this.lfsugardairy(),
            		nuts: this.nuts(),
            		leanmeats: this.leanmeats(),
            		wholegrain: this.wholegrain(),
            		minutes: this.minutes(),
            		steps: this.steps(),
            		screen: this.screen()
        	};
        },
        choices: function() {
        	return this.get("choices");
        },
        exercises: function() {
        	return this.get("exercises");
        }
    });
    return Model;
});