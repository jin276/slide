$(function() {
  let currentIndex = 0;
  //--- indicator生成 ---//
  let $slides = $('.slide-content').find('.slide-item');
  for (let i= 0; i < $slides.length; i++) {
    $('.indicators').append('<li class="dot"></li>');
  }

  //--- image, indicator１番目表示 ---//
  $slides.eq(currentIndex).fadeIn();
  let $backImg = $('.back-images').find('.back-image');
  $backImg.eq(currentIndex).fadeIn();
  let $indicator = $('.indicators').find('.dot');
  $indicator.eq(currentIndex).addClass('colored');

  //--- slider function ---//
  function $slider(nextIndex) {
    $slides.eq(currentIndex).fadeOut();
    $backImg.eq(currentIndex).fadeOut();
    $indicator.eq(currentIndex).removeClass('colored');
    currentIndex = nextIndex;
    $slides.eq(currentIndex).fadeIn();
    $backImg.eq(currentIndex).fadeIn();
    $indicator.eq(currentIndex).addClass('colored');
  }
  // $slider();

  //--- previus ---//
  $('.prev').click(function() {
    let prevIndex = currentIndex -1;
    if (prevIndex < 0) {
      prevIndex = $slides.length -1;
    } else {
      prevIndex = currentIndex -1;
    }
    $slider(prevIndex);
  });

  //--- Next ---//
  $('.next').on('click', function() {
    let nextIndex = currentIndex +1;
    if (nextIndex > $slides.length -1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex +1;
    }
    $slider(nextIndex);
  });

  //--- Auto slider ---//
  // let $timeoutId;

  // $('.slide-item').on('mouseleave', function() {
  //   function autoSlide() {
  //     let nextIndex = currentIndex +1;
  //     if (nextIndex > $slides.length -1) {
  //       nextIndex = 0;
  //     } else {
  //       nextIndex = currentIndex +1;
  //     }
  //     $slider(nextIndex);
  //     $timeoutId = setTimeout(autoSlide, 5000);
  //   }
  //   autoSlide();
  // });

  // //--- auto slider stop ---//
  // $('.slide-item').on('mouseenter', function() {
  //   clearTimeout($timeoutId);
  // });
 
});