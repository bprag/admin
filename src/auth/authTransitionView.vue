<script lang="ts" setup>
defineOptions({
  name: 'AuthTransitionView',
});
</script>

<template>
  <div
    class="from-background/10 via-primary/30 to-background/10 absolute inset-0 size-full bg-gradient-to-tl from-[30%] via-[48%] to-[64%] blur-[100px]"
  />
  <div
    class="shadow-primary/5 bg-background shadow-out relative mx-auto flex w-full flex-col items-center justify-center rounded-lg px-6 py-10 transition-[width] md:w-2/3 lg:w-1/2 xl:w-1/3"
  >
    <slot></slot>
    <RouterView v-slot="{ Component, route }">
      <Transition appear mode="out-in" name="slide-right">
        <KeepAlive :include="['login']">
          <component :is="Component" :key="route.fullPath" />
        </KeepAlive>
      </Transition>
    </RouterView>
    <div
      class="text-muted-foreground absolute bottom-3 flex text-center text-xs"
    >
      <slot name="copyright" />
    </div>
  </div>
</template>
