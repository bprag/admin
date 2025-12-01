import type { HTMLAttributes } from 'vue';

export { default as Icon } from './Icon.vue';

export interface IconProps {
  class?: HTMLAttributes['class'];
  mode?: 'icon' | 'url';
  hover?: boolean;
  url?: string;
}
