/**
 * @author Adina Halter
 */
(function ($, NAME) {
    'use strict';
    $('#submitSearchQuery').on('click', function (evt) {
    	evt.preventDefault();
    	$('#queryString').text($('#searchQuery').val());
    	$('.search, .search-results').toggleClass('is-hidden');
    });
}(jQuery, NAME));