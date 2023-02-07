$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  margin:2,
  loop:true,
  autoWidth:true,
  nav:true,
  responsiveClass:true,
  autoplayTimeout:4000,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"]
})


