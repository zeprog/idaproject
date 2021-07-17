<template>
  <div>
    <TheMask
      v-if="type === 'mask'"
      :id="id"
      ref="placeholder"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :mask="mask"
      :masked="masked"
      class="form__input"
    />
    <input 
      v-else
      :type="type"
      :id="id"
      :required="required"
      :placeholder="placeholder"
      class="form__input"
    />
  </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'
export default {
  components: {
    TheMask
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Array,
      default: null
    },
    masked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.form__input {
  background: #F8F8F8;
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  border: none;
  outline: none;
  color: #1F1F1F;
  margin-bottom: 16px;

  &::placeholder {
    color: #959DAD;
  }
}
</style>