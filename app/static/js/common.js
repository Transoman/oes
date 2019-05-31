global.jQuery = require('jquery');
var svg4everybody = require('svg4everybody'),
popup = require('jquery-popup-overlay'),
ScrollMagic = require('scrollmagic');
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

  var controller = new ScrollMagic.Controller();

  function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }
  
  var $word = $("#path path");

  pathPrepare($word);

  var pathLength = $word[0].getTotalLength();

  // window.addEventListener("scroll", function(e) {
 
  //   // What % down is it? 
  //   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
  //   // Length to offset the dashes
  //   var drawLength = pathLength * scrollPercentage;
    
  //   // Draw in reverse
  //   $word[0].style.strokeDashoffset = pathLength - drawLength;
    
  // });

  // var tween = new TimelineMax()
  //   .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
  //   .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

  // // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".process",
    duration: 700,
    // tweenChanges: true
  })
    .setPin('.process', {
      pushFollowers: true
    })
    // .setTween(tween)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // SVG
  svg4everybody({});

});