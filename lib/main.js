'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');

  $(function () {
    $('.description-columns .title-container .title').matchHeight();
    $('.description-columns .title-container .description').matchHeight();
    $('.description-columns .links').matchHeight();
    $('.description-columns .map').matchHeight();
    $('#details .column.col-1').matchHeight();
    $('#details .column.col-2').matchHeight();
    $('#details .column.col-3').matchHeight();
  });

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  $('nav .navbar-menu a').each(function () {
    $(this).on('click', function () {
      var section = $(this).html().replace(/\s+/g, '-').toLowerCase();
      if (section !== 'registry') {
        $('html, body').animate({
          scrollTop: $('#' + section).offset().top - 50
        }, 300);
      }
    });
  });
});