document.addEventListener('DOMContentLoaded', () => {
  // detail info tab
  const tabItems = document.querySelectorAll('.product-tabs__item');
  const contentSections = document.querySelectorAll('.product-content__section');
  
  tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {      
      e.preventDefault();
      
      const targetId = tab.getAttribute('href');
      
      tabItems.forEach(item => {
          item.classList.remove('product-tabs__item--active');
      });
      
      tab.classList.add('product-tabs__item--active');
      
      contentSections.forEach(section => {
        section.classList.remove('is-open');
      });
      
      
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.classList.add('is-open');
      }
    });
  }); 

  const productTabsContainer = document.querySelector('.product-detail__product-tabs');  
  const STICKY_CLASS = 'is-sticky';
  let tabOffsetTop = 0;

  if (productTabsContainer) {
    productTabsContainer.classList.remove(STICKY_CLASS);      
    tabOffsetTop = productTabsContainer.getBoundingClientRect().top + window.scrollY;     
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
        
      if (currentScrollY >= tabOffsetTop) {
          productTabsContainer.classList.add(STICKY_CLASS);
      } else {
          productTabsContainer.classList.remove(STICKY_CLASS);
      }
    }, { passive: true });
  }
 
  
  // mobile thumb swiper
  let thumbnailSwiper = undefined;
  const mobileBreakpoint = 768;

  function initSwiper() {    
    if (window.innerWidth <= mobileBreakpoint) {
      if (thumbnailSwiper === undefined) {
        thumbnailSwiper = new Swiper('.thumbnail-swiper-container', {          
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    } else {
      if (thumbnailSwiper !== undefined) {
        thumbnailSwiper.destroy(true, true);
        thumbnailSwiper = undefined;
      }
    }
  }
  
  initSwiper();
  window.addEventListener('resize', initSwiper);

  
  // mobile modal
  const openBtn = document.getElementById('open-sheet-btn');
  const wishBtn = document.getElementById('wish-btn-mobile');
  const closeBtn = document.querySelector('.bottom-sheet__close-btn');
  const overlay = document.querySelector('.mobile-bottom-sheet-overlay');  
  
  const closeSheet = ()=>{
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
  
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  }  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSheet);
  }
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeSheet();
      }
    });
  }
  if (wishBtn) {
    wishBtn.addEventListener('click', () => {
      alert('상품이 위시리스트에 담겼습니다!');
    });
  }

});