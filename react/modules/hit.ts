export function getHitData() {
  return {
    transactionDate: new Date().getTime(),
    pageType: document
      .querySelector('.render-container')
      ?.getAttribute('class')
      ?.split('render-route-store-')[1]
      ?.split(' ')[0],
  }
}
