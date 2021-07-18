<template>
  <div class="basket">
    <div class="basket__wrapper" :class="{active: showBasket = true}">
      <div class="basket__header">
        <h2 class="basket__header-title">Корзина</h2>
        <img src="@/assets/img/icons/close.svg" alt="" @click="closeBasket">
      </div>
      <div v-if="$store.state.basketItem.length">
        <div class="basket__body">
          <p class="basket__body-description title" >
            Товары в корзине
          </p>
          <BasketItem v-for="item of $store.state.basketItem" :key="item.id" :item="item"/>
        </div>
        <div class="basket__form">
          <p class="basket__form-title title">Оформить заказ</p>
          <form >
            <FormInput 
              v-for="(placeholder, index) of placeholders" 
              :key="index" 
              :type="placeholder.type" 
              :mask="['+7 (###) ###-##-##']"
              :masked="masked = true"
              :placeholder="placeholder.title"
              :required="placeholder.required"
            />
            <FormButton :text="text[0]" />
          </form>
        </div>
      </div>
      <div v-else>
        <p class="basket__empty-text">Пока что вы ничего не добавили в корзину.</p>
        <FormButton :text="text[1]" type="button" @click.native.prevent="closeBasket" />
      </div>
    </div>
  </div>
</template>

<script>
import BasketItem from '@/components/BasketItem.vue'
import FormInput from '@/components/form/FormInput.vue'
import FormButton from '@/components/form/FormButton.vue'
export default {
  components: {
    BasketItem,
    FormInput,
    FormButton
  },
  props: ['showBasket'],
  data: () => ({
    placeholders: [
      {title: 'Ваше имя', type: 'text', required: true}, 
      {title: 'Телефон', type: 'mask', required: true}, 
      {title: 'Адрес', type: 'text', required: true}
    ],
    text: ['Отправить', 'Перейти к выбору']
  }), 
  methods: {
    closeBasket () {
      this.$emit('closeBasket')
    },
    // countDecrement() {
    //   console.log(this.$store.state.basketCount, this.$store.state.basketItem)
    // }
  }
}
</script>

<style lang="scss" scoped>
.basket {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, .8);
  z-index: 1000;

  &__wrapper {
    position: fixed;
    top: 0;
    right: -460px;
    width: 460px;
    height: 100%;
    background: #fff;
    border-radius: 8px 0 0 8px;
    padding: 52px 48px;
    overflow-y: auto;
    -webkit-transition: right .3s ease;
        -o-transition: right .3s ease;
        transition: right .3s ease;
    &.active {
      right: 0;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-title {
      font-size: 32px;
    }

    img {
      cursor: pointer;
    }
  }

  &__body {
    &-description {
      margin-top: 24px;
    }
  }

  &__form {
    margin-top: 32px;
    &-title {
      margin-bottom: 16px;
    }
  }

  &__empty-text {
    color: #000;
    font-size: 22px;
    margin: 33px 0 25px;
  }
}

.title {
  font-size: 18px;
  line-height: 23px;
  color: #59606D;
}
</style>