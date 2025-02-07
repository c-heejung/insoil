// 초기화
$('#fullpage').fullpage({
  responsiveWidth: 1024,
  navigation: true, //기본값 false(안보이게) ↔ true(보이게)
  navigationPosition: 'left',
  navigationTooltips: ['INSOIL', 'Brand Story', 'Gift set', 'Shop', 'Collection', 'Reviews', ''],
  showActiveTooltip: true, // true(영역에 도달했을 때 단어가 노출되게)


  afterLoad: function (origin, destination, direction, trigger) {
    if (destination == 1 || destination == 2 || destination == 3 || destination == 4 || destination == 5 || destination == 6) { // 2, 4번구역에 도달했을 때 header에 active 클래스 주기
      $("#header, #fp-nav").addClass("active");
    } else {
      $("#header, #fp-nav").removeClass("active");
    }

    if (destination == 7) { // footer 영역에 도달했을 때 header 사라지게
      $("#header, #fp-nav").fadeOut();
    } else {
      $("#header, #fp-nav").fadeIn();
    }
  },
});


//main-visual
const mv = new Swiper('.mv', {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }, //fade효과 배경이 겹치지 않게 교차
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
});


//notice
const notice_list = new Swiper('.notice_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  direction: "vertical", // 수직 슬라이드 (*높이 설정하기)
});


//story
const txt_list = new Swiper(".txt_list", {
  effect: "fade", // 페이드 효과
  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const img_list = new Swiper(".img_list", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

});


txt_list.controller.control = img_list;
img_list.controller.control = txt_list;


//gift
const gift_prd = new Swiper('.gift_prd', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1500,
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 1.15,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
});


//shop - effect card
const shop_prd = new Swiper('.shop_prd', {
  effect: "cards",
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//shop - catagory
$(".bg2").hide();
$(".bg3").hide();
$(".bg4").hide();
$(".bg5").hide();

$(".plate").hide();
$(".bowl").hide();
$(".cutlery").hide();
$(".fabric").hide();


$(".category1").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".bg1").fadeIn().siblings().hide();
  $(".shop_title h2").show();


  $(".cup").show();
  $(".plate").hide();
  $(".bowl").hide();
  $(".cutlery").hide();
  $(".fabric").hide();
});

$(".category2").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".bg2").fadeIn().siblings().hide();
  $(".shop_title h2").show();


  $(".plate").show();
  $(".cup").hide();
  $(".bowl").hide();
  $(".cutlery").hide();
  $(".fabric").hide();
});

$(".category3").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".bg3").fadeIn().siblings().hide();
  $(".shop_title h2").show();


  $(".bowl").show();
  $(".cup").hide();
  $(".plate").hide();
  $(".cutlery").hide();
  $(".fabric").hide();
});

$(".category4").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".bg4").fadeIn().siblings().hide();
  $(".shop_title h2").show();


  $(".cutlery").show();
  $(".cup").hide();
  $(".plate").hide();
  $(".bowl").hide();
  $(".fabric").hide();
});

$(".category5").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".bg5").fadeIn().siblings().hide();
  $(".shop_title h2").show();


  $(".fabric").show();
  $(".cup").hide();
  $(".plate").hide();
  $(".bowl").hide();
  $(".cutlery").hide();
});



//review
const review_list = new Swiper('.review_list', {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,

  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

