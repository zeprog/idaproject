<template>
  <main class="main">
    <div class="main__container container">
      <div class="main__sidebar">
        <Sidebar />
      </div>
      <div class="main__product">
        <Cart  v-for="cart of carts" :key="cart.id" :cart="cart"/>
      </div>
    </div>
    
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Cart from '@/components/Cart.vue'
export default {
  components: {
    Sidebar,
    Cart
  },
  data: () => ({
    carts: []
  }),
  mounted() {
    this.$axios.get('https://frontend-test.idaproject.com/api/product')
      .then(cart => {
        this.carts = cart.data
      })
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