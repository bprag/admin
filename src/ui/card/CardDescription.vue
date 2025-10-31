<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@utils/utils.ts';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <p
    :class="cn('text-muted-foreground text-sm', props.class)"
    data-slot="card-description"
  >
    <slot />
  </p>
</template>
