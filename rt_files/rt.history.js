/*
 * Работа с историей браузера
 */
var rtHistory =
{
	push: function(options) {
		var scrollTop = $(window).scrollTop();
		var o =
		{
			object: {},
			url: ''
		}

		o = $.extend(o, options);
		
		if (history.state) history.replaceState($.extend(history.state, {'scrollTop': scrollTop}), '');

		history.pushState(o.object, '', o.url);
	},
	popActions: [],
	pop: function(event) {
		var _this = this;

		if (event.state) {
			$.each(_this.popActions, function(i) {
				_this.popActions[i](event.state);
			});

			if (event.state.scrollTop) window.scrollTo(0, event.state.scrollTop);
			console.log(event.state.scrollTop);
		}
	}
}