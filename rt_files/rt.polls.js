/*
 * Опросы
 */
$.fn.rtPolls = function() {
	this.each(function() {
		var _this = $(this);
		var id = _this.find('input[name="poll_id"]').attr('value');
		var state = 'initial';
		var votedFor;
		var href = $("h2 a", _this).attr("href");

		if ($.cookie && $.cookie('poll-'+id)) {
			votedFor = $.cookie('poll-'+id);
			changeState('voted');
		}

		var showResultsButton = _this.find('.results-button');
		var form = _this.find('form');
		var radioButtons = _this.find('input[type=radio]');
		var submitButton = _this.find('button[type=submit]');
		var results = _this.find('ul.results');
		//var resultNumbers = _this.find('ul.results li span');
		var resultNumbers = _this.find('ul.results li span');

		radioButtons.on('click change keyup', function() {
			var haveChecked = false;

			radioButtons.each(function() {
				if (this.checked) haveChecked = true;
			});

			if (haveChecked) {
				submitButton.removeAttr('disabled');
			}
			else {
				submitButton.attr('disabled','disabled');
			}
		}).change();

		showResultsButton.on('click', function(event) {
			event.stopPropagation();

			if (state == 'results') {
				changeState('initial');
			}
			else {
				changeState('results');
			}
		});

		$('body').on('click', function() {
			if (state == 'results') {
				changeState('initial');
			}
		});

		results.on('click', function(event) {
			event.stopPropagation();
		});

		form.on('submit', function() {
			submitButton.attr('disabled', 'disabled');

			for (var i in radioButtons) {
				if (radioButtons[i].checked) votedFor = radioButtons[i].value;
			}

			$.ajax({
				url: form[0].action+'?'+form.serialize(),
				type: form[0].method,
				dataType: 'json',
				cache: false,
				contentType: false,
				processData: false
			}).done(function(data) {
				if (data.success) {
					if(_this.closest("#sidebar").length){
						document.location.href = href;
					} else {
						changeState('voted');
						var total = 0;		
						
						if (data.results) {
							for (var i in data.results) {
								$(resultNumbers[i]).text(data.results[i][0]+'%');
								var elem = $(".pool__result").eq(i);
								$(".pool__result-total-per", elem).text(data.results[i][0]);
								$(".poll__result-visual span", elem).css("width", data.results[i][0]+"%");
								$("b", elem).text(data.results[i][1]);
								total += data.results[i][1];
							}
							
							$(".poll__stats-result").text(total);
						}
					}
				}
				else {
					if (data.message) {
						rtNotify.create(data.message, 'warning');
					}
					else {
						rtNotify.create('Ошибка отправки формы', 'warning');
					}
				}

				submitButton.removeAttr('disabled');
			}).fail(function(jqXHR, textStatus) {
				rtNotify.create('Ошибка отправки формы<div style="font-style: italic; margin-top: 5px;">' + jqXHR.status+': '+jqXHR.statusText+'</div>', 'warning');

				submitButton.removeAttr('disabled');
			});

			return false;
		});

		function changeState(toState) {
			switch(toState) {
				case 'initial':
					_this.removeClass('results-shown').removeClass('voted');
					
					$(radioButtons).each(function(){
						//$(this).prop("disabled", false).removeAttr("disabled");
					});
					
					break;

				case 'results':
					_this.addClass('results-shown').removeClass('voted');
					
					$(radioButtons).each(function(){
						//$(this).prop("disabled", false).removeAttr("disabled");
					});
					
					break;

				case 'voted':
					_this.removeClass('results-shown').addClass('voted');
					
					if(votedFor){
						_this.find('ul.results li[data-id="'+votedFor+'"]').addClass('user-choice');
						_this.find('ul.poll-options li[data-id="'+votedFor+'"]').addClass('user-choice').find("input[type=radio]").prop("checked", true).attr("checked", "checked");
						setTimeout(function(){
							$("button[type=submit]", _this).attr("disabled", "disabled").prop("disabled", true);
						}, 0);
					}
					
					$("input[type=radio]", _this).each(function(){
						$(this).prop("disabled", true).attr("disabled", "disabled");
					});
					
					break;
			}

			state = toState;
		}
	});
}