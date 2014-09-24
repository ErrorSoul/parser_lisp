/*
 * Инициализация кастомных событий
 */
function rtEvents(obj) {
	var o =
	{
		/* инпут сортировки на странице поиска */
		inputSorting: $('#_sorting'),
		formAdvancedSearch: {
			self: $('#advanced_search'),
			inputHiddenSorting:  $('#advanced_search').find('input[type="hidden"][name="sort_by"]'),
			inputDatepicker: $('.hasDatepicker')
		}
	};
	o = $.extend(o, obj);

	/* изменение сортировки на странице поиска */
	o.inputSorting.on('change', function() {
		o.formAdvancedSearch.inputHiddenSorting.attr('value', o.inputSorting.attr('value'));
		o.formAdvancedSearch.self.submit();
	});

	/* сабмит формы расширенного поиска */
	o.formAdvancedSearch.self.on('submit', function() {
		o.formAdvancedSearch.inputDatepicker.each(function() {
			$(this).attr('value', rtTools.deConvertDate($(this).attr('value')));
		});
	});
}