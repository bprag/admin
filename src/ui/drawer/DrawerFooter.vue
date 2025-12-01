<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@utils/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    data-slot="drawer-footer"
    :class="cn('mt-auto flex flex-col gap-8 p-16', props.class)"
  >
    <slot />
  </div>
</template>
