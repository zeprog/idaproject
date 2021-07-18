<template>
  <div class="layout">
    <Header @openBasket="openBasket" :showBasket="showBasket"/>
    <Nuxt />
    <Basket v-if="showBasket" :showBasket="showBasket" @closeBasket="closeBasket"  />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Basket from '@/components/Basket.vue'
export default {
  components: {
    Header,
    Basket
  },
  data: () => ({
    showBasket: false
  }),
  methods: {
    closeBasket() {
      this.showBasket = false
      document.body.classList.remove('lock')
    },
    openBasket() {
      this.showBasket = true
      document.body.classList.add('lock')
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'PT Sans', sans-serif;
}

body, p, h1, h2, h3, h4, h5, h6, ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.container {
  margin: 0 5%;
}

.lock {
  overflow: hidden;
}
</style>