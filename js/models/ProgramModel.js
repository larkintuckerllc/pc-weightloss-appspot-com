define(["backbone","models/DayModel","models/WeightModel","backbonerelational"],function(Backbone,DayModel,WeightModel) {
    var Model = Backbone.RelationalModel.extend({
    	urlRoot: "/programs",
    	idAttribute: "id",
    	relations: [{
    		type: Backbone.HasMany,
    		key: "days",
    		relatedModel: DayModel,
    		reverseRelation: {
    			key: "programId",
    			includeInJSON: 'id'
    		}
    	},
    	{
    		type: Backbone.HasMany,
    		key: "weights",
    		relatedModel: WeightModel,
    		reverseRelation: {
    			key: "programId",
    			includeInJSON: 'id'
    		}
    	}],
    	initialize: function() {
        	var days = this.get("days");
        	days.comparator = function(day) {
        		var order = -1 * day.date();
        	    return order;
        	};
        	days.sort();
        	var weights = this.get("weights");
        	weights.comparator = function(weight) {
        		var order = -1 * weight.date();
        	    return order;
        	};
        	weights.sort();
    	},
    	fbId: function() {
         	return this.get("fbId");
        },
        email: function() {
         	return this.get("email");
        },
        name: function() {
         	return this.get("name");
        },
        plan: function() {
        	return this.get("plan");
        },
        days: function() {
        	return this.get("days");
        },
        weights: function() {
        	return this.get("weights");
        }
    });
    return Model;
});