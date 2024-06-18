<template>
  <div :class="{ dark: isDark }">
    <div
      class="bg-stone-50 px-8 text-3xl text-neutral-950 dark:bg-neutral-900 dark:text-zinc-50"
    >
      <header class="bg-inherit text-inherit dark:bg-inherit dark:text-inherit">
        <NavBar />
      </header>
      <main
        class="h-screen bg-inherit pt-24 text-inherit dark:bg-inherit dark:text-inherit sm:pt-20"
      >
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { isDark } from "./main";
</script>
