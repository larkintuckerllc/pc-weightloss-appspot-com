require.config({
      paths: {
          "jquery": "/js/lib/jquery",
          "jquerymobile": "/js/lib/jquery.mobile",
          "underscore": "/js/lib/underscore",
          "backbone": "/js/lib/backbone",
          "backbonerelational": "/js/lib/backbone-relational",
          "mustache": "/js/lib/mustache"
      },
      shim: {
            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"
            },
            "backbonerelational": {
            	"deps": [ "backbone"]
            },
            "underscore": {
                exports: "_"
            }
      }
});

require(["jquery"],function($) {
	var dataVersion = 5;
	$(document).on("mobileinit",
			function(){
				$.mobile.linkBindingEnabled = false;
				$.mobile.hashListeningEnabled = false;
			}
	);
	require(["jquerymobile"],function() {
		$('#block-ui').show();
		$.mobile.loading("show");
		require(["routers/Router"],function(Router) {
			this.router = new Router({dataVersion: dataVersion});
		});
	});
});
