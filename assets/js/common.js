document.addEventListener('DOMContentLoaded', function() {
  // ----------------------------------------------------
  // common
  // ----------------------------------------------------  
  const searchOpen = document.querySelector('.action-btn--search');
  const searchClose = document.querySelector('.action-btn--keyword-close');    
  const searchBox = document.querySelector('.main-header__search-box'); 
  
  if (searchOpen && searchBox) {
    searchClose.addEventListener('click',()=>{
      searchBox.classList.remove('is-open');      
    });
    searchOpen.addEventListener('click',()=>{
      searchBox.classList.add('is-open');      
    });
  } 

  const BODY = document.querySelector('body');
  const mainHeader = document.querySelector('.main-header');
  const HIDE_CLASS = 'is-hidden-by-scroll';
  const IS_SCROLLING_UP = 'is-scroll-up';
  let lastScrollY = window.scrollY;

  if (mainHeader) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      const headerHeight = mainHeader.offsetHeight;
      
      if (currentScrollY > headerHeight + 20) {           
        if (scrollDelta > 0) {            
          BODY.classList.add(HIDE_CLASS);
          BODY.classList.remove(IS_SCROLLING_UP);
          BODY.classList.remove('is-active');             
        } else if (scrollDelta < 0) {            
          BODY.classList.remove(HIDE_CLASS);
          BODY.classList.add(IS_SCROLLING_UP);
        }
      } else {          
        BODY.classList.remove(HIDE_CLASS);
        BODY.classList.remove(IS_SCROLLING_UP);
      }
      
      lastScrollY = currentScrollY;        
    }, { passive: true });
  }

   // top btn  
  const scrollButton = document.getElementById('topScrollBtn');
  const VISIBLE_CLASS = 'is-visible';
  const SCROLL_THRESHOLD = 400;

  const scrollToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

  if (scrollButton) {    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > SCROLL_THRESHOLD) {            
        scrollButton.classList.add(VISIBLE_CLASS);
      } else {            
        scrollButton.classList.remove(VISIBLE_CLASS);
      }
    }, { passive: true });
    
    scrollButton.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToTop();
    });   
    
    if (window.scrollY > SCROLL_THRESHOLD) {
      scrollButton.classList.add(VISIBLE_CLASS);
    }
  }

  // ----------------------------------------------------
  // pc
  // ----------------------------------------------------    
  const pcNav = document.querySelector('#pc-nav');  
  if(mainHeader && pcNav){
    const menuItems = pcNav.querySelectorAll('.pc-menu__item');
    let timer;
    let headerTimer;

    mainHeader.addEventListener('mouseover',(e)=>{ 
      clearTimeout(headerTimer);     
      e.currentTarget.classList.add('is-active');
      mainHeader.classList.remove(HIDE_CLASS);
    });
    mainHeader.addEventListener('mouseleave',()=>{
      if (searchBox.classList.contains('is-open')) {
        return;
      }

      headerTimer = setTimeout(() => {
        mainHeader.classList.remove('is-active');
        menuItems.forEach(i => {
          const s = i.querySelector('.main-header__sub-menu');
          if (s) {
            s.classList.remove('main-header__sub-menu--active');
          }
        });
      }, 300);      
    });    

    menuItems.forEach(item => {
      const subMenu = item.querySelector('.main-header__sub-menu');
      if (!subMenu) return;
      
      item.addEventListener('mouseover', () => {
        clearTimeout(timer);
        clearTimeout(headerTimer);

        menuItems.forEach(i => {
          const s = i.querySelector('.main-header__sub-menu');
          if (s && s !== subMenu) {
            s.classList.remove('main-header__sub-menu--active');
          }
        });

        timer = setTimeout(() => {
            subMenu.classList.add('main-header__sub-menu--active');            
        }, 100); 
      });
        
      item.addEventListener('mouseleave', () => {
        clearTimeout(timer);
        
        timer = setTimeout(() => {
          subMenu.classList.remove('main-header__sub-menu--active');
        }, 200); 
      });
    }); 
  }

  // ----------------------------------------------------
  // mobile
  // ----------------------------------------------------
  const body = document.querySelector('body');
  const mobileMenuClose = document.querySelector('.action-btn--close');
  const mobileMenuOpen = document.querySelector('.action-btn--menu');
  const mobileMenuWarp = document.querySelector('#mobile-nav-menu');
  if (mobileMenuClose && mobileMenuOpen && mobileMenuWarp) {
    mobileMenuClose.addEventListener('click',()=>{
      body.classList.remove('no-scroll')
      mobileMenuWarp.classList.remove('is-open')
    });
    mobileMenuOpen.addEventListener('click',()=>{
      body.classList.add('no-scroll')
      mobileMenuWarp.classList.add('is-open')
    });
  } 

  const accordionButtons = document.querySelectorAll('.main-header__link[role="button"]');
  accordionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); 
      
      const item = e.currentTarget.closest('.mobile-accordion__item');      
      const isCurrentlyActive = item.classList.contains('is-active');          
      
      if (isCurrentlyActive) {      
        item.classList.remove('is-active');
        e.currentTarget.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-active');
        e.currentTarget.setAttribute('aria-expanded', 'true');        
      }
    });
  });
})


