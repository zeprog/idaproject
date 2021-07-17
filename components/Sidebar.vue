<template>
  <div class="sidebar">
    <h1 class="sidebar__title">Каталог</h1>
    <ul class="sidebar__list">
      <li class="sidebar__item" 
        v-for="item of list" 
        :key="item.id"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: []
  }),
  mounted() {
    this.$axios.get('https://frontend-test.idaproject.com/api/product-category')
      .then(item => {
        this.list = item.data
      })
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  margin: 32px 0 0;

    &__title {
    font-size: 32px;
    color: #1F1F1F;
    margin-bottom: 33px;
  }

  &__item {
    margin-bottom: 19px;
    color: #959DAD;
    cursor: pointer;
    &:last-child {
      margin: 0;
    }

    &:hover {
      color: #59606D;
      transition: all .3s;
    }

    &.active {
      color: #1F1F1F;
      text-decoration: underline;
    }
  }
}
</style>