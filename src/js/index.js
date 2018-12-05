"use strict";
//JQuery
import '../../node_modules/jquery/dist/jquery';
//Bootstrap
import '../../node_modules/bootstrap/dist/js/bootstrap';
//Owl.carousel
import '../../node_modules/owl.carousel/dist/owl.carousel.min';

//Favicon
import '../assets/img/favicon.ico';
import '../assets/img/apple-icon.png'

//Document Ready Function
$(function(){
    $('.testimonial__slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        items: 1,
        autoplay: true
    });
});
//Preloader
$(window).on('load', function(){
    $('.preloader').fadeOut(500);
});