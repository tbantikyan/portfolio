<template>
  <main class="">
    Home
    <Skills :icon="goIcon" :skillName="'Go (Golang)'" />
    <Skills :icon="reactIcon" :skillName="'React'" />
    <Skills :icon="mongodbIcon" :skillName="'MongoDB'" />
    <Skills :icon="tailwindIcon" :skillName="'Tailwind CSS'" />
  </main>
</template>

<script setup lang="ts">
import Skills from "../components/Skills.vue";

import goIcon from "../assets/icons/go.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
</script>
