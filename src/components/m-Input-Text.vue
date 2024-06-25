<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';

const emit = defineEmits(['change'])
const model = defineModel<string>({
  set: (value) => {
    console.log('teste de ediçao de valor', value)
    emit('change', value)
    return value
  },

})

onMounted(() => {
  console.log(model.value)
})

</script>

<template>
  dentro do input {{ model }}
    <input
      type="text"
      role="input-text"
      v-model="model"
    >
</template>

<style scoped>
</style>
