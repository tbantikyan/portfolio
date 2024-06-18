<template>
  <div
    class="flex h-fit w-fit gap-1.5 rounded-2xl border border-zinc-950 bg-neutral-800 px-2 py-1"
  >
    <img class="h-5" :src="icon" />
    <p class="text-sm text-zinc-100">{{ skillName }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["icon", "skillName"]);
</script>
