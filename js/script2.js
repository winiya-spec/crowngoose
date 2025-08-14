$(function () {
  let $wrap = $('#mainslide');
  let $images = $wrap.find('img');

  function img_fadeOut2() {
    let $current = $wrap.find('.selected1');
    let currentIndex = $images.index($current);
    let nextIndex = (currentIndex + 1) % $images.length;

    $current.removeClass('selected1');
    $images.eq(nextIndex).addClass('selected1');
  }

  setInterval(img_fadeOut2, 4000);
});




// 스크롤 트리거 애니메이션 

document.addEventListener('DOMContentLoaded', function () {
  const targetImg = document.querySelector('.phil_bg img');

  if (!targetImg) {
    console.warn("대상 이미지가 없습니다.");
    return;
  }

  // 1. 페이지 로드 시 첫 애니메이션 실행
  targetImg.classList.add('zoom');

  // 2. IntersectionObserver로 스크롤 진입 시 재실행
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        targetImg.classList.remove('zoom');
        void targetImg.offsetWidth; // 강제 리플로우
        targetImg.classList.add('zoom');
      }
    });
  }, {
    threshold: 0.5 // 50% 보일 때 실행
  });

  observer.observe(targetImg);
});





