$.fn.rtBgCover = function(options) {
	$(this).each(function() {
		if (this.rtBgCoverSet) return;
		this.rtBgCoverSet = true;

		var block = $(this);
		var photo = block.css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
		if (photo == 'none') return;
		
		var posY = block.get(0).currentStyle.backgroundPositionY || block.get(0).currentStyle.backgroundPosition.split(' ')[1];

		if (block.get(0).currentStyle.position != 'relative' && block.get(0).currentStyle.position != 'absolute') {
			block.css('position','relative');
		}

		block.css({
			'background-image': 'none',
			'overflow': 'hidden'
		});

		var img = $('<img/>', {
			src: photo,
			css: {
				'position': 'absolute',
				'top': posY,
				'left': '0',
				'margin-left': '0',
				'width': '100%',
				'height': 'auto'
			}
		});

		img.prependTo(block);
		var imgHeight = img.height();
		var imgWidth = img.width();

		if (imgHeight < block.outerHeight()) {
			img.css({
				'height': '100%',
				'width': 'auto',
				'left': '50%',
				'top': '0',
				'margin-top': '0'
			});
		}

		defineMargins(img);

		$(window).on('resize', function() {
			refresh(block, img, posY);
		});

		setInterval(function(){refresh(block, img, posY);}, 4000);
	});

	function refresh(block, img, posY) {
		if (img.width() < block.outerWidth()) {
			img.css({
				'top': posY,
				'left': '0',
				'margin-left': '0',
				'width': '100%',
				'height': 'auto'
			});
		}
		
		if (img.height() < block.outerHeight()) {
			img.css({
				'height': '100%',
				'width': 'auto',
				'left': '50%',
				'top': '0',
				'margin-top': '0'
			});
		}

		defineMargins(img);
	}

	function defineMargins(img) {
		var imgHeight = img.height();
		var imgWidth = img.width();
		var posTop = img.get(0).currentStyle.top.replace('px','');
		var posLeft = img.get(0).currentStyle.left.replace('px','');

		img.css({
			'margin-top': -((posTop.replace('%','')/100)*imgHeight),
			'margin-left': -((posLeft.replace('%','')/100)*imgWidth)
		});
	}

	return this;
}

function refreshBgCover() {
	if ((!Modernizr.bgsizecover && Sniffer.os != 'kindle') || Sniffer.browser == 'opera') {
		setTimeout(function(){
			refresh();
		}, 500);
	}

	function refresh() {
		$('#news article figure')
		.add('section.complementary article figure')
		.add('#teasers figure')
		.add('section.banners figure')
		.add('#sidebar figure.banner')
		.add('#bottom section.foreign figure')
		.add('body.article article#content figure div.photo').rtBgCover();
	}
}