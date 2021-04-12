
/* Swiper-Slider start */

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  /* effect: 'fade', */
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* Swiper-Slider end */

/* Scroll-Top start */

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }
});
$('.scroll-top').click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
});

/* Scroll-Top end */
 
/* Slicky-Navbar start */
 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("sticky-navbar");

var sticky = navbar.offsetTop;

function myFunction(){
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Slicky-Navbar end */