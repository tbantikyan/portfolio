<template>
  <div
    class="flex h-fit flex-row rounded-md bg-white drop-shadow-xl dark:bg-neutral-800 md:w-full"
  >
    <!-- Experience details  -->
    <div class="mx-4 flex flex-col sm:mx-6">
      <h2
        class="mt-4 text-lg font-bold group-hover:text-indigo-500 sm:mt-3 md:text-xl"
      >
        {{ experienceData.title }}
      </h2>
      <div class="mt-2 flex flex-row items-center gap-1.5 sm:mt-1">
        <inline-svg
          class="block h-5 w-5 dark:hidden"
          :src="experienceData.companyLogo"
        />
        <inline-svg
          class="hidden h-5 w-5 dark:block"
          :src="experienceData.companyLogoDark"
        />
        <p class="text-sm md:text-base">
          {{ experienceData.company }}
        </p>
      </div>
      <p class="mt-2 text-sm italic sm:mt-1 md:text-base">
        {{ experienceData.date }}
      </p>
      <p
        v-for="(bulletPoint, index) in experienceData.description"
        :key="index"
        class="ml-4 mt-2 list-item list-outside text-sm sm:mt-1 md:text-base"
      >
        {{ bulletPoint }}
      </p>
      <!-- Experience skills -->
      <div class="my-4 flex flex-row flex-wrap gap-1 sm:mb-4 sm:mt-3 md:mt-6">
        <Skill
          v-for="(skillData, index) in experienceData.skills"
          :key="index"
          :skillData="skillData"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from "vue";
import Skill, { type SkillData } from "./Skill.vue";

export type ExperienceData = {
  title: string;
  company: string;
  companyLogo: string;
  companyLogoDark: string;
  date: string;
  description: string[];
  skills: SkillData[];
};
const props = defineProps({
  experienceData: { type: Object as PropType<ExperienceData>, required: true },
});
</script>
