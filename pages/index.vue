<template>
  <main class="main">
    <div class="main__container container">
      <div class="main__sidebar">
        <Sidebar 
          :listItem="listItem"
        />
      </div>
      <div class="main__product">
        <SortSelected @sortItem="sortItem" 
          :isActive="isActive" 
        />
        <Cart
          v-for="cart of carts" 
          :key="cart.id" 
          :cart="cart"
        />
      </div>
    </div>
    
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Cart from '@/components/Cart.vue'
import SortSelected from '@/components/SortSelected.vue'
export default {
  components: {
    Sidebar,
    Cart,
    SortSelected
  },
  data: () => ({
    carts: [],
    listItem: [],
    isActive: false
  }),
  mounted() {
    this.$axios.get('https://frontend-test.idaproject.com/api/product')
      .then(cart => {
        this.carts = cart.data
        console.log(this.carts);
      })
  },
  methods: {
    sortItem(e) {
      if(e === 'price') {
        this.carts = this.carts.sort((a, b) => b.price - a.price)
      } else if(e === 'popular') {
        this.carts = this.carts.sort((a, b) => b.rating - a.rating)
      }
    },
    
  }
}
</script>

<style lang="scss" scoped>
  .main {
    &__container {
      display: flex;
    }

    &__product {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>