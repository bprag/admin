<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { DialogContent, DialogPortal, useForwardPropsEmits } from 'reka-ui';
import { cn } from '@/utils/utils.ts';
import DialogClose from './DialogClose.vue';
import DialogOverlay from './DialogOverlay.vue';

const props = defineProps<
  DialogContentProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = reactiveOmit(props, 'class');

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent
      :class="
        cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 gap-16 rounded-lg border p-24 shadow-lg duration-200',
          props.class,
        )
      "
      data-slot="dialog-content"
      v-bind="forwarded"
    >
      <slot />

      <DialogClose> x </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
