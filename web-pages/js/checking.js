/**
 * @author Adina Halter
 */
(function ($, NAME) {
    'use strict';
    $('svg+label').on('click', function (evt) {
		evt.preventDefault();
		evt.stopPropagation();
	});
	$('input[type="radio"]+svg>circle+circle').on('click', function (evt) {
		$(this).parent('svg').prev('input').click();
	});
	$('[type="submit"]').on('click', function (evt) {
		evt.preventDefault();
		$('.svg-radio').attr('class', 'svg-radio get-big');
	});
	$('[type="reset"]').on('click', function (evt) {
		$('.svg-radio').attr('class', 'svg-radio');
	});
}(jQuery, NAME));