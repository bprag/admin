<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@utils/utils.ts';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    data-slot="card-header"
    :class="cn('flex flex-col gap-y-6 p-24', props.class)"
  >
    <slot />
  </div>
</template>
