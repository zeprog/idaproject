<template>
  <div class="sort">
    <p class="sort__title">Сортировать по:</p>
    <div class="sort__selected">
      <p class="sort__selected-text" ref="select" @click="sortActive = !sortActive">цене</p>
      <div class="sort__selected-icon" @click="sortActive = !sortActive">
        <svg width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
        </svg>
      </div>
    </div>
    <div class="sort__list" :class="{active: sortActive}">
      <p class="sort__list-item" @click="sortItem('price'); sortActive = !sortActive">по цене</p>
      <p class="sort__list-item" @click="sortItem('popular'); sortActive = !sortActive">по популярности</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean
    }
  },
  data () {
    return {
      sortActive: this.isActive
    }
  },
  methods: {
    sortItem(e) {
      this.$emit('sortItem', e)
      if(e === 'price') {
        this.$refs.select.textContent = 'цене'
      } else if(e === 'popular') {
        this.$refs.select.textContent = 'популярности'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sort {
  position: absolute;
  top: 108px;
  right: 88px;
  display: flex;

  &__title {
    font-size: 16px;
  }

  &__selected {
    display: flex;
    &-text {
      margin-left: 3px;
      color: #59606D;
      cursor: pointer;
    }
  }

  &__list {
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    position: absolute;
    top: 26px;
    width: 100%;
    padding: 12px 0;
    display: none;

    &-item {
      padding: 4px 12px;
      color: #959DAD;
      cursor: pointer;

      &:hover {
        color: #1F1F1F;
        background: #F8F8F8;
      }
    }

    &.active {
      display: block;
    }
  }
}
</style>