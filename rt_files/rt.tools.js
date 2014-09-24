/*
 * Класс с различными тулзами
 */
var rtTools =
{
	changeInputType: function(oldObject, oType) {
		var newObject = document.createElement('input');
		newObject.type = oType;
		if (oldObject.size) newObject.size = oldObject.size;
		if (oldObject.value) newObject.value = oldObject.value;
		if (oldObject.name) newObject.name = oldObject.name;
		if (oldObject.id) newObject.id = oldObject.id;
		if (oldObject.placeholder) newObject.placeholder = oldObject.placeholder;
		if (oldObject.className) newObject.className = oldObject.className;
		oldObject.parentNode.replaceChild(newObject,oldObject);
		return newObject;
	},

	/**
	 * Конвертирует строку с датой из гггг-мм-дд в дд.мм.гггг
	 * @param date
	 */
	convertDate: function(date) {
		date = date.split('-');
		if (date.length == 3) {
			return [date[2], date[1], date[0]].join('.');
		}
		else {
			return date;
		}
	},

	/**
	 * Конвертирует строку с датой из дд.мм.гггг в гггг-мм-дд
	 * @param date
	 */
	deConvertDate: function(date) {
		date = date.split('.');
		if (date.length == 3) {
			return [date[2], date[1], date[0]].join('-');
		}
		else {
			return date;
		}
	},

	customConsole: {
		log: function(message) {
			if (dev_console) {
				if (message == undefined) message = '<i>undefined</i>';
				rtNotify.create(message, 'info', 10000);
			}
		},
		warn: function(message) {
			if (dev_console) rtNotify.create(message, 'warning', 10000);
		},
		error: function(message, source, file) {
			if (dev_console) rtNotify.create([message,source,file].join(' '), 'danger', 10000);
		}
	}
}

/*
 * Проверка текущего состояния на соответствие media query по ширине.
 * В случае отсутствия window.matchMedia проверяется относительно ширины окна.
 * При полном отсутствие поддержки Media Queries возвращается false.
 *
 * mediaWidth - проверяемая ширина в пикселях.
 */
rtMedia = function(mediaWidth) {
	if (window.matchMedia) {
		return window.matchMedia('all and (max-width: '+mediaWidth+'px)').matches? true : false;
	}
	else if (Modernizr && Modernizr.mediaqueries) {
		return $(window).width() <= mediaWidth? true : false;
	}
	else {
		return false;
	}
}

/**
 * Нотификейшены
 */
var rtNotify =
{
	options: {
		blockId: 'notifications',
		timeout: 3000,
		animationTime: 300,
		messages: {
			success: 'Выполнено успешно',
			info: 'Выполнено успешно',
			warning: 'Что-то пошло не так',
			danger: 'Что-то пошло не так'
		}
	},
	/**
     * Показывает нотификейнш.
     *
     * @param message
     * @param type = 'success' || 'info' || 'warning' || 'danger'
     */
	create: function(message, type, timeout) {
		var _this = this;
		timeout = timeout || _this.options.timeout;
		var type = type || 'info';
		var message = (message!=undefined?message.toString():_this.options.messages[type]);
		var block = ($('#'+_this.options.blockId).length? $('#'+_this.options.blockId):_this.createBlock());
		var notification =
		$('<div></div>', {
			'class': 'notification notification-'+type,
			css: {
				opacity: 0
			},
			html: message
		}).on('click', function() {
			_this.destroyNotification($(this));
		}).appendTo(block).animate({opacity:1}, _this.options.animationTime);

		setTimeout(function(){_this.destroyNotification(notification)}, timeout);
	},
	/**
     * Убивает нотификейнш.
     *
     * @notification - jQuery object
     */
	destroyNotification: function(notification) {
		var _this = this;

		notification.animate({opacity:0}, _this.options.animationTime, function() {
			notification.slideUp(_this.options.animationTime, function() {
				notification.remove();
			});
		});
	},
	/**
     * Создает блок для нотификейшенов
     */
	createBlock: function() {
		var _this = this;
		var block =
		$('<div></div>', {
			id: _this.options.blockId
		}).appendTo('body');

		return block;
	}
}