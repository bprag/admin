<script lang="ts" setup>
import { ref } from 'vue';

const v = ref<unknown>([]);
</script>

<template>
  <div v-for="i in v" :key="i">
    {{ i }}
  </div>
</template>

<style scoped></style>
