<template>
  <div>
    <input
      v-if="type === 'tel'"
      id="tel"
      ref="placeholder"
      :type="type"
      :placeholder="placeholder"
      pattern="8-\[0-9]{3}\-[0-9]{3}-[0-9]{2}-[0-9]{2}"
      :disabled="disabled"
      :required="required"
      :value="value"
      v-imask="maskTel"
      @accept="onAccept"
      @focus="showMask; $emit('focus')"
      @blur="hideMask; $emit('blur')"
      @input="$emit('input', $event.target.value)"
      class="form__input"
    />
    <input 
      v-else
      :type="type"
      :id="id"
      :required="required"
      :placeholder="placeholder"
      :value="value"
      @focus="showMask; $emit('focus')"
      @blur="hideMask; $emit('blur')"
      @input="$emit('input', $event.target.value)"
      class="form__input"
    />
  </div>
</template>

<script>
import { IMaskDirective } from "vue-imask";
export default {
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
      type: Object,
      default: () => {}
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      valueTel: "",
      maskTel: {
        mask: "+{7} 000 000-00-00",
        lazy: true
      }
    }
  },
  directives: {
    imask: IMaskDirective
  },
  methods: {
    showMask(e) {
      if (e.target.id === "tel") {
        this.maskTel.lazy = false;
      }
    },
    hideMask(e) {
      if (this.valueTel.length < 11) {
        this.maskTel.lazy = true;
        this.$nextTick(() => (this.valueTel = ""));
      }
    },
    onAccept(e) {
      const maskRef = e.detail;

      if (maskRef.el.input.id === "tel") {
        this.valueTel = maskRef.unmaskedValue;
      }
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