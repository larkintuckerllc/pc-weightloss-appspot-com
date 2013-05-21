define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend( {
    	tagName: "li",
  		events: {
			"click": "deleteWeight"
		},
        initialize: function() {
        	this.$el.attr("data-icon", "delete");
        	this.$el.html("<a>" + this.model.readableDate() + " <span class=\"ui-li-count\">" + this.model.pounds() + "</span></a>");
            return this;
        },
        deleteWeight: function() {
			$('#block-ui').show();
			$.mobile.loading("show");
			this.model.destroy({
				success: function() {
					$.mobile.loading("hide");
	        		$('#block-ui').hide();							
				}, 
				error: function() {
					router.error();
				}
			});  
		}
    });
    return View;
});