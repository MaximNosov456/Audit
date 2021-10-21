$(function () {
  $(".header__menu").on("click", function (e) {
    e.preventDefault();
    if (e.target && e.target.tagName === "A") {
      const id = $(e.target).attr("href");
      const top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    }
  });

  $(".menu-btn").on("click", function () {
    $(".header__menu").addClass("header__menu--active");
  });

  $(".menu-close, .header__list-link").on("click", function () {
    $(".header__menu").removeClass("header__menu--active");
  });

  const swiper = new Swiper(".swiper-top", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-top-pagination",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
    },
  });
});
