/**
 * @author Adina Halter
 * Accessible Form Error Handling
 */
(function ($, NAME) {
    'use strict';
    $('#triggerBig').on('click', function (evt) {
        console.log('test');
        $('.small-target').addClass('get-big');
    });
}(jQuery, NAME));