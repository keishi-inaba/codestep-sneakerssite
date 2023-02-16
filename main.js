/* スクロール時のイベント */
$(window).scroll(function() {
  $('.fadein').each(function() {
    let scroll = $(window).scrollTop();
    let target = $(this).offset().top;
    let windowHeight = $(window).height();
    if(scroll > target - windowHeight + 200) {
      $(this).css('opacity', '1');
      $(this).css('transform', 'translateY(0)');
    };
  });
});

/*スライドショー*/
$('.pickup-list').slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: true,
  resposive: [
    {
      breakpoint: 768,
      setting: {
        centerPadding:'50px',
        slidesToShow: 1,
      }
  }]
});

/*バーガーメニュー*/
$('.btn').on('click', function() {
  if(!$('#header').hasClass('open')) {
    $('#header').addClass('open');
  } else {
    $('#header').removeClass('open')
  }
});

$('.menu-mask').on('click', function() {
  $('#header').removeClass('open');
});

$('.nav-menu a').on('click',function() {
  $('#header').removeClass('open');
}); 


/*スムーススクロール*/
$('a[href^="#]').click(function() {
  let href = $(this).attr('href');
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;

  $('html, body').animate({scrollTop: position}, 600, "swing");
  return false;
});