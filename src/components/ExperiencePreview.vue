<template>
  <div
    class="flex h-fit flex-row rounded-md bg-white py-4 drop-shadow-xl dark:bg-neutral-800 md:w-full"
  >
    <div class="mx-4 flex flex-col sm:mx-6">
      <h2 class="text-base font-bold sm:text-lg md:text-xl">
        {{ previewData.title }}
      </h2>
      <div class="mt-2 flex flex-col gap-2 md:gap-4">
        <div
          v-for="(item, i) in previewData.items"
          :key="i"
          class="ml-4 mt-2 list-item list-outside text-sm sm:mt-1 md:text-base"
        >
          <p class="text-base lg:text-lg">
            {{ item.jobTitle }}
          </p>
          <div class="mt-2 flex flex-row items-center gap-1.5 sm:mt-1">
            <inline-svg class="block h-5 w-5 dark:hidden" :src="item.logo" />
            <inline-svg
              class="hidden h-5 w-5 dark:block"
              :src="item.logoDark"
            />
            <p class="text-sm md:text-base">
              {{ item.company }}
            </p>
          </div>
        </div>
      </div>
      <RouterLink
        class="mt-4 text-base text-neutral-800 underline dark:text-white md:text-lg"
        to="/experience"
        >View all experiences</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from "vue";
export type ExperiencePreviewItem = {
  company: string;
  jobTitle: string;
  logo: string;
  logoDark?: string;
};
export type ExperiencePreviewData = {
  title: string;
  items: ExperiencePreviewItem[];
};
const props = defineProps({
  previewData: {
    type: Object as PropType<ExperiencePreviewData>,
    required: true,
  },
});
</script>
