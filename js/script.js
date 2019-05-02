$(document).ready(function () {

$(".b-main-left__bottom a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});

$(".b-menu-left a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});

$('.menu-icon').click(function(){
  $('.b-nav').toggleClass('active');
  $(this).toggleClass('active');
});


$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-nav").length) {
    $('.b-nav').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});



$(".modal1").fancybox();

/*var $page = $('html, body');
$('.btn-more[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


*/
$(".btn-scroll").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 1530){
        $('.btn-scroll').addClass('active');
     } else if(scrolledpx < 1531){
      $('.btn-scroll').removeClass('active');
     }

    if(scrolledpx > 830){
        $('.b-header').addClass('active');
     } else if(scrolledpx < 831){
      $('.b-header').removeClass('active');
     }

  });


$('.b-partners-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.b-foto-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '<button class="b-arrow b-arrow__next">→</button>',
  prevArrow: '<button class="b-arrow b-arrow__prev">←</button>',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      variableWidth: false,
      centerMode: false,
      adaptiveHeight: false,      
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.b-about-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '<button class="b-arrow b-arrow__next">→</button>',
  prevArrow: '<button class="b-arrow b-arrow__prev">←</button>',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1560,
    settings: {
      slidesToShow: 1,     
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      variableWidth: false,
      centerMode: false,
      adaptiveHeight: false,      
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.b-prepack-next').on("click", function() {
    $('.b-prepack-slider__big').slick("slickNext"); 
})
$('.b-prepack-prev').on("click", function() {
    $('.b-prepack-slider__big').slick("slickPrev"); 
})

$('.b-prepack-slider__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false,
  asNavFor: '.b-prepack-slider__pager',
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
$('.b-prepack-slider__pager').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  asNavFor: '.b-prepack-slider__big',
  focusOnSelect: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});









});



