<script lang="ts" setup>
import type { TabsContentProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { cn } from '@utils/utils.ts';
import { reactiveOmit } from '@vueuse/core';
import { TabsContent } from 'reka-ui';

const props = defineProps<
  TabsContentProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
  <TabsContent
    :class="cn('ring-offset-background mt-8', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
