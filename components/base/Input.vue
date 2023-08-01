<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" class="capitalize" :for="id" v-text="label" />
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup="valida" v-bind="{ ...baseAttributes, ...$attrs }" />
    <small v-if="help">{{ help }}</small>
    <small v-if="error.active" class="text-red-900 font-semibold">{{ error.text }}</small>
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
  label: String,
  help: String,
  validation: Array,
  modelValue: {
    type: [String, Number],
    default: null,
    required: true
  }
})
const id = `input-${Math.random * 1000}-${props.label}` 
const error = reactive({
  active: false,
  status: 'success',
  text: 'lorem'
})
const baseAttributes = reactive({
  id,
  class: "text-gray-900 border rounded-lg border-gray-900 dark:border-gray-50 px-4 py-2",
  placeholder: 'Ma come se fah'
})


function valida($event){
  const value = $event.target.value
  error.active = false;
  if ( Array.isArray( props.validation ))
  for( const validatore of props.validation ){
    if ( validatore[0](value) ){
      error.active = true;
      error.text = validatore[1]
    }
  }
}
</script>