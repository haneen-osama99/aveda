const swiper = new Swiper(".logoSwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    speed:2000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    breakpoints: {
        320: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        }
      }
  });

  