<script lang="ts" setup>
import { Icon } from '@components/icon';
import { ref } from 'vue';

const isLoading = ref(false);
const email = ref('');

async function onSubmit() {
  isLoading.value = true;
  // 模拟异步请求
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
}
</script>

<template>
  <div
    class="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <a
      class="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground absolute right-4 top-4 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 md:right-8 md:top-8"
      href="#"
    >
      登录
    </a>

    <div
      class="bg-muted border-border relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r"
    >
      <div class="absolute inset-0 bg-zinc-900" />

      <div class="relative z-20 flex items-center text-lg font-medium">
        <Icon class="icon-[lucide--command] mr-2 size-6" />
        <span>Acme Inc</span>
      </div>

      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            “这个库为我节省了无数的工作时间，并帮助我比以往更快地为我的客户提供出色的设计。”
          </p>
          <footer class="text-sm">Sofia Davis</footer>
        </blockquote>
      </div>
    </div>
    <div class="bg-background flex h-full items-center justify-center lg:p-8">
      <div
        class="mx-auto flex w-full flex-col justify-center space-y-6 px-4 sm:w-[350px]"
      >
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-foreground text-2xl font-semibold tracking-tight">
            创建帐户
          </h1>
          <p class="text-muted-foreground text-sm">
            在下面输入您的电子邮件以创建您的帐户
          </p>
        </div>

        <div class="grid gap-6">
          <form @submit.prevent="onSubmit">
            <div class="grid gap-4">
              <div class="grid gap-2">
                <label
                  class="sr-only text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  v-model="email"
                  :disabled="isLoading"
                  auto-capitalize="none"
                  auto-complete="email"
                  auto-correct="off"
                  class="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
              <button
                :disabled="isLoading"
                class="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                <Icon
                  v-if="isLoading"
                  class="icon-[lucide--loader-2] mr-2 size-4 animate-spin"
                />
                <span>Sign In with Email</span>
              </button>
            </div>
          </form>

          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="border-border w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-background text-muted-foreground px-2">
                或继续使用
              </span>
            </div>
          </div>

          <button
            :disabled="isLoading"
            class="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <Icon
              v-if="isLoading"
              class="mr-2 h-4 w-4 animate-spin"
              icon="lucide:loader-2"
            />
            <Icon v-else class="mr-2 h-4 w-4" icon="radix-icons:github-logo" />
            GitHub
          </button>
        </div>

        <p class="text-muted-foreground px-8 text-center text-sm">
          点击继续，即表示您同意我们的
          <a class="hover:text-primary underline underline-offset-4" href="#">
            服务条款
          </a>
          和
          <a class="hover:text-primary underline underline-offset-4" href="#">
            隐私政策
          </a>
          。
        </p>
      </div>
    </div>
  </div>
</template>
