$(document).ready(function() {


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

(function($){
	let owl = $(".owl-carousel"),
      url = null,
      bgDrop = $(".bg-drop"),
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
    center: true,
    loop: true,
    items: 2,
    stagePadding: 20,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20,
        margin: 10
      },
      640: {
        margin: 0,
        items: 1.4
      },
      1024: {
        margin: 0,
        items: 1.8
      },
    }
  });
  owl.on("changed.owl.carousel", function(){
    setTimeout(() => {
      let centerImg = owl.find(".center").find("div"),
          url = centerImg.css('background-image');
      bgDrop.css('background-image', url);
    }, 20)
  });

  next.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  })
	 })(jQuery);

  //menu tabs
  (function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);

  });







