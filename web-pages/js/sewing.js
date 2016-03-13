/**
 * @author Adina Halter
 */
(function ($, NAME) {
    'use strict';
    $('#triggerBig').on('click', function (evt) {
        $('.small-target').addClass('get-big');
    });
}(jQuery, NAME));