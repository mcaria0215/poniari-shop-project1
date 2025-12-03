document.addEventListener('DOMContentLoaded', ()=>{
  const filterElement = document.querySelector('.filter');
  const filterBackground = document.querySelector('.filter-wrapper-bg');
  const closeButton = document.querySelector('.filter__close-button');
  const openButton = document.querySelector('.sorting-options__filter-btn');

  if (closeButton && filterElement) {
    closeButton.addEventListener('click', ()=>{
      filterElement.classList.remove('is-active');
    });
    openButton.addEventListener('click', ()=>{
      filterElement.classList.add('is-active');
    })
    filterBackground.addEventListener('click', ()=>{
      filterElement.classList.remove('is-active');
    })
  }
});