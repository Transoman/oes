global.jQuery = require('jquery');
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

  let scrollProcces = function() {
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
        .add(TweenMax.to($word, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
    
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
        .addIndicators() // add indicators (requires plugin)
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

  // SVG
  svg4everybody({});

  scrollProcces();

  if ($(window).width() < 768) {
    accordion();
  }

});