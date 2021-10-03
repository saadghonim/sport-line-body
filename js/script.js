
$(document).ready(function(){



  $(window).load(function() {
    $(".preloader-sa").fadeOut();
  });
  
/* ~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~start header~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
$(".bars_icon").click(function(){
  $(".navbar_").toggle(600);
  $(".moboverlay").fadeIn('500');
  $("body").addClass("over");
});
$(".close_nav").click(function(){
  $(".bars_icon").trigger("click");
  $(".moboverlay").fadeOut('500');
  $("body").removeClass("over");

});
$(".moboverlay").click(function(){
  $(".bars_icon").trigger("click");
  $(".moboverlay").fadeOut('500');
  $("body").removeClass("over");

});
$(".mob_click").click(function(){
  $(".negamenu_parant").slideToggle(500)
})
$(".btn_search").click(function(){
  $(".div_input").toggle(600);
  $(".overlaysearch").toggle("500");
  $("body").toggleClass("over");
  $(".icon-search").toggleClass("open-search close-search");

  
});
$(".overlaysearch").click(function(){
  $(".btn_search").trigger("click");
})
$('.btn-div').click(function () {
  $(".cats-dispaly").slideToggle(400);
  if ($(window).width() <= 1199) {
      $(this).toggleClass("active")
  }
});

$('.has-level-2>.cat-anchor').click(function (e) {
  e.preventDefault()
  var item = $(this);
  $(".has-level-2>.cat-anchor").not(item).removeClass("active");
  $(item).toggleClass("active");
  if ($(item).siblings().css('display') == 'none') {
      $(item).siblings().slideDown(500);
  } else {
      $(item).siblings().slideUp(500);
  }
  $(".has-level-2>.cat-anchor").not(item).siblings().slideUp(500);
})


/* ~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~end header~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* ~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~start slider~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
$('.slider .owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  rtl: true,
  autoplay: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
})
/* ~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~end slider~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


});

/* ~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~start most_viewed~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
$('.most_viewed .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    stagePadding: 6,
    navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

/* ~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~end most_viewed~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */



/* ~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~start ~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start brands~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
$('.brands .owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
  rtl: true,
  responsive: {
      0: {
          items: 2,
          margin:15
      },
      600: {
          items: 4
      },
      1000: {
          items: 5
      }
  }
  })
  
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~end brands~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */

      /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start Testimonials~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

$('.Testimonials .owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  rtl: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 2
      }
  }
})
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end Testimonials~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


