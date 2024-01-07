<template>
<div class="checkbox">
  <label >
    <span>
      <input
          type="checkbox"
          :disabled="disabled"
          :checked="currentValue"
          @change="onChange"
      >
    </span>
    <slot></slot>
  </label>
</div>
</template>
<script>
export default {
  name: "vCheckbox",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    trueValue: {
      type:[Boolean, String, Number],
      default: true
    },
    falseValue: {
      type:[Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    onChange(event) {
      console.log(event)
      if (this.disabled) {
        return false
      }
      const checked = event.target.checked
      this.currentValue = checked
      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input',  value)
      this.$emit('on-change', value)
    }
  }
}
</script>



<style scoped>

</style>