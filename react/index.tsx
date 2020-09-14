import { canUseDOM } from 'vtex.render-runtime'

import push from './modules/push'
import { getProductData } from './modules/product'

export default function () {
  return null
} // no-op for extension point

export function handleLegacyEvents(e: PixelMessage) {
  let data

  switch (e.data.eventName) {
    case 'vtex:productView': {
      data = { ...getProductData(e.data) }
      break
    }

    default:
      return
  }

  push({
    event: 'legacy:productDetail',
    transactionDate: new Date().getTime(),
    ecommerce: { details: { products: [{ ...data }] } },
  })
}

if (canUseDOM) {
  window.addEventListener('message', handleLegacyEvents)
}
