<template>
  <a
    :href="projectData.link" target="_blank" class="group hover:bg-neutral-100 hover:dark:bg-zinc-800 transition ease-linear hover:cursor-pointer flex h-fit flex-row rounded-md bg-white drop-shadow-xl dark:bg-neutral-800 md:w-11/12 lg:w-9/12 xl:w-7/12"
  >
    <!-- Project icon (3x2 dimension) -->
    <div class="hidden sm:block m-2 flex-shrink-0 relative self-center">
      <img class="w-72 h-48 rounded-lg drop-shadow-lg object-cover" :src="projectData.imgSrc"/>
      <div class="rounded-lg flex justify-center items-center absolute top-0 h-full w-full bg-black opacity-0 group-hover:bg-opacity-50 transition ease-linear duration-200 group-hover:opacity-100">
        <inline-svg :src="linkIcon" class="h-10 text-neutral-200"/>
      </div>
    </div>
    <!-- Project details  -->
    <div class="mx-4 md:ml-2 md:mr-3 flex flex-col">
      <h2 class="group-hover:text-indigo-500 transition ease-linear mt-4 sm:mt-2 text-lg md:text-xl font-bold">{{ projectData.title }}</h2>
      <p class="text-sm md:text-base mt-2 sm:mt-1">{{ projectData.description }}</p>
      <!-- Project skills -->
      <div class="my-4 sm:my-2 sm:mt-3 flex flex-row gap-1 flex-wrap">
        <Skill v-for="(skillData, index ) in projectData.skills" :key="index" :skillData="skillData"/>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { defineProps , type PropType } from 'vue';
import Skill, { type SkillData } from "./Skill.vue";

import linkIcon from "../assets/icons/link.svg";

export type ProjectData = {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  skills: SkillData[];
};
const props = defineProps({"projectData": {type: Object as PropType<ProjectData>, required: true}});

</script>
