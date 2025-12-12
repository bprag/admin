<script lang="ts" setup>
import type { TabsTriggerProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { TabsTrigger, useForwardProps } from 'reka-ui';
import { cn } from '@/utils/utils.ts';

const props = defineProps<
  TabsTriggerProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TabsTrigger
    :class="
      cn(
        'ring-offset-background data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-background/5 inline-flex items-center justify-center whitespace-nowrap rounded-md px-12 py-4 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <span class="truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
