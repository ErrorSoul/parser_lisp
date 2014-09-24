var rtSidebar = 
{
	o: {
		sidebar: '#sidebar',
		content: '#content',
		sidebarItems: '#sidebar > *',
		alwaysShow: '.widget, .share',
		avoidLast: 'header',
		force: false,
		lastWindowSize: undefined
	},

	adjustHeight: function(options) {
		var o = $.extend(rtSidebar.o, options || {});

		/* prevents ie8 from looping the event */
		if ($(window).width() == o.lastWindowSize && !o.force) {
			return;
		}

		rtSidebar.o.lastWindowSize = $(window).width();
		
		/* no sidebar - no calculations */
		if ($(window).width() <= rtOptions.mediaSizes.tablet[2]) return;

		var contentBlock = $(o.content);
		var sidebarBlock = $(o.sidebar);
		var contentHeight = contentBlock.height();
		var items = $(o.sidebarItems).not(o.alwaysShow);
		var itemArray = [];

		$(o.alwaysShow).addClass('shown');

		items.each(function() {
			itemArray.push(this);
			$(this).addClass('shown');
		});

		while (itemArray.length && sidebarBlock.height()>contentHeight) {
			$(itemArray[itemArray.length-1]).removeClass('shown');
			itemArray.pop();
		}

		while (itemArray.length && $(itemArray[itemArray.length-1]).is(o.avoidLast)) {
			$(itemArray[itemArray.length-1]).removeClass('shown');
			itemArray.pop();
		}
	}
}