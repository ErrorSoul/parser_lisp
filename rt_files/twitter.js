$.fn.rtTwitter = function(opts) {

	var twitterBlock = this;
	var target = (Sniffer && Sniffer.os == 'kindle'?'_self':'_blank');
	var options =
	{
		lastId: 0,
		username: 'RT_russian',
		twitsToLoad: 15,
		updateRate: 30000,
		refreshRate: 10000,
		url: 'http://api.twitter.com/1/statuses/user_timeline.json',
		links:	'<a href="https://twitter.com/{username}/status/{id}" target="'+target+'">{date}</a>'+
				'<a href="https://twitter.com/intent/tweet?in_reply_to={id}" target="'+target+'">ответить</a>'+
				'<a href="https://twitter.com/intent/retweet?tweet_id={id}" target="'+target+'">ретвит</a>'+
				'<a href="https://twitter.com/intent/favorite?tweet_id={id}" target="'+target+'">избранное</a>'
	}
	options = $.extend(options, opts);

	var twits = [];

	function update() {
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: options.url,
			data: { screen_name: options.username, count: options.twitsToLoad, trim_user: 'true' }
		}).done(function(data) {

			for (var i=data.length-1; i>-1; i--) {
				if (data[i].id > options.lastId) {
					data[i].gotNew = true;
					twits.unshift(data[i]);
					if (twits.length > options.twitsToLoad) twits.pop();
				}
			}

			options.lastId = data[0].id;

			modelToView();
		}).fail(function(jqXHR, textStatus) {
			console.log('Twitter error: ' + textStatus);
		});
	}

	function modelToView() {
		var result = '';

		$.each(twits, function(i){
			var date = parseDate(twits[i].created_at);
			var text = twits[i].text.replace(/(http|https):\/\/(([^\s\.]*\.[^\s\.]+)*)/g,'<a href="$1://$2" target="'+target+'">$2</a>').replace(/#([a-zA-Zа-яА-Я0-9_]*)/g,'<a href="https://twitter.com/search/?q=%23$1&src=hash" target="'+target+'">#$1</a>').replace(/@([a-zA-Z0-9_]*)/g,'<a href="https://twitter.com/$1" target="'+target+'">@$1</a>');
			
			result +=	'<li'+(twits[i].gotNew?' class="new" style="display: none; opacity: 0"':'')+'>'+
						text+
						'<aside>'+
						options.links.replace(/{id}/g, twits[i].id_str).replace(/{date}/g, formatDate(date)).replace(/{username}/g, options.username)+
						'</aside></li>';
			twits[i].gotNew = false;
		});

		twitterBlock.html(result);
		twitterBlock.find('li.new').slideDown().removeClass('new').animate({opacity:1},500);
	}

	function formatDate(date) {
		var delta = new Date() - date; // разница в миллисекундах

		if (delta < 20000) { // прошло менее 20 секунд
			return 'только что';
		}

		var sec = Math.floor( delta / 1000 ); // округлить delta до секунд
		
		if (sec < 60) {
			return numberMagic(sec, ['секунду', sec + ' секунду', sec + ' секунды', sec + ' секунд']) + ' назад';
		}
		
		var min = Math.floor( delta / 60000 ); // округлить delta до минут
		if (min < 60) {
			return numberMagic(min, ['около минуты', min + ' минуту', min + ' минуты', min + ' минут']) + ' назад';		
		}

		var hrs = Math.floor( delta / 3600000 ); // округлить delta до часов
		if (hrs < 24) {
			return numberMagic(hrs, ['около часа', hrs + ' час', hrs + ' часа', hrs + ' часов']) + ' назад';		
		}

		var days = Math.floor( delta / 86400000 ); // округлить delta до дней
		if (days < 7) {
			return numberMagic(days, ['день', days + ' день', days + ' дня', days + ' дней']) + ' назад';		
		}

		// форматировать дату с учетом того, что месяцы начинаются с 0
		var d = date;
		var m = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		d = [('0'+d.getDate()).slice(-2),m[d.getMonth()],''+d.getFullYear()];

		return d.join(' ');
	}

	function numberMagic(number, titles) {  
		var cases = [3, 1, 2, 2, 2, 3];  
		return (number == 1?titles[0]:titles[ (number%100>4 && number%100<20)? 3 : cases[(number%10<5)?number%10:5] ] );  
	}

	function parseDate(str) {
		var v=str.split(' ');
		return new Date(Date.parse(v[1]+' '+v[2]+', '+v[5]+' '+v[3]+' UTC'));
	}

	update();
	setInterval(update, options.updateRate);
	setInterval(modelToView, options.refreshRate);
}