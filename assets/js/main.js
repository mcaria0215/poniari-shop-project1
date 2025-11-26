document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  body.classList.add('main');

  const mainVisualSlider = new Swiper('.main-visual > .swiper-container', {
    loop: true,      
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false,
    },
    scrollbar: {
      el: '.main-visual .swiper-scrollbar',        
      draggable: true,
    },               
  });
  
  const initProductSwiper = (selector)=>{
    return new Swiper(selector + ' > .swiper-container', {
      loop: true,
      scrollbar: { el: selector + ' .swiper-scrollbar', draggable: true },
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 2,
      breakpoints: {          
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1920: {
          slidesPerView: 6,
          spaceBetween: 30,
        }
      }
    });
  }

  initProductSwiper('.product-section--best');
  initProductSwiper('.product-section--new');
});