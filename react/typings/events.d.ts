// https://github.com/vtex-apps/google-tag-manager/blob/v2.4.1/react/typings/events.d.ts

interface PixelMessage extends MessageEvent {
  data:
    | ProductViewData
    | ProductClickData
    | OrderPlacedData
    | OrderPlacedTrackedData
    | PageViewData
    | ProductImpressionData
    | AddToCartData
    | RemoveToCartData
    | CartChangedData
    | HomePageInfo
    | ProductPageInfoData
    | SearchPageInfoData
    | UserData
    | CartIdData
}

interface EventData {
  event: string
  eventName: string
  currency: string
}

interface ProductViewData extends EventData {
  event: 'productView'
  eventName: 'vtex:productView'
  product: Product
}

interface Impression {
  product: ProductSummary
  position: number
}

interface Product {
  brand: string
  brandId: string
  categories: string[]
  categoryId: string
  categoryTree: Array<{ id: string; name: string }>
  detailUrl: string
  items: Item[]
  linkText: string
  productId: string
  productName: string
  productReference: string
  selectedSku: Item
}

interface Item {
  itemId: string
  name: string
  ean: string
  referenceId: { Key: string; Value: string }
  imageUrl: string
  sellers: Seller[]
}

interface ProductSummary {
  brand: string
  brandId: string
  categories: string[]
  items: ItemSummary[]
  linkText: string
  productId: string
  productName: string
  productReference: string
  sku: ItemSummary
}

interface ItemSummary {
  itemId: string
  ean: string
  name: string
  referenceId: { Key: string; Value: string }
  seller: Seller
  sellers: Seller[]
}

interface Seller {
  commertialOffer: CommertialOffer
  sellerId: string
}

interface CommertialOffer {
  Price: number
  ListPrice: number
  AvailableQuantity: number
}

interface AddToCartData extends EventData {
  event: 'addToCart'
  eventName: 'vtex:addToCart'
  items: CartItem[]
}

interface RemoveToCartData extends EventData {
  event: 'removeFromCart'
  eventName: 'vtex:removeFromCart'
  items: CartItem[]
}

interface CartItem {
  brand: string
  ean: string
  category: string
  detailUrl: string
  imageUrl: string
  name: string
  price: number
  productId: string
  productRefId: string
  quantity: number
  skuId: string
  variant: string
}
