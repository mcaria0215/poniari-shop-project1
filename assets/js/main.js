document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  body.classList.add('main');

  const mainVisualSwiper = new Swiper('.main-visual > .swiper-container', {
    loop: true,      
    autoplay: {
      delay: 1000 * 7, 
      disableOnInteraction: false,
    },
    scrollbar: {
      el: '.main-visual .swiper-scrollbar',        
      draggable: true,
    },               
  });

  const bannerSectionSwiper = new Swiper('.banner-section > .swiper-container', {
    grid: {
      rows: 2,          
      fill: 'row',      
    },
    slidesPerView: 2,
    spaceBetween: 16,    
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 24, 
      },      
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }           
  });

  const wideBannerSectionSwiper = new Swiper('.wide-banner-section > .swiper-container', {
    slidesPerView: 1.2,
    spaceBetween: 10,    
    breakpoints: {          
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 3.8,
        spaceBetween: 20,
      }
    }    
  })

  const productShowcaseSwiper = new Swiper('.product-showcase__list', {
    loop: true,
    scrollbar: {
      el: '.product-showcase__list .swiper-scrollbar',        
      draggable: true,
    }, 
    slidesPerView: 2.5,
    spaceBetween: 10,    
    breakpoints: {          
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      }
    }          
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