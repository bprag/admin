<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@utils/utils.ts';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div data-slot="card-content" :class="cn('space-y-2 p-24 pt-0', props.class)">
    <slot />
  </div>
</template>
