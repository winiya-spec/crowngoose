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


 