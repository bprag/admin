<script lang="ts" setup>
import type { DialogTitleProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { DialogTitle, useForwardProps } from 'reka-ui';
import { cn } from '@/utils/utils.ts';

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DialogTitle
    :class="
      cn('text-lg font-semibold leading-none tracking-tight', props.class)
    "
    data-slot="dialog-title"
    v-bind="forwardedProps"
  >
    <slot />
  </DialogTitle>
</template>
