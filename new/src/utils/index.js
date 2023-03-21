export const slideToBox = (e) => {
  const target = document.querySelector('[data-scroll-target="'+e+'"]')
  target && window.scrollBy({
    top: target.getBoundingClientRect().top,
    behavior: 'smooth'
  })
}

export default {
  slideToBox
}