var dev_console = false;

var rtOptions = {
	customScroll:
		((Sniffer.os == 'android' && Sniffer.osVersion <= 2.3 && Sniffer.browser == 'webkit') ||
		(!Modernizr.hiddenscroll && Sniffer.browser != 'webkit' &&
		Sniffer.browser != 'chrome' && Sniffer.browser != 'safari' &&
		!(Sniffer.browser == 'ie' && Sniffer.version < 9))),
	mediaSizes: {
		desktop: {
			1: 1280
		},
		tablet: {
			1: 1024,
			2: 850
		},
		phone: {
			1: 768,
			2: 500
		}
	}
};

(function($) {
	$(document).ready(function() {
		/* dev */
		if (dev_console) window.onerror = function(message, source, file) {console.error(message, source, file)};

		/* fallback for console.log function if it doesn't exist */
		window.console = (dev_console?rtTools.customConsole:window.console || rtTools.customConsole);

		/* browser & os related stuff */
		/* ms touch detection */
		if (navigator.msMaxTouchPoints > 0) {
			$('html').removeClass('no-touch').addClass('touch').addClass('ms-touch');
			Modernizr.touch = true;
		}

		/* kindle can't open links in new tabs */
		if (Sniffer.os == 'kindle') {
			$('a[target="_blank"]').removeAttr('target');
		}

		/* bg size cover for opera & old browsers */
		refreshBgCover();

		/* history states */
		window.onpopstate = function(event) {
			console.log('pop');
			rtHistory.pop(event);
		}

		/* sidebar */
		$(window).on('resize orientationchange', function() {
			rtSidebar && rtSidebar.adjustHeight();
		}).resize();

		/* custom scroll */
		if (rtOptions.customScroll) {
			$('#twitter').mCustomScrollbar(
			{
				scrollInertia: (rtOptions.customMobileScroll?500:0),
				autoHideScrollbar: (rtOptions.customMobileScroll?true:false),
				autoDraggerLength: true,
				contentTouchScroll: true,
				scrollButtons:
				{
					enable: false
				},
				advanced:
				{
					updateOnBrowserResize: true,
					updateOnContentResize: true
				}
			});
		}

		/* twitter init */
		$('#twitter ul').length && $('#twitter ul').rtTwitter({
			url: '/twitter/'
		});

		/* polls */
		$.fn.rtPolls && $('.poll').rtPolls();
		if($("#content .poll").length){
		  $("#sidebar").css("padding-top", "28px");
		}

		/* print */
		$('.print').click(function(){
			window.print();
		});

		/* mail */
		$('.mail').attr('href','mailto:?subject='+document.title+'&body='+document.location.href);

		/* datepicker */
		if (!Modernizr.inputtypes.date || (Sniffer.os != 'ios' && Sniffer.os != 'winphone' && Sniffer.os != 'android')) {
			$('input[type=date]').each(function(){
				$(rtTools.changeInputType($(this).get(0), 'text')).datepicker({
					dateFormat: 'dd.mm.yy',
					changeMonth: true,
					changeYear: true,
					firstDay: 1,
					showOn: (Modernizr.touch?'both':'button'),
					buttonText: '',
					nextText: 'Следующий месяц',
					prevText: 'Предыдущий месяц',
					dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
					monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
				}).attr('value',rtTools.convertDate($(this).attr('value'))).next('button').attr('title','Календарь');
			});
		}

		/* monthpicker */
		$('.month-selector').length && rtMonthpicker.init($('.month-selector'));

		/* date paginator */
		rtDatePaginator.init();
		

		/* mobile buttons & menu */
		$('.top-menu-trigger').toggle(
				function() {
					$('body > header .nav-holder').css('display','block');
				},
				function() {
					$('body > header .nav-holder').css('display','');
				}
		);

		$('.top-search-trigger').toggle(
				function() {
					$('body > header #mobile-search').css('display','block');
					$('#mobile-search input[type="search"]').focus();
				},
				function() {
					$('body > header #mobile-search').css('display','');
				}
		);

		$('body > header .nav-holder > .secondary:has(li)').parents('.nav-holder').addClass('has-submenu');
		$('body > header .nav-holder > .trending').parents('.nav-holder').addClass('has-trending');

		/* events init */
		rtEvents();


		/* social */
		rtSocial && rtSocial.init();
		
		
		
		/*  filter profiles  */
		$(".profiles").length && rtFilter && rtFilter.init({ 
			input   : $(".profiles__filter input"), 
			list    : $(".profiles__list") ,
			btnLoad : $(".profiles .load-more"),
			visible : 30
		});
		
		/* fixed block on olimpics page */
		if($(window).width() > 767){
			if($(".profiles__filter").length || $("#sidebar .sports__list").length){
				$("#sidebar .sports__list, .profiles__filter").rtFixedBlock({
					cssFixed: {
						position: "fixed",
						top     : 0,
						zIndex  : 1234
					},
					clsFixed  : "fixed-block",
					clsReplace: "replace-div",
					stopElem  : $(".profiles")
				});
			}
		}
		
		if($(".profiles__photo").length){
			$(".profiles__photo img").each(function(){
				var me = $(this);
				
				var img = new Image();
				img.onload = function(){
					me.show().next().css("display", "block");
					return true;
				}
				img.onerror = function(){
					me.remove();
				}
				img.src = $(this).attr("src");
			})
		}
		
		if($(window).width() < 768){
			$(".profiles__filter input[type=text], .profiles__filter input[type=search]").removeAttr("placeholder");
		}
		
		var $iframeInstagram = $("iframe[src*=instagram]");
		
		if($iframeInstagram.length){
			if(!$iframeInstagram.closest("p").length){
				$iframeInstagram.wrap("<p />");
			}
				
			$iframeInstagram.closest("p")[0].className = "iframe__full-height";
		}
		
		$(window).load(function(){
			$(".hc .hc_mix_menu_tab[data-menu=last]").text("Последние комментарии");
		});
		
		if($(".profiles__list").length){
			$(".profiles__list img").each(function(){
				var img = new Image();
				var me = $(this);
				
				img.onload = function(){
					me.css("visibility", "visible");
				};
				img.src = $(this).attr("src");
			});
		}
		
		if($(".stream-news__body").length){
			if($("#live-video").length || $(".dark-block #videobox").length) {
				$("#sidebar .stream-news").remove();
			}
			
			$('.stream-news__body').mCustomScrollbar({
				scrollInertia: $(window).width() < 750 ? 0 : 600,
				autoHideScrollbar: true,
				autoDraggerLength: true,
				contentTouchScroll: false,
				scrollButtons:
				{
					enable: false
				},
				advanced:
				{
					updateOnBrowserResize: true,
					updateOnContentResize: true
				}
			});
			
			$(".stream-news__bottom").on("click", function(){
				var top = Math.abs($(".stream-news .mCSB_container").position().top) + $(".stream-news__body").height();
				
				$(".stream-news__list li").each(function(){
					var t = $(this).position().top;
					if(t+$(this).outerHeight() > top){
						top = t;
						return false;
					}
				});
				
				$('.stream-news__body').mCustomScrollbar("scrollTo", top);
			});
			
			$(".stream-news__top").on("click", function(){
				var top = Math.abs($(".stream-news .mCSB_container").position().top) - $(".stream-news__body").height(),
					$li = $(".stream-news__list li");
				
				for(var i = $li.length-1; i >= 0; i--){
					var t = $li.eq(i).position().top;
					
					if(t < top){
						top = $li.eq(i+1).position().top;
						break;
					}
				}
				
				$('.stream-news__body').mCustomScrollbar("scrollTo", top);
			});	
			
			(function () {
			  var cacheTime;
			
			  $(".stream-news__list li").each(function () {
			    var elTime = $("time", this),
			        time = elTime.attr("datetime").split("T")[0].split("-");
			
			    if (!cacheTime) {
			      cacheTime = time[2];
			    } else {
			      if (time[2] !== cacheTime) {
			        elTime.text(elTime.text() + " вчера").closest("li").addClass("yesterday_news");
			        var elems = $(this).nextAll().find("time");
			
			        elems.each(function () {
			          $(this).text($(this).text() + " вчера").parent().addClass("yesterday_news");
			        });
					
			        return false;
			      }
			      
			      cacheTime = time[2];
			    }
			  });
			})();
		}
		
		if($("#text-section").length){
			$('#text-section article').mCustomScrollbar(
			{
				scrollInertia: 600,
				autoHideScrollbar: (rtOptions.customMobileScroll?true:false),
				autoDraggerLength: true,
				contentTouchScroll: true,
				scrollButtons:
				{
					enable: false
				},
				advanced:
				{
					updateOnBrowserResize: true,
					updateOnContentResize: true
				}
			});
		}
	
		if($("#banner__between-news").length){
			(function(){
				var elem;
				
				if($(".fly-holder").length){
					elem = $("#news article:eq(2)").length ? $("#news article:eq(2)") : $("#news article:last");
				} else {
					elem = $("#news article:eq(4)").length ? $("#news article:eq(4)") : $("#news article:last");
				}
				$("#banner__between-news").insertAfter(elem);
			})();
		}

		if($("#partner-div").length){		
			try{
				$("#partner-div:first").after(Math.ceil(Math.random()*2) > 1 ? partner_smi2 : partner_ria);
			} catch(e){
				
			}
		}
		
		if($(".inserted-code").length){
			$(".inserted-code").each(function(){
				var strScriptFB = '<div id="fb-root"></div> <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));</script>';
				var tmpl = '<div class="fb-post" data-href="{href}" data-width="{width}"><div class="fb-xfbml-parse-ignore"><a href="{href_link}">публикация</a><a href="{url}">{author}</a>.</div></div>';
				
				var _this = $(this);
				
				if ($(this).hasClass("code-fb")){
					var data = $(this).data(),
					str = tmpl.replace("{href}", data.href)
							  .replace("{href_link}", data.href_link)
							  .replace("{url}", data.url)
							  .replace("{author}", data.author)
							  .replace("{width}", data.width);
					
					_this.after('<div class="align_center inserted-code">' + strScriptFB + str + "</div>");
				} else {
					_this.after($(this).data("code"));
				}
				
				_this.remove();
			});
		}
		
		
		if($(".article-body > .fb-post").length || $(".article-body > div > .fb-post").length){
			var strFB = '<div id="fb-root"></div> <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));</script>';
			
			$(".article-body > .fb-post").each(function(){
				$(this).wrap('<div/>');
				var html = strFB + $(this).parent().html();
				
				$('<div class="align_center inserted-code">' + html + '</div>').insertBefore($(this).parent());
				$(this).parent().remove();
			});
		}

		//ustream
		
		if($(".article-body p > iframe[src*='youtube.com']").length || $(".article-body p > iframe[src*='vk.com']").length || $(".article-body p > iframe[src*='vimeo']").length || $(".article-body p > iframe[src*='ustream']").length){
			$(".article-body p > iframe[src*='youtube.com'], .article-body p > iframe[src*='vk.com'], .article-body p > iframe[src*='vimeo'], .article-body p > iframe[src*='ustream']").each(function(){
				var $p = $(this).parent("p");
				
				$(this).insertAfter($p).wrap("<p class='has-youtube' />");
				if($p.is(":empty")){
					$p.remove();
				}
				
			});
		} else if ($(".article-body > iframe[src*='youtube.com']").length || $(".article-body > iframe[src*='vk.com']").length || $(".article-body > iframe[src*='vimeo']").length || $(".article-body > iframe[src*='ustream']").length){
			$(".article-body > iframe[src*='youtube.com'], .article-body > iframe[src*='vk.com'], .article-body > iframe[src*='vimeo'], .article-body > iframe[src*='ustream']").each(function(){
				$(this).wrap("<p class='has-youtube' />");
			});
		}
		
		if($(".article-body > img").length){
			$(".article-body > img").each(function(){
				$(this).wrap('<p class="align-center" />');
			});
		}
		
		if($("#news").length){
			$("#news article").each(function(){
				$("p:empty", this).remove();
			});
		}
		
		if($(".stream-news").length){
			if($("#teasers").length && !$(".dark-block #teasers").length){
				$("#main").addClass("mobile_stream");
			}
		}
		
		$(window).load(function() {
				if($(".our-team").length) {
					var elems = $(".our-team__list li");
			
					if($(".our-team").length) {
						$(".container.internet-school").height(getHeightBox());
					}
					
					var index = 0,
						$window = $(window);
					
					elems.each(function() {
						if($(this).offset().top > $window.height() + $window.scrollTop()) {
							return;
						}
						
						$(this).addClass("transitioned");
						
						(function(i, elem) {
							setTimeout(function() {
								$(elem).addClass("transition");
							}, i*100);
						}(index, this));
						
						index += 1;
					});
					
					$window.on("scroll resize", function() {
						var index = 0;
						var elems = $(".our-team__list li").not(".transitioned");
						
						if(elems.length) {
							elems.each(function() {
								if($(this).offset().top+$(this).height() > $window.height() + $window.scrollTop()) {
									return;
								}
								
								$(this).addClass("transitioned");
								
								(function(i, elem) {
									setTimeout(function() {
										$(elem).addClass("transition");
									}, i*100);
								}(index, this));
								
								index += 1;
							});
						}
					});
						
					$window.on("resize", function() {
						$(".container.internet-school").height(getHeightBox());
					});
				}
			});
			
			if($(".our-team").length) {
				$(".container.internet-school").height(getHeightBox());
			}
			
			function getHeightBox() {
				var $elem     = $(".is__wrap"),
					minHeight = $elem.outerHeight(),
					offset    = $elem.offset().top,
					height    = 0;
				
				$(".our-team_left:visible li").each(function() {
					var top = $(this).position().top;
					
					if(top < minHeight && top + $(this).outerHeight() > minHeight) {
						height = top + $(this).outerHeight();
						
						return false;
					}
				});
				
				return Math.max(height, minHeight+10);
			}

		$(window).load(function() {
			/* hiding adress bar onload in mobile webkit-based browsers */
			setTimeout(function(){
				if (window.pageYOffset==0) {
					window.scrollTo(0, 1);
					window.scrollTo(0, 0);
				}
			}, 0);

			/* google+ */
			window.___gcfg = {lang: 'ru'};
			
			(function() {
				var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
				po.src = 'https://apis.google.com/js/plusone.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
			})();

			/* facebook */
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id; js.async = true;
				js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));

			/* twitter */
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.async=true;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

			/* vk */
			VK.init({apiId: 3205332, onlyWidgets: true});
			$('#vk_like_sidebar').length && VK.Widgets.Like("vk_like_sidebar", {type: "vertical", height: 24});
			$('#vk_like').length && VK.Widgets.Like("vk_like", {type: "mini", height: 20});
			$('#vk_comments').length && VK.Widgets.Comments("vk_comments", {limit: 10, width: "300", attach: false});
			$('#vk_groups').length && VK.Widgets.Group("vk_groups", {mode: 0, width: "295", height: "250", color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6'}, 40316705);
			
			/* ok */
			
			(function(){
				!function (d, id, did, st) {
				  var js = d.createElement("script");
				  js.src = "http://connect.ok.ru/connect.js";
				  js.onload = js.onreadystatechange = function () {
				  if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
				    if (!this.executed) {
				      this.executed = true;
				      setTimeout(function () {
				        OK.CONNECT.insertGroupWidget(id,did,st);
				      }, 0);
				    }
				  }}
				  d.documentElement.appendChild(js);
				}(document,"ok_group_widget","57008216342566","{width:295,height:280}");
			})();
			
			(function(){
				!function (d, id, did, st) {
				  var js = d.createElement("script");
				  js.src = "http://connect.ok.ru/connect.js";
				  js.onload = js.onreadystatechange = function () {
				  if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
				    if (!this.executed) {
				      this.executed = true;
				      setTimeout(function () {
				        OK.CONNECT.insertShareWidget(id,did,st);
				      }, 0);
				    }
				  }};
				  d.documentElement.appendChild(js);
				}(document,"ok_shareWidget",document.URL,"{width:170,height:30,st:'oval',sz:20,ck:3}");
			})();

			
			
			/* добавить всем внешним ссылкам код гугл_аналитикс */
			
			$("a[href^='http://']").each(function(){
				$(this).attr("onclick", '_gaq.push(["OutboundLink", "click"])');
			});
		});

		
		/* counters */

		/* live internet */
		$('body').append("<img src='//counter.yadro.ru/hit?t44.4;r"+
		escape(document.referrer)+((typeof(screen)=="undefined")?"":
		";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
		screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
		";"+Math.random()+
		"' alt='' title='LiveInternet' "+
		"border='0' style='position:absolute; left: -9999px; top: -9999px;'>");

		/* StatCounter */
		/*var sc_project=8416305; 
		var sc_invisible=1; 
		var sc_security="337c0ff2"; 
		var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");

		(function() {
			var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			po.src = scJsHost + 'statcounter.com/counter/counter.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();*/

	});
})(jQuery);


/* yandex metrika */
(function (d, w, c) {
	(w[c] = w[c] || []).push(function() {
		try {
			w.yaCounter17954578 = new Ya.Metrika({id:17954578, enableAll: true});
		} catch(e) { }
	});

	var n = d.getElementsByTagName("script")[0],
		s = d.createElement("script"),
		f = function () { n.parentNode.insertBefore(s, n); };
	s.type = "text/javascript";
	s.async = true;
	s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

	if (w.opera == "[object Opera]") {
		d.addEventListener("DOMContentLoaded", f);
	} else { f(); }
})(document, window, "yandex_metrika_callbacks");