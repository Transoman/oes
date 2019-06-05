var svg4everybody = require('svg4everybody');
import TimelineMax from 'gsap/TimelineMax';
import TweenMax from 'gsap/TweenMax';

jQuery(document).ready(function($) {

  // Toggle nav menu
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('open');
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

      // build scene
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
      if ($(window).width() >= 1200) {
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

  $('.open_form').magnificPopup({
    items: {
        src: '#modal-form',
        type: 'inline'
    }
  });

  $('.open_test').magnificPopup({
    items: {
        src: '#test',
        type: 'inline'
    }
  });

  let startTest = function() {

    $('.start-test').click(function(e) {
      e.preventDefault();
      $('.test__hero').fadeOut(0);
      $('.test-form').fadeIn(200);
    });

    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    $('.steps__btn--prev').click( function(e) {
      e.preventDefault();
      nextPrev(-1);
    } );

    $('.steps__btn--next').click( function(e) {
      e.preventDefault();

      if ( (currentTab + 1) >  $('.steps__item').length - 1  ) {
        return false;
      }

      nextPrev(1);
    } );

    function showTab(n) {
      // This function will display the specified tab of the form ...
      var x = $('.steps__item');
      x.hide();

      var countStep = x.length;
      var currentStep = n + 1;

      $('.test-progress__count').text(Math.floor((100 / countStep) * currentStep) + '%');
      $('.test-progress__line').css({
        width: Math.floor((100 / countStep) * currentStep) + '%'
      });

      if ($(x[n]).find('input[type="radio"]:checked').length == 0) {
        $('.steps__btn--next').attr('disabled', true);
      }
      else {
        $('.steps__btn--next').attr('disabled', false);
      }

      $(x[n]).css('display', 'block');
      // ... and fix the Previous/Next buttons:
      if (n == 0) {
        $('.steps__btn--prev').css('display', 'none');
      } else {
        $('.steps__btn--prev').css('display', 'inline');
      }
      if (n == (x.length - 1)) {
        $('.steps__btn--next').css('display', 'none');
      } else {
        $('.steps__btn--next').css('display', 'inline');
      }
    }

    function nextPrev(n) {

      // This function will figure out which tab to display
      var x = $('.steps__item');

      // Hide the current tab:
      $(x[currentTab]).css('display', 'none');
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;
      // if you have reached the end of the form... :
      if (currentTab >= x.length) {
        //...the form gets submitted:
        return false;
      }
      // Otherwise, display the correct tab:
      showTab(currentTab);
    }

    $('.test-form__label').click(function() {
      $('.steps__btn--next').attr('disabled', false);
    });

  };

  let inputsPhone = $('input[type="tel"]');
  let maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };

  for (let i = 0; i < inputsPhone.length; i++) {
    IMask(inputsPhone[i], maskOptions);
  }

  $('.ajax-form').submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
    ajaxSend($('.ajax-form'), data);
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $.magnificPopup.open({
          items: {
            src: '#test-thanks',
            type: 'inline'
          }
        });
        setTimeout(function() {
          $(formName).trigger('reset');
          $('.test__hero').fadeIn();
          $('.test-form').fadeOut(0);
          startTest();
        }, 2000);
      }
    });
  }

  // SVG
  svg4everybody({});

  scrollProcess();
  startTest();

  if ($(window).width() < 768) {
    accordion();
  }

});