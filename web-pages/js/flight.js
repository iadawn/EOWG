/**
 * @author Adina Halter
 */
(function ($, NAME) {
    'use strict';
    $('.calendar-icon').on('click', function (evt) {
        $(this).prev('input').focus();
    });
    $('#depart, #return').on('focus', function (evt) {
        $(this).siblings('.date-picker').addClass('is-visible');
    });
    $('#depart, #return').on('blur', function (evt) {
        $(this).siblings('.date-picker').removeClass('is-visible');
    });
    $('#depart, #return').on('keypress', function (evt) {
        evt.preventDefault();
        $('[aria-controls="errorModal"]').attr('data-surrogate', $(this).attr('id')).click();
    });
    $('[aria-controls="errorModal"]').on('focus', function (evt) {
        $('#' + $(this).attr("data-surrogate")).focus();
        $(this).removeAttr('data-surrogate');
    });
}(jQuery, NAME));