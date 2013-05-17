define(["backbone"],function(Backbone) {
    var Model = Backbone.Model.extend({
    	urlRoot: "/unauthorized",
    	idAttribute: "id",
    	fbId: function() {
         	return this.get("fbId");
        },
        email: function() {
         	return this.get("email");
        },
        name: function() {
         	return this.get("name");
        }	
    });
    return Model;
});