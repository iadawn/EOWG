/**
 * @author Adina Halter
 * Accessible Form Error Handling
 */
(function ($, NAME) {
    'use strict';
    $('button[type="submit"]').on('click', function (evt) {
        evt.preventDefault();
        var shippingAddress = {
            "firstName"  :   $('#firstName').val(),
            "lastName"   :   $('#lastName').val(),
            "address"   :   $('#address').val(),
            "city"       :   $('#city').val(),
            "state"      :   $('#state').val(),
            "zipCode"    :   $('#zipCode').val()
        };
        $.each(shippingAddress, function (key, value) {
            $('[data-address="' + key + '"]').text(value);
        });
    });
    $('#gift').on('click', function (evt) {
        $('.fake-btn, [aria-controls="placeOrder"]').toggleClass('is-hidden');
    });
}(jQuery, NAME));