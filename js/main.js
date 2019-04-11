$(function () {

    'use strict';

    // adjust slider height
    var windowHeight = $(window).innerHeight(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight(),
        sliderHeight = windowHeight - (upperHeight + navHeight);

    $('.slider, .carousel-item').height(sliderHeight);

    $(window).resize(function () {
        $('.carousel-inner').each(function () {
            $('.slider, .carousel-item').height(sliderHeight);
            $('.carousel-inner h1').css('paddingTop', ($('.carousel-inner .carousel-item').height() /4) );
        });

    });

    $('.carousel-inner').each(function () {
        $('.carousel-inner h1').css('paddingTop', ($('.carousel-inner .carousel-item').height() /4) );
    });


    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') ==='all') {
            $('.shuffle-imgs .col-md').css('opacity', '1');
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '0.2');
            $($(this).data('class')).parent().css('opacity', '1');
        }

    });
    
});