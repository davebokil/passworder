(function($) {

  // Benefits Selection
  


  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Accordion for Active Career Player
  $("#accordion1").accordion({ collapsible: true, active: false, heightStyle: "content" });
    $("#accordion1 > h3").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $("#accordion1 > h3 i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $("#accordion1 > h3 i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $("#accordion1 > h3 i").removeClass("active");
            $(this).addClass("active");
        }
    });

    $("#accordion2").accordion({ collapsible: true, active: false, heightStyle: "content" });
    $("#accordion2 > h3").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $("#accordion2 > h3 i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $("#accordion2 > h3 i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $("#accordion2 > h3 i").removeClass("active");
            $(this).addClass("active");
        }
    });

})(jQuery); // End of use strict
