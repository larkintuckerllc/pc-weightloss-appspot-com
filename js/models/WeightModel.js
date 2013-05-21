define(["backbone","underscore","models/ChoiceModel","models/ExerciseModel",
        "backbonerelational"],function(Backbone,_,ChoiceModel,ExerciseModel) {
    var Model = Backbone.RelationalModel.extend({
    	urlRoot: "/weights",
    	idAttribute: "id",
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
        pounds: function() {
    		var pounds = this.get("pounds");
        	return pounds;
        }
    });
    return Model;
});