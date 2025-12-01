<script lang="ts" setup>
import type { IconProps } from '@components/icon';
import { cn } from '@utils/utils.ts';
import { computed } from 'vue';

const props = defineProps<IconProps>();

let defaultClass = ``;

if (props.mode === 'url') {
  defaultClass = 'inline-block size-[1em] bg-contain bg-center bg-no-repeat';
}

if (props.hover) {
  defaultClass += ' hover:scale-110 transition-transform';
}

const src = computed(() =>
  props.mode === 'url' && props.url
    ? `backgroundImage: url('${props.url}')`
    : null,
);
</script>

<template>
  <i :class="cn(defaultClass, props.class)" :style="src" />
</template>

<style scoped></style>
