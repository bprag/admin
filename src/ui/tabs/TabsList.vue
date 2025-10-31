<script lang="ts" setup>
import type { TabsListProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { TabsList } from 'reka-ui';
import { cn } from '@/utils/utils.ts';

const props = defineProps<
  TabsListProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
  <TabsList
    :class="
      cn(
        'bg-muted text-muted-foreground grid w-full grid-cols-2 items-center justify-center rounded-md p-4',
        props.class,
      )
    "
    v-bind="delegatedProps"
  >
    <slot />
  </TabsList>
</template>
