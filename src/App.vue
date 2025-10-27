<script lang="ts" setup>
import { ref } from 'vue';

const v = ref<number[]>([]);
v.value.push(1);
</script>

<template>
  <div v-for="i in v" :key="i" class="flex h-screen w-screen bg-amber-200">
    {{ i }}
  </div>
</template>
