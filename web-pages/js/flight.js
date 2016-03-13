/**
 * @author Adina Halter
 */
(function ($, NAME) {
    'use strict';
    $('#depart, #return').on('focus', function (evt) {
        $(this).siblings('.date-picker').addClass('is-visible');
    });
    $('#depart, #return').on('blur', function (evt) {
        $(this).siblings('.date-picker').removeClass('is-visible');
    });
    $('#depart, #return').on('keypress', function (evt) {
        evt.preventDefault();
    });
}(jQuery, NAME));