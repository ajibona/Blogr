const mobileMenuElement = document.querySelector('.js-menu');
const mobileNavigationElement = document.querySelector('.js-mobile-navigation');


console.log('connect')
mobileMenuElement.addEventListener('click', ()=>{
  mobileNavigationElement.classList.toggle('active-mobile-menu-list')
})