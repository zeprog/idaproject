<template>
  <button
  class="form__button"
  :type="type"
  :disabled="disabled">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    type: {
      type: String,
      default: 'submit'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.form__button {
  background: #1F1F1F;
  border-radius: 8px;
  color: #fff;
  width: 100%;
  padding: 14px 0;
  text-align: center;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>