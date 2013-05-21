define(["backbone","jquery",
        "views/AuthenticateView","views/UnauthorizedView",
        "models/ProgramModel",
        "views/DayView","views/GoodView","views/SoSoView","views/PoorView",
        "views/DaysView","views/SameDayDialogView","views/ErrorView","views/AboutView",
        "views/PortionView","collections/DataVersionCollection","views/UpdateRequiredView",
        "views/ExerciseOptionsView","views/MinutesView","views/ScreenView","views/StepsView",
        "views/WeightsView","views/PoundsView",
        "jquerymobile","backbonerelational"],
		function(Backbone,$,
				AuthenticateView,UnauthorizedView,
				ProgramModel,
				DayView,GoodView,SoSoView,PoorView,
				DaysView,SameDayDialogView,ErrorView,AboutView,
				PortionView,DataVersionCollection,UpdateRequiredView,
				ExerciseOptionsView,MinutesView,ScreenView,StepsView,
				WeightsView,PoundsView) {
	var Router = Backbone.Router.extend( {
		initialize: function(options) {
			var dataVersion = options.dataVersion;
        	new ErrorView({el: "#error"});
        	new UpdateRequiredView({el: "#update_required"});
			var dataVersions = new DataVersionCollection();
			router = this;
			dataVersions.fetch({
				success: function() {
					if ((dataVersions.length == 1) && (dataVersions.at(0).version() == dataVersion)) {
						new AuthenticateView({el: "#authenticate"});
			        	new UnauthorizedView({el: "#unauthorized"});
			        	new AboutView({el: "#about"}); 
						var e = document.createElement('script'); e.async = true;
				        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
				        document.getElementById('fb-root').appendChild(e);			
						window.fbAsyncInit = function() {
							FB.init({ appId: '432392090179457', 
				            status: true, 
				            cookie: true,
				            xfbml: true,
				            oauth: true});
				            FB.Event.subscribe('auth.statusChange', function(response) {
				                if (response.authResponse) {
				                	FB.api("/me", function(response) {       		
				                		router.credentials = {};
				                		router.credentials.fbId = response.id;
				                		router.credentials.email = response.email;
				                		router.credentials.name = response.name;
				                		router.authorize();
				                	});
				                }
				            });		
				        };
			        	router.start();
					} else {
						router.updateRequired();
					}
				},
				error: function() {
					router.error();
				}});				
        },
        error: function() {
			$.mobile.loading("hide");          					
			$('#block-ui').hide();
        	$.mobile.changePage("#error",{role:"dialog"});        	
        },
        updateRequired: function() {
			$.mobile.loading("hide");          					
			$('#block-ui').hide();
        	$.mobile.changePage("#update_required",{role:"dialog"});        	        	
        },
        start: function() {
			$.mobile.loading("hide");          					
			$('#block-ui').hide();
        	$.mobile.changePage("#authenticate",{role:"dialog"});    			
        },
        authorize: function() {          					
			$('#block-ui').show();
			$.mobile.loading("show");
    		router = this;
			$.ajax({
				type: "POST",
				url: "/authorizepr",
				data: this.credentials,
				dataType: "json",
				timeout: 5000,
				success: function(data) {
					if (data == -1) {
						router.unauthorized();
					} else {			
						router.program = ProgramModel.findOrCreate({id: data});
						router.program.fetch({success: function() {
							var daysView = new DaysView({el: "#days", model: router.program});
							daysView.render();
							var weightsView = new WeightsView({el: "#weights", model: router.program});
							weightsView.render();
							router.poundsView = new PoundsView({id: "pounds", model: router.program});
				        	$("body").append(router.poundsView.el);
				        	new SameDayDialogView({el: "#same_day_dialog", model: router.program});
					   		var day = router.mostRecentDay();
					   		if (day == null) {
					   			var now = new Date();
								day = router.program.days().create({
									date: now.getTime(),
									points: 0,
								    legumes: 0,
								    vegetables: 0,
				    			    fruits: 0,
				    			    lfsugardairy: 0,
				    			    nuts: 0,
				    			    leanmeats: 0,
				    			    wholegrain: 0,
				    			    minutes: 0,
				    			    steps: 0,
				    			    screen: 0
								}, 
								{success: function() {
									router.day(day);	
								},
								error: function() {
									router.error();
								}});	
				    		} else {
				    			router.day(day);
				    		}
						},
						error: function() {
							router.error();
						}});
					}
				},
				error: function(request, status, err) {
					router.error();
				}
			});
        },
        unauthorized: function() {
			$.mobile.loading("hide");          					
			$('#block-ui').hide();
        	$.mobile.changePage("#unauthorized",{role:"dialog"});
        },
        mostRecentDay: function() {
	   		var day = null;
            for (var i=0;i<this.program.days().length;i++) {
            	var iDay = this.program.days().at(i);
            	if (day == null) {
            		day = iDay;
            	} else {
            		if (iDay.get("date") >= day.get("date")) {
            			day = iDay;
            		}
            	}
            }
            return day;
        },
        day: function(day) {
    		var router = this;
            $('#block-ui').show();
            $.mobile.loading("show");    		
    		$("#initialize").on("pageshow", function() {
    			$("#initialize").off("pageshow");
    			day.off("change");
    			day.choices().off("sync destroy"); 
    			day.exercises().off("sync destroy"); 
                if ((typeof router.dayView) != "undefined") {
        			router.dayView.remove();       			
        			router.goodView.remove();
        			router.soSoView.remove();
        			router.poorView.remove();
        			router.exerciseOptionsView.remove();
        			router.screenView.remove();
        			router.stepsView.remove();
                }  
                day.fetch({success: function() {
                	router.dayView = new DayView({id: "day", model: day});
                	$("body").append(router.dayView.render().el);                	
                	router.goodView = new GoodView({id: "good", model: day});
                	$("body").append(router.goodView.el);
                	router.soSoView = new SoSoView({id: "soso", model: day});
                	$("body").append(router.soSoView.el);                	
                	router.poorView = new PoorView({id: "poor", model: day});
                	$("body").append(router.poorView.el);
                	router.exerciseOptionsView = new ExerciseOptionsView({id: "exercise_options", model: day});
                	$("body").append(router.exerciseOptionsView.el);
                	router.screenView = new ScreenView({id: "screen", model: day});
                	$("body").append(router.screenView.el);
                	router.stepsView = new StepsView({id: "steps", model: day});
                	$("body").append(router.stepsView.el);
        			$.mobile.loading("hide");          					
        			$('#block-ui').hide();                	
                	router.totals();
                },
                error: function() {
                	router.error();
                }});	
    		});
    		$.mobile.changePage("#initialize",{reverse: false,changeHash: false});
        },
        totals: function() {
        	$.mobile.changePage("#day",{reverse: false,changeHash: false});
        },
        good: function() { 
        	$.mobile.changePage("#good",{reverse: false,changeHash: false});            	         		
        },
        soso: function() {
        	$.mobile.changePage("#soso",{reverse: false,changeHash: false});            	         		        	
        },
        poor: function() {
        	$.mobile.changePage("#poor",{reverse: false,changeHash: false});            	         		        	
        },
        exerciseOptions: function() {
        	$.mobile.changePage("#exercise_options",{reverse: false,changeHash: false});            	         		        	
        },        
        days: function() {
        	$.mobile.changePage("#days",{reverse: false,changeHash: false});            	         		
        },
        weights: function() {
        	$.mobile.changePage("#weights",{reverse: false,changeHash: false});            	         		
        },     
        pounds: function() {
        	router.poundsView.render();
        	$.mobile.changePage("#pounds",{ role: "dialog" });            	         		
        },
        sameDay: function() {
    		$.mobile.changePage("#same_day_dialog", { role: "dialog" });            	         		
        },
        about: function() {
    		$.mobile.changePage("#about", { role: "dialog" });            	         		        	
        },
        portion: function(food, day) {
            if ((typeof router.portionView) != "undefined") {
    			router.portionView.remove();
            }
        	router.portionView = new PortionView({id: "portion", food: food, day: day});            
        	$("body").append(router.portionView.el);            
    		$.mobile.changePage("#portion", { role: "dialog" });            	         		        	        	
        },
        screen: function(day) {
        	this.screenView.render();
    		$.mobile.changePage("#screen", { role: "dialog" });
        },
        steps: function(day) {
        	this.stepsView.render();
    		$.mobile.changePage("#steps", { role: "dialog" });
        },        
        minutes: function(name, day) {
            if ((typeof router.minutesView) != "undefined") {
    			router.minutesView.remove();
            }
        	router.minutesView = new MinutesView({id: "minutes", name: name, day: day});            
        	$("body").append(router.minutesView.el);            
    		$.mobile.changePage("#minutes", { role: "dialog" });            	         		        	        	
        }
    });
    return Router;
});