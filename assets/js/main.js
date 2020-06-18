   // Menú responsive
   $(function () {
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open');
      $('body').toggleClasss('offcanvas-expanded');
    })
  })


  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });

  $('.nav-link').click(function () {
    $('.offcanvas-collapse').removeClass('open');
    $('.hamburger').toggleClass('is-active');
    $('body').removeClass('offcanvas-expanded');
  })

  /*top perfumes */
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    focusOnSelect: true
  });