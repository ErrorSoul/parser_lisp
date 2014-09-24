var rtSocial = 
{
	o: {
		items: $('ul.social-links > li'),
		icons: $('ul.social-links > li > a'),
		popups: $('ul.social-links > li > span'),
		limitingBlockSelector: 'ul.social-links',
		limitPadding: 0
	},
	init: function(button) {
		if (Sniffer.browser == 'ie' && Sniffer.version < 8) return;

		var _this = this;
		var o = this.o;
		o.icons.on('click', function(event) {
			if (event.button == 0 && !event.ctrlKey && !event.metaKey && !rtMedia(rtOptions.mediaSizes.tablet[1])) {
				event.stopPropagation();

				var li = $(this).parent('li');
				//var popup = li.children('span').children('span');

				if (li.hasClass('active')) {
					li.removeClass('active');
				}
				else {
					_this.hideAll();
					li.addClass('active');
				}

				return false;
			}
		});

		$('body').on('click', function() {
			_this.hideAll();
		});

		o.popups.on('click', function(event) {
			event.stopPropagation();
		});
	},
	hideAll : function() {
		this.o.items.removeClass('active');
	}
}