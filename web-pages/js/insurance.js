/**
 * @author Adina Halter
 */
(function ($, NAME) {
    'use strict';
    $('.calendar-icon').on('click', function (evt) {
        $(this).prev('input').focus();
    });
    $('#date').on('focus', function (evt) {
        $(this).siblings('.date-picker').addClass('is-visible');
    });
    $('#date').on('blur', function (evt) {
        $(this).siblings('.date-picker').removeClass('is-visible');
    });
    $('.radio-label [type="radio"]').change(function() {
        console.log('changed');
        var $this = $(this),
            $fieldset = $this.closest('fieldset'),
            $radios = $fieldset.find('[type="radio"]');
        $this.closest('fieldset').children('label').removeClass('checked');
        $radios.filter(':checked').parent('.radio-label').addClass('checked');
    });
}(jQuery, NAME));