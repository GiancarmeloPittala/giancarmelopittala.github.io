<template>
  <div class="flex flex-col gap-2">
    <label v-if="labelText" class="capitalize" :for="id" v-text="labelText" />
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="{ ...baseAttributes, ...$attrs, }" />
    <small v-if="error.active" :class="errorClass[error.status]">{{ error.text }}</small>
  </div>
</template>


<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>

<script setup>
const props = defineProps({
  labelText: String,
  modelValue: {
    type: String,
    default: null,
    required: true
  }
})
const id = `input-${Math.random * 1000}-${props.labelText}` 
const error = reactive({
  active: false,
  status: 'success',
  text: 'lorem'
})
const errorClass = {
  success: 'text-primary'
}
const baseAttributes = reactive({
  id,
  class: "text-gray-50 border-b border-primary px-4 py-2",
  placeholder: 'Ma come se fah'
})
</script>