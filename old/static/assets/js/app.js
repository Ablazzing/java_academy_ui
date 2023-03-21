window.onload = () => {
  // App height
  const setAppHeight = () => {
    document.documentElement.style.setProperty('--app-width', window.innerWidth + 'px')
    document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px')
  }
  setAppHeight()
  window.addEventListener('resize', () => setAppHeight())

  // Mobile menu button
  const mobileMenuBtn = document.querySelector('[data-mobile-menu-triger]')
  const mobileMenuBox = document.querySelector('[data-mobile-menu-target]')
  mobileMenuBtn && mobileMenuBox && mobileMenuBtn.addEventListener('click', (event) => {
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode
    document.body.classList.toggle('overflow')
    target.classList.toggle('active')
    mobileMenuBox.classList.toggle('open')
  })
  
  // Menu scroll buttons
  const scrollLinks = Array.from(document.querySelectorAll('[data-scroll-btn]'))
  scrollLinks.map(el => {
    el.addEventListener('click', event => {
      let target = event.target.getAttribute('data-scroll-btn')
      target && ( target = document.querySelector('[data-scroll-target="'+target+'"]') )
      if(target) {
        document.body.classList.remove('overflow')
        if(mobileMenuBtn && mobileMenuBox) {
          mobileMenuBtn.classList.remove('active')
          mobileMenuBox.classList.remove('open')
        }
        let offset = Number(target.getAttribute('data-scroll-offset'))
        isNaN(offset) && ( offset = 0 )
        window.scrollBy({
          top: target.getBoundingClientRect().top - offset,
          behavior: 'smooth'
        })
      }
    })
  })

  // Reviews swiper
  const swiperBoxes = Array.from(document.querySelectorAll('[data-swiper]'))
  const swiperInstances = []
  swiperBoxes.map(el => {
    const key = el.getAttribute('data-swiper')
    let config = null
    switch(key) {
      case 'reviews':
        config = {
          loop: true,
          effect: 'fade',
          navigation: {
            nextEl: '.swiper-reviews-next',
            prevEl: '.swiper-reviews-prev',
          },
          pagination: {
            el: '.swiper-reviews-pagination',
            clickable: true
          }
        }
        break
    }
    config && swiperInstances.push({
      ... new Swiper(el, config), 
      swiperInstance: key
    })
  })
}