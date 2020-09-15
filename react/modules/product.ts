export function getProductData(data: ProductViewData) {
  const {
    brand,
    productId,
    productName,
    selectedSku,
    categories,
    categoryTree,
  } = data.product

  const commertialOffer = selectedSku.sellers?.[0].commertialOffer

  return {
    id: productId,
    name: productName,
    variant: selectedSku.name,
    brand,
    category: categories[0],
    categoryIds: getCategoryIds(categoryTree),
    imageUrl: selectedSku.imageUrl,
    available: getAvailability(commertialOffer),
    priceFrom: commertialOffer.ListPrice,
    priceTo: commertialOffer.Price,
  }
}

export function getAddToCartData(data: AddToCartData) {
  return {
    products: data.items.map((sku: CartItem) => ({
      id: sku.productId,
      name: sku.name,
      brand: sku.brand,
      category: sku.category,
      variant: sku.variant,
      quantity: sku.quantity,
      sku: sku.skuId,
      imageURL: sku.imageUrl,
      price: sku.price,
    })),
  }
}

export function getProductImpressionData(data: ProductImpressionData) {
  return {
    currencyCode: data.currency,
    impressions: data.impressions.map(({ product, position }) => ({
      brand: product.brand,
      category: product.categories[0],
      id: product.productId,
      list: data.list,
      name: product.productName,
      position,
      variant: product.sku.name,
      imageUrl: product.sku.image.imageUrl,
      available: getAvailability(product.sku.seller.commertialOffer),
      priceFrom: product.sku.seller.commertialOffer.ListPrice,
      priceTo: product.sku.seller.commertialOffer.Price,
    })),
  }
}

function getAvailability(commertialOffer: CommertialOffer) {
  return commertialOffer.AvailableQuantity > 0
}

function getCategoryIds(categoryTree: Array<{ id: string; name: string }>) {
  return categoryTree.map((value) => value.id)
}
