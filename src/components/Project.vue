<template>
  <a
    :href="projectData.link"
    target="_blank"
    class="group flex h-fit flex-row rounded-md bg-white drop-shadow-xl transition ease-linear hover:cursor-pointer hover:bg-neutral-100 dark:bg-neutral-800 hover:dark:bg-zinc-800 md:w-11/12 lg:w-9/12 xl:w-7/12"
  >
    <!-- Project icon (3x2 dimension) -->
    <div class="relative m-2 hidden flex-shrink-0 self-center sm:block">
      <img
        class="h-48 w-72 rounded-lg object-cover drop-shadow-lg"
        :src="projectData.imgSrc"
      />
      <div
        class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black opacity-0 transition duration-200 ease-linear group-hover:bg-opacity-50 group-hover:opacity-100"
      >
        <inline-svg :src="linkIcon" class="h-10 text-neutral-200" />
      </div>
    </div>
    <!-- Project details  -->
    <div class="mx-4 flex flex-col md:ml-2 md:mr-3">
      <h2
        class="mt-4 text-lg font-bold transition ease-linear group-hover:text-indigo-500 sm:mt-2 md:text-xl"
      >
        {{ projectData.title }}
      </h2>
      <p class="mt-2 text-sm sm:mt-1 md:text-base">
        {{ projectData.description }}
      </p>
      <!-- Project skills -->
      <div class="my-4 flex flex-row flex-wrap gap-1 sm:my-2 sm:mt-3">
        <Skill
          v-for="(skillData, index) in projectData.skills"
          :key="index"
          :skillData="skillData"
        />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from "vue";
import Skill, { type SkillData } from "./Skill.vue";

import linkIcon from "../assets/icons/link.svg";

export type ProjectData = {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  skills: SkillData[];
};
const props = defineProps({
  projectData: { type: Object as PropType<ProjectData>, required: true },
});
</script>
