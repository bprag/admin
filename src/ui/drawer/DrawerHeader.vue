<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@utils/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    data-slot="drawer-header"
    :class="
      cn('flex flex-col gap-6 p-16 text-center sm:text-left', props.class)
    "
  >
    <slot />
  </div>
</template>
