<template>
  <div
    class="flex h-fit w-fit gap-1 py-0.5 pl-1.5 pr-2 lg:gap-1.5 rounded-2xl bg-neutral-500 lg:py-1 lg:pl-2 lg:pr-3 dark:bg-zinc-700"
  >
    <img class="h-4 md:h-5" :src="icon" />
    <p class="text-xs md:text-sm text-zinc-100">{{ skillName }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["icon", "skillName"]);
</script>
