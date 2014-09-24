var rtMonthpicker = 
{
	o: {
		monthTexts:
		[
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь'
		],
		picker: undefined,
		initiator: undefined,
		pickerWidth: 290,
		button: undefined,
		month_object: (window.month_object || false),
		container: $('.fly-holder')
	},
	model: {},
	init: function(button) {
		var _this = this;
		rtMonthpicker.model = $.extend(_this.o.month_object, {chosenYear: _this.o.month_object.current.year});
		if (!(button && button.length)) button = $(body);
		rtMonthpicker.o.button = button;

		button.removeAttr('disabled').on('click', function(event) {
			event.stopPropagation();
			if (rtMonthpicker.o.initiator && rtMonthpicker.o.initiator.get(0) == this) {
				rtMonthpicker.hide();
			}
			else {
				rtMonthpicker.pick($(this), function(year, month) {
					var url = window.location.href.split('/');

					url = [url[0], url[1], url[2], url[3], year, month].join('/');

					if (Modernizr.history) {
						rtDatePaginator.ajax(url);
					}
					else {
						window.location.href = url;
					}
				});
			}		
		});
	},
	pick: function (initiator, callback) {
		var _this = this;

		rtMonthpicker.hide();

		rtMonthpicker.model = $.extend(_this.o.month_object, {chosenYear: _this.o.month_object.current.year});

		rtMonthpicker.o.picker = {};
		rtMonthpicker.o.initiator = initiator;

		rtMonthpicker.o.picker.closeButton = $('<i></i>', {
			'class': 'close icon-remove',
			title: 'Закрыть'
		}).on('click', rtMonthpicker.hide);

		var topPos = initiator.offset().top + initiator.outerHeight() + 3 - _this.o.container.offset().top;
		var rightPos = _this.o.container.outerWidth() + _this.o.container.offset().left - initiator.offset().left - initiator.outerWidth();

		rtMonthpicker.o.picker.chosenYear = $('<span></span>');

		rtMonthpicker.o.picker.prevYear = $('<i></i>', {
			'class': 'icon-caret-left'
		}).on('click', function() {
			if (rtMonthpicker.model.picker[rtMonthpicker.model.chosenYear-1]) {
				rtMonthpicker.model.chosenYear--;
				rtMonthpicker.modelToView();
			}
		});

		rtMonthpicker.o.picker.nextYear = $('<i></i>', {
			'class': 'icon-caret-right'
		}).on('click', function() {
			if (rtMonthpicker.model.picker[rtMonthpicker.model.chosenYear+1]) {
				rtMonthpicker.model.chosenYear++;
				rtMonthpicker.modelToView();
			}
		});

		rtMonthpicker.o.picker.yearPicker = $('<div></div>', {
			'class': 'year'
		}).append(rtMonthpicker.o.picker.prevYear).append(rtMonthpicker.o.picker.chosenYear).append(rtMonthpicker.o.picker.nextYear);

		rtMonthpicker.o.picker.monthPicker = $('<ul></ul>', {
			'class': 'month'
		});

		rtMonthpicker.o.picker.months = [];

		for (var i=0; i<12; i++) {
			 (function(i){
				rtMonthpicker.o.picker.months[i] = $('<li></li>').text(rtMonthpicker.o.monthTexts[i]).appendTo(rtMonthpicker.o.picker.monthPicker).on('click', function() {
					if ($.inArray(i, rtMonthpicker.model.picker[rtMonthpicker.model.chosenYear]) != -1) {
						callback(rtMonthpicker.model.chosenYear, i+1);
						rtMonthpicker.hide();
					}
				});
			})(i);
		}

		rtMonthpicker.o.picker.self = $('<div></div>',{
			'class': 'monthpicker',
			css: {
				right: rightPos,
				top: topPos
			}
		}).append(rtMonthpicker.o.picker.closeButton).append(rtMonthpicker.o.picker.yearPicker).append(rtMonthpicker.o.picker.monthPicker).on('click', function(event) {
			event.stopPropagation();
		});

		_this.o.container.append(rtMonthpicker.o.picker.self);
		$(window).one('click', rtMonthpicker.hide);

		rtMonthpicker.modelToView();
	},
	changeCurrent: function(year, month) {
		rtMonthpicker.model.current.year = year;
		rtMonthpicker.model.current.month = month;
		this.o.button.text(rtMonthpicker.o.monthTexts[month]+' '+year);
	},
	modelToView: function() {
		var model = rtMonthpicker.model;

		/* выставляем текущий год */
		rtMonthpicker.o.picker.chosenYear.text(model.chosenYear);

		/* смотрим, есть ли новости за следующий и предыдущий год, выставляем статус кнопок переключения года */
		if (!model.picker[model.chosenYear+1]) {
			rtMonthpicker.o.picker.nextYear.addClass('disabled');
		}
		else {
			rtMonthpicker.o.picker.nextYear.removeClass('disabled');	
		}

		if (!model.picker[model.chosenYear-1]) {
			rtMonthpicker.o.picker.prevYear.addClass('disabled');
		}
		else {
			rtMonthpicker.o.picker.prevYear.removeClass('disabled');	
		}

		/* проверяем наличие новостей по месяцам, выставляем текущий выбранный месяц */
		$.each(rtMonthpicker.o.picker.months, function(i) {
			if ($.inArray(i, model.picker[model.chosenYear]) == -1) {
				rtMonthpicker.o.picker.months[i].addClass('disabled');
			}
			else {
				rtMonthpicker.o.picker.months[i].removeClass('disabled');
			}

			if (model.current.year == model.chosenYear && model.current.month == i) {
				rtMonthpicker.o.picker.months[i].addClass('active');
			}
			else {
				rtMonthpicker.o.picker.months[i].removeClass('active');	
			}
		});
	},
	hide: function() {
		if (rtMonthpicker.o.picker) {
			rtMonthpicker.o.picker.self.remove();
			rtMonthpicker.o.picker = undefined;
			rtMonthpicker.o.initiator = undefined;
		}
	}
}