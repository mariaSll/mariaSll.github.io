const swiper = new Swiper(".swiper-hero", {

    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 40,
    // slidesPerGroupAuto: true,

    direction: "horizontal",
    loop: true,
    allowTouchMove: true,
    // effect: "cube",
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      // type: "progressbar"
      clickable: true,
      // dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   draggable: true,
    // },
    breakpoints: {
        0:{
            slidesPerView: 1,
          spaceBetween: 50,
        },
        300:{
            slidesPerView: 1,
          spaceBetween: 50,
        },
        620: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 42,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

      } ,
      
  });

