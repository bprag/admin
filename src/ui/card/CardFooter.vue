<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@utils/utils.ts';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    :class="cn('flex items-center p-24 pt-0', props.class)"
    data-slot="card-footer"
  >
    <slot />
  </div>
</template>
