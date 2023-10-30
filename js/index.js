//  Animation NabBar
document.addEventListener('DOMContentLoaded', function () {
  let prevScrollPos = window.pageYOffset
  const navbar = document.querySelector('nav')

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset

    if (prevScrollPos > currentScrollPos) {
      navbar.classList.remove('hidden')
    } else {
      navbar.classList.add('hidden')
    }

    prevScrollPos = currentScrollPos
  }
})

// function Get Year of footer
const currentDate = new Date().getFullYear()
const yearElement = (document.getElementById('year').innerHTML += currentDate)

// Fillter oF Button Portfolio
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', function () {
    // Get Attribute from button
    const items = document.querySelectorAll('.portfolio .row .img')
    const filter = this.getAttribute('data-filter')

    items.forEach((item) => {
      item.style.display = 'none'
    })

    if (filter === 'all') {
      items.forEach((item) => {
        item.style.display = 'block'
      })
    } else {
      items.forEach((item) => {
        if (item.getAttribute('data-category') === filter) {
          item.style.display = 'block'
        }
      })
    }

    // Remove "active" class from all buttons
    document.querySelectorAll('button').forEach((button) => {
      button.classList.remove('active')
    })
    // Add "active" class to the clicked button
    this.classList.add('active')
  })
})

// testimonials flipe
let currentTestimonialIndex = 0
const testimonials = document.querySelectorAll('.testimonial')

function showTestimonial(index) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove('active-testimonial')
  })

  testimonials[index].classList.add('active-testimonial')
}


function showPreviousTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
  showTestimonial(currentTestimonialIndex)
}

function showNextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length
  showTestimonial(currentTestimonialIndex)
}

// Show the first testimonial initially
showTestimonial(currentTestimonialIndex)

//handle clicked to open munu bars
document.querySelector('.bars').addEventListener('click', function () {
  document.querySelector('.menu').classList.toggle('show')
})

//
const txtFull = 'Professional Web Designer Designer Developer ' //the text goes here
const txtArr = txtFull.split('')

function getRandomTime() {
  return Math.random() * 0.1
}
function getEle(id) {
  return document.getElementById('label')
}
function ModifyTxt(el, txt) {
  return (el.innerHTML = txt)
}
function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime()
  setTimeout(
    () => {
      const el = getEle('text')
      let elTxt = el.innerHTML
      elTxt += txtArr[curChar]
      ModifyTxt(el, elTxt)
      //check if next iteration is out of range
      if (curChar + 1 == txtArr.length) {
        return deleteOut(txtArr, txtArr.length)
      }
      return writeOut(txtArr, curChar + 1)
    },

    randomTime * 1000
  )
}
function deleteOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime()
  setTimeout(
    () => {
      const el = getEle('text')
      let elTxt = el.innerHTML
      //remove
      const elTxtArr = elTxt.split('')
      const elTxtArrLen = elTxtArr.length
      console.log(elTxtArr.length - 1)
      const newElTxt = elTxtArr.splice(0, curChar - 1).join('')
      ModifyTxt(el, newElTxt)
      if (elTxtArrLen == 0) {
        return writeOut(txtArr, 0)
      }
      return deleteOut(txtArr, elTxtArrLen - 1)
    },

    randomTime * 1000
  )
  return
}
writeOut(txtArr)
