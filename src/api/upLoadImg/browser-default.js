export function stopPropagation (ev) {
  if (ev.stopPropagation) ev.stopPropagation()
  ev.cancelBubble = true
}

export function preventDefault (ev) {
  if (ev.preventDefault) ev.preventDefault()
}

export function stopDefault (ev) {
  stopPropagation(ev)
  preventDefault(ev)
}
