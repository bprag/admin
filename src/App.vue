<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function toRouter(path: string) {
  router.push(path);
}
</script>

<template>
  <div>
    <button @click="toRouter('pages1')">页面1</button>
    <button @click="toRouter('/pages2')">页面2</button>
    <button @click="toRouter('/pages3')">页面3</button>
    <button @click="toRouter('/pages4')">页面4</button>
    <button @click="toRouter('/')">首页</button>
  </div>
  <router-view />
</template>
