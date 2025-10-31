<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@utils/utils.ts';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    :class="
      cn('bg-card text-card-foreground rounded-xl border shadow', props.class)
    "
    data-slot="card"
  >
    <slot />
  </div>
</template>
