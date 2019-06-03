// global.jQuery = require('jquery');
var svg4everybody = require('svg4everybody'),
popup = require('jquery-popup-overlay');
// ScrollMagic = require('scrollmagic');
import TimelineMax from 'gsap/TimelineMax';
import TweenMax from 'gsap/TweenMax';

jQuery(document).ready(function($) {

  // Toggle nav menu
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('open');
  });

  // Modal
  $('.modal').popup({
    transition: 'all 0.3s',
    onclose: function() {
      $(this).find('label.error').remove();
    }
  });

  let scrollProcess = function() {
    if ($(window).width() > 767) {
      var controller = new ScrollMagic.Controller();

      function pathPrepare ($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
      }

      var $word = $("#path path");

      pathPrepare($word);

      var pathLength = $word[0].getTotalLength();

      var tween = new TimelineMax()
        .add(TweenMax.to($word, 1, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw word for 0.9

      // // build scene
      let pinScene = new ScrollMagic.Scene({
        triggerElement: ".process",
        duration: 660,
        triggerHook: 0,
      })
      .setPin('.process', {
        pushFollowers: true
      })
      .addTo(controller);
    
      var scene = new ScrollMagic.Scene({
        triggerElement: ".process",
        duration: 660,
        triggerHook: 0,
        tweenChanges: true
      })
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    
      scene.on("progress", function (event) {
        if (event.progress <= 0.1428) {
          $('.process-line__item--1').addClass('is-active');
          $('.process-list__item--1 .process-list__title').addClass('is-active');
    
          TweenMax.to(".process-list__item--1 .process-list__content", 0.5, {autoAlpha:1});
        }
        else {
          $('.process-line__item--1').removeClass('is-active');
          $('.process-list__item--1 .process-list__title').removeClass('is-active');
    
          TweenMax.to(".process-list__item--1 .process-list__content", 0.5, {autoAlpha:0});
        }
    
        if (event.progress > 0.1428 && event.progress <= 0.2856) {
          $('.process-line__item--2').prevAll().addClass('less');
          $('.process-line__item--2').addClass('is-active');
          $('.process-list__item--2 .process-list__title').addClass('is-active');
    
          TweenMax.to(".process-list__item--2 .process-list__content", 0.5, {autoAlpha:1});
        }
        else {
          $('.process-line__item--2').nextAll().removeClass('less');
          $('.process-line__item--2').removeClass('is-active');
          $('.process-list__item--2 .process-list__title').removeClass('is-active');
    
          TweenMax.to(".process-list__item--2 .process-list__content", 0.5, {autoAlpha:0});
        }
    
        if (event.progress > 0.2856 && event.progress <= 0.4284) {
          $('.process-line__item--3').prevAll().addClass('less');
          $('.process-line__item--3').addClass('is-active');
          $('.process-list__item--3 .process-list__title').addClass('is-active');
    
          TweenMax.to(".process-list__item--3 .process-list__content", 0.5, {autoAlpha:1});
        }
        else {
          $('.process-line__item--3').nextAll().removeClass('less');
          $('.process-line__item--3').removeClass('is-active');
          $('.process-list__item--3 .process-list__title').removeClass('is-active');
    
          TweenMax.to(".process-list__item--3 .process-list__content", 0.5, {autoAlpha:0});
        }
    
        if (event.progress > 0.4284 && event.progress <= 0.5712) {
          $('.process-line__item--4').prevAll().addClass('less');
          $('.process-line__item--4').addClass('is-active');
          $('.process-list__item--4 .process-list__title').addClass('is-active');
    
          TweenMax.to(".process-list__item--4 .process-list__content", 0.5, {autoAlpha:1});
        }
        else {
          $('.process-line__item--4').nextAll().removeClass('less');
          $('.process-line__item--4').removeClass('is-active');
          $('.process-list__item--4 .process-list__title').removeClass('is-active');
    
          TweenMax.to(".process-list__item--4 .process-list__content", 0.5, {autoAlpha:0});
        }
    
        if (event.progress > 0.5712 && event.progress <= 0.7140) {
          $('.process-line__item--5').prevAll().addClass('less');
          $('.process-line__item--5').addClass('is-active');
          $('.process-list__item--5 .process-list__title').addClass('is-active');
    
          TweenMax.to(".process-list__item--5 .process-list__content", 0.5, {autoAlpha:1});
        }
        else {
          $('.process-line__item--5').nextAll().removeClass('less');
          $('.process-line__item--5').removeClass('is-active');
          $('.process-list__item--5 .process-list__title').removeClass('is-active');
    
          TweenMax.to(".process-list__item--5 .process-list__content", 0.5, {autoAlpha:0});
        }
    
        if (event.progress > 0.7140 && event.progress <= 0.8568) {
          $('.process-line__item--6').prevAll().addClass('less');
          $('.process-line__item--6').addClass('is-active');
          $('.process-list__item--6 .process-list__title').addClass('is-active');
    
          TweenMax.to(".process-list__item--6 .process-list__content", 0.5, {autoAlpha:1});
        }
        else {
          $('.process-line__item--6').nextAll().removeClass('less');
          $('.process-line__item--6').removeClass('is-active');
          $('.process-list__item--6 .process-list__title').removeClass('is-active');
    
          TweenMax.to(".process-list__item--6 .process-list__content", 0.5, {autoAlpha:0});
        }
    
        if (event.progress > 0.8568) {
          $('.process-line__item--7').prevAll().addClass('less');
          $('.process-line__item--7').addClass('is-active');
          $('.process-list__item--7 .process-list__title').addClass('is-active');
    
          TweenMax.to(".process-list__item--7 .process-list__content", 0.5, {autoAlpha:1});
        }
        else {
          $('.process-line__item--7').nextAll().removeClass('less');
          $('.process-line__item--7').removeClass('is-active');
          $('.process-list__item--7 .process-list__title').removeClass('is-active');
    
          TweenMax.to(".process-list__item--7 .process-list__content", 0.5, {autoAlpha:0});
        }
      });

      // Scheme
      var schemeLine = $("#scheme-list__line path");

      var tweenScheme = new TimelineMax()
        .add(TweenMax.to(schemeLine, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9

      pathPrepare(schemeLine);

      let scene2 = new ScrollMagic.Scene({
        triggerElement: ".scheme",
        duration: 800,
        triggerHook: 0,
        tweenChanges: true
      })
        .setTween(tweenScheme)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        scene2.on("progress", function (event) {
        if (event.progress <= 0.1111) {
          $('.scheme-list__item--1').addClass('is-active');
        }
        else {
          $('.scheme-list__item--1').removeClass('is-active');
        }
    
        if (event.progress > 0.1111 && event.progress <= 0.2222) {
          $('.scheme-list__item--2').prevAll().addClass('less');
          $('.scheme-list__item--2').addClass('is-active');
        }
        else {
          $('.scheme-list__item--2').nextAll().removeClass('less');
          $('.scheme-list__item--2').removeClass('is-active');
        }
    
        if (event.progress > 0.2222 && event.progress <= 0.3333) {
          $('.scheme-list__item--3').prevAll().addClass('less');
          $('.scheme-list__item--3').addClass('is-active');
        }
        else {
          $('.scheme-list__item--3').nextAll().removeClass('less');
          $('.scheme-list__item--3').removeClass('is-active');
        }
    
        if (event.progress > 0.3333 && event.progress <= 0.4444) {
          $('.scheme-list__item--4').prevAll().addClass('less');
          $('.scheme-list__item--4').addClass('is-active');
        }
        else {
          $('.scheme-list__item--4').nextAll().removeClass('less');
          $('.scheme-list__item--4').removeClass('is-active');
        }
    
        if (event.progress > 0.4444 && event.progress <= 0.5555) {
          $('.scheme-list__item--5').prevAll().addClass('less');
          $('.scheme-list__item--5').addClass('is-active');
        }
        else {
          $('.scheme-list__item--5').nextAll().removeClass('less');
          $('.scheme-list__item--5').removeClass('is-active');
        }
    
        if (event.progress > 0.5555 && event.progress <= 0.6666) {
          $('.scheme-list__item--6').prevAll().addClass('less');
          $('.scheme-list__item--6').addClass('is-active');
        }
        else {
          $('.scheme-list__item--6').nextAll().removeClass('less');
          $('.scheme-list__item--6').removeClass('is-active');
        }
    
        if (event.progress > 0.6666 && event.progress <= 0.7777) {
          $('.scheme-list__item--7').prevAll().addClass('less');
          $('.scheme-list__item--7').addClass('is-active');
        }
        else {
          $('.scheme-list__item--7').nextAll().removeClass('less');
          $('.scheme-list__item--7').removeClass('is-active');
        }

        if (event.progress > 0.7777 && event.progress <= 0.8888) {
          $('.scheme-list__item--8').prevAll().addClass('less');
          $('.scheme-list__item--8').addClass('is-active');
        }
        else {
          $('.scheme-list__item--8').nextAll().removeClass('less');
          $('.scheme-list__item--8').removeClass('is-active');
        }

        if (event.progress > 0.8888) {
          $('.scheme-list__item--9').prevAll().addClass('less');
          $('.scheme-list__item--9').addClass('is-active');
        }
        else {
          $('.scheme-list__item--9').nextAll().removeClass('less');
          $('.scheme-list__item--9').removeClass('is-active');
        }
      });
    }
  };

  // Accordion
  let accordion = function() {
    let el = $('.process-list__item');
    let elTitle = $('.process-list__title');
    let content = $('.process-list__content');

    console.log($('.process-list__item')[0]);

    $($('.process-list__item')[0]).addClass('active').find(content).slideDown(500);

    elTitle.click(function() {
      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        $(this).next().slideUp(500);
      }
      else {
        $(this).parent().addClass('active');
        content.not($(this).next()).slideUp(500);
        elTitle.not($(this)).parent().removeClass('active');
        $(this).next().slideDown(500);
      }
    });
  };

  $('.testimonial-slider').owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 2,
        center: false,
        margin: 10
      },
      993: {
        items: 3,
      },
    }
  });

  // SVG
  svg4everybody({});

  scrollProcess();

  if ($(window).width() < 768) {
    accordion();
  }

});