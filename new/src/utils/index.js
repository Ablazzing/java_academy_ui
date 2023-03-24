export const slideToBox = (e) => {
  const target = document.querySelector('[data-scroll-target="'+e+'"]')
  target && window.scrollBy({
    top: target.getBoundingClientRect().top,
    behavior: 'smooth'
  })
}

export const addEvent = (eventName, listener) => {
  document.addEventListener(eventName, listener)
}

export const removeEvent = (eventName, listener) => {
  document.removeEventListener(eventName, listener)
}

export const dispatchEvent = (eventName, data) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}

export default {
  slideToBox,
  addEvent,
  removeEvent,
  dispatchEvent
}