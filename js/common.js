// 2차 메뉴
$(".depth2").hide();

// 1차메뉴에 마우스 올린 요소의 depth2를 찾아서 슬라이드 다운 > *2차 메뉴 각각 내려오는 것
$(".gnb li").mouseenter(function () {
  $(this).find(".depth2").stop().slideDown();
  // $(".depth2").slideDown();
});

$(".gnb li").mouseleave(function () {
  $(this).find(".depth2").stop().slideUp();

  // *2차 메뉴 전체가 내려오게 하는 것
  // $(".depth2").slideDown();
});

// mgnb
$(".mgnb_wrap").hide();

$(".menu").click(function () {
  $(".mgnb_wrap").fadeIn();
  $("#fp-nav").fadeOut();
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
  $("#fp-nav").fadeIn();
});

// mgnb - 2차메뉴 (클릭 시, 슬라이드 다운)
$(".mdepth2").hide();

$(".mgnb > li").click(function () {
  $(this).children(".mdepth2").slideToggle();
  $(this).siblings().children(".mdepth2").slideUp();
});