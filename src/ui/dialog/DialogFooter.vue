<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@/utils/utils.ts';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
        props.class,
      )
    "
    data-slot="dialog-footer"
  >
    <slot />
  </div>
</template>
