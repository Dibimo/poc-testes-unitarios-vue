<script setup lang="ts">

const emit = defineEmits(['change'])
const model = defineModel<string>({
  set: (value) => {
    emit('change', value)
    return value
  },

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
