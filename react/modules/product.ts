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
    categories: categories[0],
    categoryIds: categoryTree.map((value) => value.id),
    imageUrl: selectedSku.imageUrl,
    available: getAvailability(commertialOffer),
    priceFrom: commertialOffer.ListPrice,
    priceTo: commertialOffer.Price,
  }
}

export function getAddToCartData(data: AddToCartData) {
  return {
    products: data.items.map((sku) => ({
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

function getAvailability(commertialOffer: CommertialOffer) {
  return commertialOffer.AvailableQuantity > 0
}
