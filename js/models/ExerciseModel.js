define(["backbone","backbonerelational"],function(Backbone) {
    var Model = Backbone.RelationalModel.extend({
    	urlRoot: "/exercises",
    	idAttribute: "id",
    	name: function() {
    		return this.get("name");
    	},
    	minutes: function() {
       		return this.get("minutes");
       	},
    	date: function() {
    		return this.get("date");
    	}
    });
    return Model;
});