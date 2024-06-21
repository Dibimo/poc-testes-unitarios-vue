<script lang="ts" setup>
import { ref } from 'vue'
const increment = ref(0)
</script>

<template>
  <div role="button" @click="increment++">
    teste {{ increment }}
  </div>
</template>

<style scoped>
</style>

