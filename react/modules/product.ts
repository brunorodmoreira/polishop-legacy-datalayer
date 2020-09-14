export function getProductData(data: ProductViewData) {
  const {
    brand,
    productId,
    productName,
    selectedSku,
    categories,
    categoryTree,
  } = data.product

  return {
    id: productId,
    name: productName,
    variant: selectedSku.name,
    brand,
    categories,
    categoryIds: categoryTree.map((value) => value.id),
    imageUrl: selectedSku.imageUrl,
    available: selectedSku.sellers?.[0].commertialOffer.AvailableQuantity > 0,
    priceFrom: selectedSku.sellers?.[0].commertialOffer.ListPrice,
    priceTo: selectedSku.sellers?.[0].commertialOffer.Price,
  }
}
