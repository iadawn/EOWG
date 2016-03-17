/**
 * @author Adina Halter
 */
(function ($, NAME) {
    'use strict';
    $('.hamburger').on('click', function (evt) {
        $('nav').addClass('open');
        $('.close-menu').focus();
    });
    $('.close-menu').on('click', function (evt) {
        $('nav').removeClass('open');
        $('.hamburger').focus();
    });
}(jQuery, NAME));