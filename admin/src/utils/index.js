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
  addEvent,
  removeEvent,
  dispatchEvent
}