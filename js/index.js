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
    const filter = this.getAttribute('data-filter')
    const items = document.querySelectorAll('.portfolio .row .img')

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
