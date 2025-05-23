
const headerBurgerBtn = document.querySelector('.burger')
const body = document.querySelector('body')
const navLinkDropMobil = document.querySelector('.nav_links-mobil')
const closes = document.querySelector('.nav_links-mobil-close')
headerBurgerBtn.onclick = () => {
    navLinkDropMobil.classList.toggle('nav_links-mobil--active')
    body.style.overflow = 'hidden'
}
closes.onclick = () => {
    navLinkDropMobil.classList.toggle('nav_links-mobil--active')
     body.style.overflow = 'auto'
}




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

const modaRadioInp = document.querySelectorAll('.modal_radio_inp')
const hiddenInp = document.querySelector('.hidden_inp')
if (modaRadioInp) {
modaRadioInp.forEach(inp => {
  inp.onclick = () => {
    modaRadioInp.forEach(inps => {
      inps.checked = false
    })
    inp.checked = true
    if (inp.checked) {
      hiddenInp.value = inp.value
      console.log(hiddenInp.value);
      hiddenInp.textContent = inp.value
      
    }
  }
})
}
