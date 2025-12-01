<script lang="ts" setup>
import type { DialogCloseProps } from 'reka-ui';
import { DialogClose } from 'reka-ui';

const props = defineProps<DialogCloseProps>();
</script>

<template>
  <DialogClose
    class="ring-offset-background data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-16 top-16 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none"
    data-slot="dialog-close"
    v-bind="props"
  >
    <slot />
  </DialogClose>
</template>
