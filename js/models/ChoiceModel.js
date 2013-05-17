define(["backbone","backbonerelational"],function(Backbone) {
    var Model = Backbone.RelationalModel.extend({
    	urlRoot: "/choices",
    	idAttribute: "id",
    	quality: function() {
    		return this.get("quality");
    	},
    	group: function() {
    		return this.get("group");
    	},
    	name: function() {
    		return this.get("name");
    	},
    	points: function() {
    		var points = this.get("points");
    		points = points / 100;
    		return points;
    	},
    	portion: function() {
    		return this.get("portion");
    	},
    	date: function() {
    		return this.get("date");
    	}
    });
    return Model;
});