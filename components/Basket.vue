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
          <form @submit.prevent="submitForm">
            <FormInput 
              :placeholder="'Ваше имя'"
              :required="required = true"
              v-model="userName"
              value=""
            />
            <FormInput 
              :placeholder="'Телефон'"
              v-model="phone"
              type="tel"
              :required="required = true"
              value=""
            />
            <FormInput 
              :placeholder="'Адрес'"
              v-model="adress"
              :required="required = true"
              value=""
            />
            <FormButton :text="text[0]" :class="{disable: userName == '' || phone == '' || adress == ''}" />
            <div v-if="userName == '' || phone == '' || adress == ''">
              <p class="form__disabled">Все поля обязательные.<br>После удачной отправки формы содержимое корзины очищается</p>
            </div>
          </form>
        </div>
      </div>
      <div class="basket__success" v-else-if="success">
        <div class="basket__success-img">
          <img src="@/assets/img/ok.png" alt="">
        </div>
        <h3 class="basket__success-title">Заявка успешно отправлена</h3>
        <p class="basket__success-text">Вскоре наш менеджер свяжется с Вами</p>
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
  data() {
    return {
      placeholders: [
        {title: 'Ваше имя', type: 'text', required: true, model: 'name'}, 
        {title: 'Телефон', type: 'tel', required: true, model: 'phone'}, 
        {title: 'Адрес', type: 'text', required: true, model: 'adress'}
      ],
      text: ['Отправить', 'Перейти к выбору'],
      userName: '',
      phone: '',
      adress: '',
      success: false,
      disabled: false
    }
  }, 
  methods: {
    closeBasket () {
      this.$emit('closeBasket')
    },
    submitForm() {
      this.userName = ''
      this.phone = '' 
      this.adress = ''
      this.$store.commit('basketClean')
      this.success = true
    }
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

  &__success {
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-title {
      font-size: 24px;
      color: #000;
      margin: 24px 0 9px;
    }

    &-text {
      font-size: 16px;
      color: #59606D;
    }
  }
}

.form__disabled {
  color: #000;
  font-size: 16px;
  margin-top: 27px;
  position: relative;
  padding-left: 25px;


  &::before {
    content: '!!';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 700;
    font-size: 32px;
    color: #EB5757;
  }
}

.title {
  font-size: 18px;
  line-height: 23px;
  color: #59606D;
}

.disable {
  background: #59606D;
}
</style>