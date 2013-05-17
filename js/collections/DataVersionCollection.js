define(["backbone","models/DataVersionModel"], function(Backbone,DataVersionModel ) {	
    var Collection = Backbone.Collection.extend( {
        model: DataVersionModel,
        url: "/dataversions"
    });
    return Collection;
});