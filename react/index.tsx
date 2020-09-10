import { canUseDOM } from 'vtex.render-runtime'

export function handleEvents() {}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
