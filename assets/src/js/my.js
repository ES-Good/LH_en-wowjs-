const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 20,
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    breakpoints:{
      640: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  new WOW().init();