<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@/utils/utils.ts';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    :class="cn('flex flex-col gap-y-6 text-center sm:text-left', props.class)"
    data-slot="dialog-header"
  >
    <slot />
  </div>
</template>
