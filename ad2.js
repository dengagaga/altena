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
if (modal) {
  modalClose.onclick = () => {
    modal.classList.remove('modal--active')
  }
  modalBtn.onclick = () => {
    modal.classList.add('modal--active')
  }
}


const check = document.getElementById('check')
const formBtn = document.querySelector('.form_btn')
const formInps = document.querySelectorAll('.form_inp')
const formCheckLabel = document.querySelector('.form_check-label')

formBtn.onclick = (e) => {
  if (check.checked) {
    formCheckLabel.classList.remove('form_check-label--error')
  } else {
    e.preventDefault()
    formCheckLabel.classList.add('form_check-label--error')
  }
  formInps.forEach(inp => {
      if (inp.value == '') {
        e.preventDefault()
        inp.classList.add('form_inp--error')
      } else {
        inp.classList.remove('form_inp--error')
      }
  })
}


const modalGlavBtn = document.querySelector('.modal__btn') 
const modalGlavInputs = document.querySelectorAll('.modal__input') 

modalGlavBtn.onclick = (e) => {
  modalGlavInputs.forEach(inp => {
    if (inp.value == '') {
      e.preventDefault()
      inp.classList.add('modal__input--error')
    } else {
      inp.classList.remove('modal__input--error')
    }
  })
 
}