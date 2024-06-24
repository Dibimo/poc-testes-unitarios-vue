<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(['change', 'update:modelValue'])
const model = defineModel<string>()

const onInput = () => {
  emit('change')
}

onMounted(() => {
  console.log(model.value)
})



</script>

<template>
    <input
      type="text"
      role="input-text"
      v-model="model"
      @change="onInput"
    >
</template>

<style scoped>
</style>
