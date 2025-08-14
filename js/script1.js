$(function () {
  const $wrap = $('.main_img');
  const $images = $wrap.find('img');
  const $dots = $wrap.find('.dot');
  let current = 0;
  let total = $images.length;
  let intervalId;

  function goToSlide(next) {
    $images.removeClass('selected1');
    $images.eq(next).addClass('selected1');

    $dots.removeClass('on');
    $dots.eq(next).addClass('on');

    current = next;
  }

  function autoSlide() {
    intervalId = setInterval(() => {
      let next = (current + 1) % total;
      goToSlide(next);
    }, 4000);
  }

  function stopSlide() {
    clearInterval(intervalId);
  }

  // 인디케이터 클릭 이벤트
  $dots.on('click', function () {
    const index = $(this).index();
    stopSlide();
    goToSlide(index);
    autoSlide();
  });

  // 터치 이벤트 (스와이프)
  let startX = 0;
  let endX = 0;

  $wrap.on('touchstart', function (e) {
    startX = e.originalEvent.touches[0].clientX;
  });

  $wrap.on('touchmove', function (e) {
    endX = e.originalEvent.touches[0].clientX;
  });

  $wrap.on('touchend', function () {
    const diffX = endX - startX;
    if (Math.abs(diffX) > 50) {
      stopSlide();
      if (diffX > 0) {
        let prev = (current - 1 + total) % total;
        goToSlide(prev);
      } else {
        let next = (current + 1) % total;
        goToSlide(next);
      }
      autoSlide();
    }
  });

  // 초기 슬라이드 시작
  goToSlide(current);
  autoSlide();




//new



$(function() {
  const $slides = $('.slider-container .slide');
  const $dots = $('.slider-container .dot');
  const total = $slides.length;
  let current = 0;
  let intervalId;

  function goToSlide(index) {
    $slides.removeClass('active').css('opacity', 0);
    $slides.eq(index).addClass('active').css('opacity', 1);
    
    $dots.removeClass('active');
    $dots.eq(index).addClass('active');

    current = index;
  }

  function autoSlide() {
    intervalId = setInterval(() => {
      let next = (current + 1) % total;
      goToSlide(next);
    }, 6000);
  }

  function stopSlide() {
    clearInterval(intervalId);
  }

  // 인디케이터 클릭 시 해당 슬라이드로
  $dots.on('click', function () {
    const index = $(this).index();
    stopSlide();
    goToSlide(index);
    autoSlide();
  });

  // 터치 스와이프
  let startX = 0;
  let endX = 0;

  $('.slider-container').on('touchstart', function(e) {
    stopSlide();
    startX = e.originalEvent.touches[0].clientX;
  });

  $('.slider-container').on('touchmove', function(e) {
    endX = e.originalEvent.touches[0].clientX;
  });

  $('.slider-container').on('touchend', function() {
    const diffX = endX - startX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToSlide((current - 1 + total) % total);
      } else {
        goToSlide((current + 1) % total);
      }
    }
    autoSlide();
  });

  // 초기 실행
  goToSlide(current);
  autoSlide();
});







//프로모션

// 초기 설정: 모든 figure 열기
$('.promotion figure').each(function () {
  const $figure = $(this);
  const $p = $figure.find('p');

  // 모든 설명과 콘텐츠 보여주기
  $p.addClass('selected1').show();
  $figure.find('ul, .promo-img1, .promo-img2, .pro2').show();
});

//  toggle-icon 클릭 시 내용 토글
$('.promotion').on('click', '.toggle-icon', function () {
  const $figure = $(this).closest('figure');
  const $p = $figure.find('p');
  const $content = $figure.find('ul, .promo-img1, .promo-img2, .pro2');

  // 토글 애니메이션
  $p.slideToggle(300);
  $content.slideToggle(300);

  // 스타일 클래스 토글 (필요 시)
  $p.toggleClass('selected1');

  // 아이콘 회전 효과
  $(this).toggleClass('rotated');
});




//메뉴

$(function(){
  // 메뉴 열기 (메뉴 아이콘 클릭)
  $('.menu_con').on('click', function(e){
    e.preventDefault(); // a태그 기본이동 막기
    $('#menu_wrap').stop().animate({left: '0%'}, 600, 'easeInOutQuad');

  });

  // 메뉴 닫기 (닫기 버튼 클릭)
  $('.menu_close').on('click', function(e){
    e.preventDefault();
    $('#menu_wrap').stop().animate({left: '-100%'}, 600, 'easeInOutQuad');

  });

  // quick_menu (로그인/회원가입 버튼 선택 시)
  $('#navi_btn li a').on('click', function(){
    $('#navi_btn li a').removeClass('selected');
    $(this).addClass('selected');
  });

  // gnb 아코디언 메뉴 열기/닫기
  $('#gnb > ul > li > a').on('click', function(e){
    e.preventDefault();  // 서브메뉴 열 때 a 태그 기본 이동 막기
    const submenu = $(this).siblings('ul.submenu');
    if(submenu.is(':hidden')){
      $('.submenu').slideUp();
      // $('#gnb ul li a i').attr('class', 'xi-plus-min');
      submenu.slideDown();
      // $(this).find('i').attr('class', 'xi-minus-min');
    } else {
      submenu.slideUp();
      // $(this).find('i').attr('class', 'xi-plus-min');
    }
  });
});


 




//화살표 로테이트
$('.has-submenu > a').on('click', function () {
  $(this).find('.b_arrow').toggleClass('rotate');
});





  






});


