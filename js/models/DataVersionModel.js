define(["backbone"],function(Backbone) {
    var Model = Backbone.Model.extend({
    	urlRoot: "/dataversions",
    	idAttribute: "id",
        version: function() {
         	return this.get("version");
        }	
    });
    return Model;
});