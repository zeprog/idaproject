<template>
  <header class="header">
    <div class="header__container container">
      <h3 class="header__logo">TestList</h3>
      <img src="@/assets/img/icons/basket.svg" alt="" class="header__basket" @click="openBasket">
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    openBasket() {
      this.$emit('openBasket')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 66px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  display: flex;
  
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__logo {
    font-size: 22px;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    color: #59606D;
  }

  &__basket {
    cursor: pointer;
  }
}
</style>