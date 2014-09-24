(function($){
	$(function(){
		$.fn.rtFixedBlock = function(params){
			var opts = $.extend({
				idReplace : "replace-elem",
				clsReplace: '',
				clsFixed  : "",
				cssFixed  : {},
				stopElem  : null
			}, params);
			
			return this.each(function(index){
				var self = $(this);
				
				if(self.data("rtFixedBlock")) return;
				
				self.data("rtFixedBlock", true);
				
				var methods = {
					onScroll: function(){
						var sT = $(window).scrollTop(),
							offset = this.replaceElem ? this.replaceElem.offset() : self.offset();
						
						if(sT > offset.top){
							if(!this.replaceElem){
								this.replaceElem = $('<div />',{
									id: opts.idReplace+index
								}).insertBefore(self).addClass(opts.clsReplace);
							}
							
							if(opts.stopElem){
								if(sT > opts.stopElem.height() + opts.stopElem.offset().top - self.height()){
									self.css({
										position: "absolute",
										top: opts.stopElem.height() - self.height()
									}).parent().css("position", "relative");
								} else {
									self.css(opts.cssFixed).addClass(opts.clsFixed).css("margin-top", 0).parent().css("position", "");
								}
							} else {
								self.css(opts.cssFixed).addClass(opts.clsFixed).css("margin-top", 0).parent().css("position", "");
							}
							self.width(this.replaceElem.width());
							this.replaceElem.height(self.outerHeight());
						} else {
							this.replaceElem && this.replaceElem.remove();
							delete this.replaceElem;
							self.removeClass(opts.clsFixed);
							self.removeAttr("style");
						}
					},
					
					init: function(){
						$(window).off(".fixedFilter"+index).on("scroll.fixedFilter"+index+" resize.fixedFilter"+index+" load.fixedFilter"+index, $.proxy(this.onScroll, this));
					}
				};
				
				methods.init();
			});
		}
	});
}(jQuery));










