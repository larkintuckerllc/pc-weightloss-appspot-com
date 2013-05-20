define(["backbone","mustache","views/ExerciseView"],function(Backbone,Mustache,ExerciseView) {
    var View = Backbone.View.extend({
    	events: {
			"click .back_button": "totals"
    	},
    	initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", "Daily Log");
        	var template = Mustache.compile($("#exercise_options_template").html());
           	this.$el.html(template());
    		var exercises = [
"PT Exercises",
"Swimming",
"Basketball",
"Biking",
"Jogging",
"Walking",
"Soccer",
"Rollerblading",
"Volleyball",
"Tennis",
"Precor",
"Weights",
"Calisthenics",
"Treadmill",
"Crosstrainer",
"Karate/Arts",
"Aerobic Dance",
"Zumba"
];    		
			var $ul = this.$el.find("#exercises_listview")
    		for (var i=0; i<exercises.length; i++) {
    			var name = exercises[i];
    			var view = new ExerciseView({name: name, model: this.model});
    			$ul.append(view.el);
    		}
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
			return this;
    	},
        totals: function() {
        	router.totals();
        }
    });
    return View;
});