// const header = document.querySelector('.header')
// const dropMobil = document.querySelector('.drop-mobil')
// const headerBurgerBtn = document.querySelector('.header_burger-btn')
// const navLinkDropMobil = document.querySelector('.nav_link--drop-mobil')
// headerBurgerBtn.onclick = () => {
//   header.classList.toggle('open')
// }
// navLinkDropMobil.onclick = () => {
//   dropMobil.classList.toggle('drop-mobil--active')  
//   navLinkDropMobil.classList.toggle('navLinkDropMobil--active')  
// }



// const sandvichItem = document.querySelectorAll('.sandvich-item')
// const sandvichBtn = document.querySelectorAll('.sandvich-btn')
// sandvichBtn.forEach(btn => {
//   btn.onclick = (e) => {
//     e.currentTarget.parentElement.classList.toggle('sandvich-item--active')
    
//   }
// })

const modalClose = document.querySelector('.modal__close')
const modalBtn = document.querySelector('.header_left-btn-2')
const modal = document.querySelector('.modal')
modalClose.onclick = () => {
  modal.classList.remove('modal--active')
}
modalBtn.onclick = () => {
  modal.classList.add('modal--active')
}
