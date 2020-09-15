import { canUseDOM } from 'vtex.render-runtime'

import push from './modules/push'
import {
  getAddToCartData,
  getProductData,
  getProductImpressionData,
} from './modules/product'
import { getHitData } from './modules/hit'

export default function () {
  return null
} // no-op for extension point

export function handleEvents(e: PixelMessage) {
  let data

  switch (e.data.eventName) {
    case 'vtex:productView': {
      data = {
        event: 'legacy:productDetail',
        ecommerce: {
          details: {
            products: [{ ...getProductData(e.data) }],
          },
        },
      }
      break
    }

    case 'vtex:addToCart': {
      data = {
        event: 'legacy:addToCart',
        ecommerce: {
          add: {
            ...getAddToCartData(e.data),
          },
        },
      }

      break
    }

    case 'vtex:productImpression': {
      data = {
        event: 'legacy:productImpression',
        ecommerce: {
          ...getProductImpressionData(e.data),
        },
      }

      break
    }

    default:
      return
  }

  push({
    ...getHitData(),
    ...data,
  })
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
