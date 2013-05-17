define(["backbone","models/DayModel","backbonerelational"],function(Backbone,DayModel) {
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
    	}],
    	initialize: function() {
        	var days = this.get("days");
        	days.comparator = function(day) {
        		var order = -1 * day.date();
        	    return order;
        	};
        	days.sort();    		
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
        }
    });
    return Model;
});