export const state = () => ({
  basketCount: 0,
  basketItem: []
})

export const mutations = {
  cacheProduct(state) {
    if(localStorage.getItem('saveBasketCount', state.basketCount) !== null && localStorage.getItem('saveBasketItem', JSON.stringify(state.basketItem)) !== null) {
      state.basketCount = JSON.parse(localStorage.getItem('saveBasketCount'))
      state.basketItem = JSON.parse(localStorage.getItem('saveBasketItem')) 
    }
  },

  basketItem(state, basketItems) {
    state.basketCount++
    state.basketItem.push(basketItems)
    localStorage.setItem('saveBasketCount', state.basketCount)
    localStorage.setItem('saveBasketItem', JSON.stringify(state.basketItem))
  },
  deleteBasketItem(state, itemId) {
    state.basketCount--
    state.basketItem = state.basketItem.filter(e => itemId !== e.id)
    state.basketCount = state.basketItem.length
    localStorage.setItem('saveBasketCount', state.basketCount)
    localStorage.setItem('saveBasketItem', JSON.stringify(state.basketItem))
  },
  basketClean(state) {
    state.basketCount = 0
    state.basketItem = []
    localStorage.setItem('saveBasketCount', state.basketCount)
    localStorage.setItem('saveBasketItem', JSON.stringify(state.basketItem))
  }
}
