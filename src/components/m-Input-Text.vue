<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['change'])

const inputTextValue = ref('')

</script>

<template>
    <input
      type="text"
      role="input-text"
      v-model="inputTextValue"
      @input="emit('change')"
    >
</template>

<style scoped>
</style>
