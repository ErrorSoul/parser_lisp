var rtDatePaginator = 
{
	options:
	{
		fly: true,
		flyClass: 'fly',
		ajaxAction: '',
		paginator: $('.fly-holder'),
		contentBlock: $('#news'),
		button: $('button.month-selector'),
		loads: 0,
		mainPage: (window.mainPage || false),
		feedState: (window.feedState || false)
		/*{
			lastDate: '1111111',
			endOfDay: false,
			endOfHistory: false
		}*/
	},
	vars: {
		stopPos: 0,
		paginatorHeight: 0
	},
	init: function() {
		var o = this.options;
		var _this = this;

		rtHistory.popActions.push(function(state){
			rtDatePaginator.modelToView(state, true, true);
		});

		if (o.feedState && o.contentBlock.length) this.infLoading();

		if (o.paginator.length) {
			this.initScroll();

			if ((window.matchMedia && window.matchMedia('all and (max-width: 1024px)').matches && !(Sniffer.os == 'winphone')) || Sniffer.os == 'ios' || Sniffer.os == 'android' || (Sniffer.os == 'winphone' && Sniffer.osVersion < 8) || (window.matchMedia && window.matchMedia('all and (max-height: 300px)').matches)) _this.options.fly = false;

			if (o.fly) this.fly();

			if (Modernizr.history) {
				o.paginator.find('li a').live('click', function(event) {
					event.preventDefault();
					var ajaxAction = $(this).attr('href');

					_this.ajax(ajaxAction);
				});
			}
		}
	},
	ajax: function(action) {
		var _this = this;

		_this.loadingState()
		$.ajax({
			url: action,
			type: 'GET',
			dataType: 'json',
			data: {ajax: true}
		}).done(function(data) {
			//data.state = {endOfDay: false, endOfhistory: false, lastDate: 123123213}; /* TESTING */
			if (data.news && data.paginator) {
				if (!history.state) history.replaceState(_this.viewToModel(),'');
				rtHistory.push({
					object: data,
					url: action
				});

				if (data.state) {
					_this.options.feedState = data.state;
				}
				else {
					console.warn('no data.state!');
					_this.options.feedState.endOfHistory = true;
				}
				
				_this.modelToView(data, false, false);
			}
			else {
				console.warn('incorrect response');
				rtNotify && rtNotify.create('Ошибка загрузки новостей: некорректный ответ сервера', 'warning');
				_this.removeLoadingState();
			}
		}).fail(function(jqXHR, textStatus) {
			console.warn('something went terribly wrong');
			rtNotify && rtNotify.create('Не удалось загрузить новости<div style="font-style: italic; margin-top: 5px;">'+jqXHR.status+': '+jqXHR.statusText+'</div>', 'warning');
			_this.removeLoadingState();
		}).always(function() {
			_this.infLoading.refresh();
		});
	},
	modelToView: function(data, noScroll, noAnimation) {
		var o = this.options;
		var _this = this;

		if (data.state) {
			o.feedState = data.state;
		}

		if (data.news) {
			o.loads = (data.loads || 0);
			this.replacePaginator(data.paginator);
			
			this.replaceContent(data.news, noAnimation, {
				replaceCallback: function() {
					rtSidebar && rtSidebar.adjustHeight({force: true});
				},
				finishCallback: function() {
					refreshBgCover();
				}
			});

			if (!noScroll) this.scrollToStart();
			rtMonthpicker.hide();

			if (data.current) {
				rtMonthpicker.changeCurrent(data.current.year, data.current.month);
			}
		}
		else if (data.addNews) {
			this.addContent(data.addNews);
			rtSidebar && rtSidebar.adjustHeight({force: true});
			refreshBgCover();
		}
		else {
			console.warn('invalid object');
		}

		_this.infLoading.refresh();
	},
	viewToModel: function() {
		var o = this.options;
		
		return {
			paginator: o.paginator.find('ul').html(),
			news: o.contentBlock.html(),
			current: (rtMonthpicker.model.current || undefined),
			/*(rtMonthpicker.model.current?
				{
					year: rtMonthpicker.model.current.year,
					month: rtMonthpicker.model.current.month
				}
			:undefined),*/
			state: o.feedState,
			loads: o.loads
		};
	},
	loadingState: function() {
		this.options.contentBlock.css({opacity: 0.5});
	},
	removeLoadingState: function(noAnimation, callback) {
		var _this = this;

		_this.options.contentBlock.animate({opacity: 1}, (noAnimation?0:300), function() {
			_this.options.contentBlock.css({opacity: ''});
			callback && callback();
		});
	},
	replaceContent: function(content, noAnimation, callbacks) {
		var _this = this;
		var o = this.options;
			
		o.contentBlock.animate({opacity:0},(noAnimation?0:100),function(){
			if($("#banner__between-news").length){ // вставить рекламу
				(function(){
					o.contentBlock.children().not("#banner__between-news").remove();
					var elems = $(content);
					elems.filter(":lt(3)").prependTo(o.contentBlock);
					elems.filter(":gt(3)").appendTo(o.contentBlock);
				})();
			} else {
				o.contentBlock.html(content);
			}
			
			_this.removeLoadingState(noAnimation, (callbacks && callbacks.finishCallback?callbacks.finishCallback:undefined));
			_this.refreshStopPos();
			callbacks && callbacks.replaceCallback && callbacks.replaceCallback();
		});
	},
	addContent: function(content) {
		var o = this.options;

		o.contentBlock.append(content);
		this.refreshStopPos();
	},
	scrollToStart: function() {
		if ($(window).scrollTop() > $('#main').offset().top) {
			var scrollTo = $('#main').offset().top - 10;
			window.scrollTo(0, scrollTo);
		}
	},
	replacePaginator: function(content) {
		var o = this.options;

		o.paginator.find('ul').html(content);
		o.paginator.find('.mCSB_container').css({
			width: o.paginator.find('ul').outerWidth()+'px'
		});

		if (!rtOptions.customScroll) {
			var scrollTo = ($('.date-paginator li.active').offset()?$('.date-paginator').scrollLeft()+$('.date-paginator li.active').offset().left-$('.date-paginator').offset().left-1:0);

			//$('.date-paginator').scrollLeft(scrollTo);
			$('.date-paginator').animate({
				scrollLeft: scrollTo
			}, 500);
		}
		else {		
			$('.date-paginator').each(function() {
				$(this).mCustomScrollbar('update');
				$(this).mCustomScrollbar('scrollTo', '.active');
			});
		}
	},
	fly: function() {
		var o = this.options;
		var _this = this;
		var startPos, windowWidth;
		var placeholder = $('<div></div>');

		init();

		$(window).on('scroll', function() {
			determinate();
		});

		$(window).on('resize orientationchange', function() {
			if (windowWidth != $(window).width()) {
				windowWidth = $(window).width();
				reset();
				findProps();
				determinate();
			}
		});

		document.ontouchmove = function() {$(window).scroll()};

		function init() {
			findProps();
			determinate();
			windowWidth = $(window).width();
		}

		function findProps() {
			startPos = o.paginator.offset().top;
			_this.vars.paginatorHeight = o.paginator.height();
			_this.refreshStopPos();
		}

		function determinate() {
			if ($(window).scrollTop() > startPos && $(window).scrollTop() < _this.vars.stopPos) {
				//reset();
				set();
			}
			else {
				reset();
			}
		}

		function set() {
			placeholder.css({height: _this.vars.paginatorHeight});
			
			o.paginator.css({
				width: o.paginator.width()+'px',
				left: o.paginator.offset().left+o.paginator.css('margin-left')+'px'
			}).addClass(o.flyClass);
			o.paginator.before(placeholder);
		}

		function reset() {
			placeholder.remove();
			o.paginator.css({
				width: '',
				left: ''
			}).removeClass(o.flyClass);
		}
	},
	refreshStopPos: function() {
		if (this.options.fly) {
			this.vars.stopPos = this.options.contentBlock.offset().top + this.options.contentBlock.outerHeight() - this.vars.paginatorHeight;
		}
	},
	initScroll: function() {
		/* scrolls paginator to active page */
		function scrollToActivePage() {
			var scrollTo = ($('.date-paginator li.active').offset()?$('.date-paginator').scrollLeft()+$('.date-paginator li.active').offset().left-$('.date-paginator').offset().left-1:0);

			$('.date-paginator').scrollLeft(scrollTo);
		}

		/* if custom scroll is not required */
		if (!rtOptions.customScroll) {
			if (fontDetect) { /* font-detect plugin is present */
				/* first scroll it, then wait for the custom font to load, then scroll again */
				scrollToActivePage();

				fontDetect.onFontLoaded (
					/* font name */
					'Open Sans Webfont',
					
					/* on font loaded */
					function() {
						scrollToActivePage();
					},
					
					/* fail fallback */
					function() {
						/* meh. */
					},

					/* options */
					{
						msTimeout: 5000,
						msInterval: 50
					}
				);
			}
			else { /* no font-detect plugin, going dumb way */
				setTimeout(
					function() {
						scrollToActivePage();
					},
					500
				);
			}
		}
		/* if custom scroll required */
		else {
			$('.date-paginator').each(function() {
				var _this = $(this);

				/* init custom scroll for paginator and scroll it to active page */
				_this.mCustomScrollbar(
				{
					scrollInertia: 0,
					autoDraggerLength: true,
					horizontalScroll: true,
					contentTouchScroll: true,
					scrollButtons:
					{
						enable: false
					},
					advanced:
					{
						updateOnBrowserResize: false,
						updateOnContentResize: false
					}
				}).mCustomScrollbar('scrollTo', '.active');

				/* wait for the font to load and scroll again */
				fontDetect.onFontLoaded (
					/* font name */
					'Open Sans Webfont',
					
					/* on font loaded */
					function() {
						_this.mCustomScrollbar('scrollTo', '.active');
					},
					
					/* fail fallback */
					function() {
						/* meh. */
					},

					/* options */
					{
						msTimeout: 5000,
						msInterval: 50
					}
				);
			});
		}
	},
	infLoading: function() {
		var _this = this;
		var button, linkButton;
		var contentBlock = _this.options.contentBlock;

		var texts =
		{
			showMore: '<i class="icon-caret-down" style="font-size: 1.1em; opacity: 0.8;"></i> Показать еще',
			showMoreCurrentDate: '<i class="icon-caret-down" style="font-size: 1.1em; opacity: 0.8;"></i> Показать еще за ',
			nextDay: 'Материалы за ',
			everything: 'Все материалы',
			loading: 'Загрузка...'
		}

		function makeButton(text) {
			return $('<button></button>', {
				html: text,
				'class': 'load-more'
			}).one('click', function() {
				button.attr('disabled', 'disabled').html(texts.loading);

				loadMore({
					done: function() {
						// nothing!
					},
					fail: function(message) {
						rtNotify && rtNotify.create((message || 'Не удалось загрузить новости'), 'warning');
					}
				});
			}).insertAfter(contentBlock);
		}

		function makeLinkButton(link, text, onclick) {
			if (Sniffer && Sniffer.browser == 'ie' && Sniffer.version < 8) {
				return $('<button></button>', {
					text: text,
					'class': 'load-more'
				}).click(function(event) {
					typeof(onclick) == 'function'? onclick(event) : window.location.href = link;
				}).insertAfter(contentBlock);
			}
			else {
				return $('<a></a>', {
					'class': 'btn load-more',
					text: text,
					href: link
				}).one('click', function(event) {
					if (event.button == 0 && Modernizr.history && typeof(onclick) == 'function') {
						event.preventDefault();
						onclick(event);
					}
					else {
						_this.infLoading.refresh();
					}
				}).insertAfter(contentBlock);
			}
		}

		this.infLoading.refresh = function() {
			var o = _this.options;
			var state = _this.options.feedState;

			if (button) {
				button.remove();
				button = undefined;
			}

			if (linkButton) {
				linkButton.remove();
				linkButton = undefined;
			}

			if (!state) return;

			if (o.mainPage) {
				if ((o.loads > 1 || state.endOfHistory) && state.link) {
					linkButton = makeLinkButton(state.link, texts.everything);
				}
				else {
					button = makeButton(texts.showMore);
				}
			}
			/* if not main page */
			else {
				if (!state.endOfDay) {
					button = makeButton(state.currentDate? texts.showMoreCurrentDate + state.currentDate : texts.showMore);
				}
				else if (state.nextDate && state.nextDateUrl) {
					linkButton = makeLinkButton(state.nextDateUrl, texts.nextDay + state.nextDate, function(event) {
						linkButton.attr('disabled', 'disabled');
						_this.ajax(state.nextDateUrl);
					});
				}
			}
		}

		function loadMore(callbacks) {
			$.ajax({
				url: (window.mainPage && window.ajaxMorelink) ? window.ajaxMorelink : window.location.href,
				type: 'GET',
				dataType: 'json',
				data: {
					ajax: true,
					lastDate: _this.options.feedState.lastDate
				}
			}).done(function(data) {
				if (data.news) {
					//data.state = {endOfDay: true, endOfhistory: false, lastDate: 123123213, link: 'http://ya.ru'}; /* TESTING */

					_this.options.loads++;

					_this.modelToView({addNews: data.news});

					if (data.state) {
						_this.options.feedState = data.state;
					}
					else {
						console.warn('no data.state!');
					}
					if (Modernizr.history) {
						history.replaceState(_this.viewToModel(),'');
					}

					callbacks && callbacks.done && callbacks.done();
				}
				else {
					console.warn('incorrect response');
					callbacks && callbacks.fail && callbacks.fail('Ошибка загрузки новостей: некорректный ответ сервера');
				}
			}).fail(function(jqXHR, textStatus) {
				console.warn('something went terribly wrong');
				console.log(jqXHR);
				callbacks && callbacks.fail && callbacks.fail('Не удалось загрузить новости<div style="font-style: italic; margin-top: 5px;">'+(jqXHR.status==200?textStatus:jqXHR.status+': '+jqXHR.statusText)+'</div>');
			}).always(function() {
				_this.infLoading.refresh();
			});
		}

		_this.infLoading.refresh();
	}
}