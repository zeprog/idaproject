<template>
  <header class="header">
    <div class="header__container container">
      <h3 class="header__logo">TestList</h3>
      <div class="header__basket-block">
        <img src="@/assets/img/icons/basket.svg" alt="" class="header__basket" @click="openBasket">
        <div class="header__basket-count">
          <p>{{this.$store.state.basketCount}}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
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
    &-block {
      position: relative;
    }

    &-count {
      position: absolute;
      top: -7px;
      right: -4px;
      font-weight: 700;
      font-size: 8px;
      color: #FFFFFF;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #959DAD;
      text-align: center;
      padding-top: 1px;
    }
  }
}
</style>