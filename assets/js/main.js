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

  const tabNav = document.querySelector('.product-section__tab-nav');
  const swiperInstances = {};

  function manageSwiper(contentId) {
    const selector = `#${contentId}`;
    
    if (swiperInstances[contentId]) {
      return swiperInstances[contentId];
    }
    
    if (!document.querySelector(selector + ' > .swiper-container')) {
      console.warn(`Swiper container not found for ID: ${contentId}`);
      return null;
    }
    
    const newSwiper = initProductSwiper(selector);
    swiperInstances[contentId] = newSwiper;
    return newSwiper;
  }

  tabNav.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('.tab-nav__item');
    if (!clickedTab) return;

    const targetContentId = clickedTab.getAttribute('aria-controls');    
    const currentActiveTab = tabNav.querySelector('.tab-nav__item--active');

    if (currentActiveTab) {
      currentActiveTab.classList.remove('tab-nav__item--active');
      currentActiveTab.setAttribute('aria-selected', 'false');
    }
    clickedTab.classList.add('tab-nav__item--active');
    clickedTab.setAttribute('aria-selected', 'true');
    
    const currentActiveContent = document.querySelector('.product-section__content-wrap .tab-content--active');
    if (currentActiveContent) {
      currentActiveContent.classList.remove('tab-content--active');
    }

    const targetContent = document.getElementById(targetContentId);
    if (targetContent) {
      targetContent.classList.add('tab-content--active');
    }
    
    const activeSwiper = manageSwiper(targetContentId);
    if (activeSwiper) {        
      activeSwiper.update(); 
    }
  });

  const initialActiveTab = tabNav.querySelector('.tab-nav__item--active');
  if (initialActiveTab) {
    const initialContentId = initialActiveTab.getAttribute('aria-controls');
    manageSwiper(initialContentId);
  }
  
  const initRollingBannerSwiper = () => {    
    const container = document.querySelector('.bottom-banner-section__rolling-container');
    
    if (!container) {
      console.warn('Rolling banner container not found.');
      return null;
    }

    return new Swiper(container, {
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 1000 * 20, 
      slidesPerView: 1,
      breakpoints: {        
        1280: {
          slidesPerView: 1.2
        }
      },
      spaceBetween: 0,
      allowTouchMove: false,
      freeMode: true,
      grabCursor: false, 
    });
  }


  const newProductSectionSwiper = initProductSwiper('.product-section--new');
  const focusNowSwiper = initRollingBannerSwiper();
});
