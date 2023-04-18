import { EffectFade, Navigation, Pagination } from 'swiper'

export const slideToBox = (e) => {
  const target = document.querySelector('[data-scroll-target="'+e+'"]')
  target && window.scrollBy({
    top: target.getBoundingClientRect().top,
    behavior: 'smooth'
  })
}

export const mainSwiperConfig = {
  modules: [ Navigation ],
  navigation: {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  }
}

export const testSwiperConfig = {
  modules: [ EffectFade, Navigation, Pagination ],
  navigation: {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  },
  pagination: {
    el: '.pagination',
    clickable: true
  }
}

export const lectionSwiperConfig = {
  modules: [ Navigation ],
  navigation: {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  }
}

export const projectStatuses = {
  'Открыт': 'blue',
  'В работе': 'orange',
  'Принят': 'green'
}

export const stepStatuses = {
  'Открыт': 'blue',
  'На проверке': 'orange',
  'Принят': 'green',
  'Нужны доработки': 'red'
}