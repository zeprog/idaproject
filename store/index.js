export const state = () => ({
  basketCount: 0,
  basketItem: []
})

export const mutations = {
  basketItem(state, basketItem) {
    state.basketCount++
    state.basketItem.push(basketItem)
  },
  deleteBasketItem(state, basketItem) {
    state.basketCount--
    state.basketItem.pop(basketItem)
  }
}
