<template>
  <main
    class="bg-inherit text-inherit dark:bg-inherit dark:text-inherit md:flex md:flex-col md:gap-16 md:px-4 lg:px-16 xl:px-44"
  >
    <!-- Header -->
    <div
      class="mt-4 flex flex-col bg-inherit text-inherit dark:bg-inherit dark:text-inherit md:mt-16"
    >
      <h1
        class="mt-1 place-content-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        I'm
        <span
          class="bg-gradient-to-t from-indigo-600 to-indigo-400 bg-clip-text text-transparent"
          >Tigran Bantikyan</span
        >
      </h1>
      <div
        class="border-r-5 bg-inherit font-mono text-base font-bold text-inherit dark:bg-inherit dark:text-inherit sm:text-lg md:mt-1 md:text-xl lg:text-2xl xl:text-3xl"
      >
        <h2
          class="relative w-fit bg-inherit before:absolute before:inset-0 before:animate-[typewriter_0.8s_steps(18)_forwards] before:bg-inherit dark:bg-inherit dark:before:bg-inherit"
        >
          Software Engineer.
        </h2>
        <h2
          class="relative w-fit bg-inherit before:absolute before:inset-0 before:animate-[typewriter_1.3s_0.8s_steps(31)_forwards] before:bg-inherit dark:bg-inherit dark:before:bg-inherit"
        >
          CS at Northwestern University.
        </h2>
      </div>
    </div>
    <div class="mt-8 flex flex-col justify-between md:mt-0 md:flex-row">
      <!-- about me text -->
      <div class="basis-3/6 text-base lg:text-xl" id="about-me">
        <p class="md:leading-8">
          I am a Software Engineer, student, and lifelong learner. My passion
          for Computer Science began at the age of 9 when I set out to uncover
          how video games are made in hopes of forging one of my own. Today, I
          prize my curiosity and high standards for work as qualities that drive
          me to become a better engineer.
        </p>
        <p class="mt-3 md:leading-8">
          I have had the privilege of optimizing algorithms, designing backend
          systems, and developing scalable apps in past experiences while
          cultivating my collaboration and problem-solving skills. I am eager to
          further my SWE career.
        </p>
      </div>
      <div class="mt-8 basis-2/5 pb-10 md:mt-0 md:flex md:flex-col md:pb-0">
        <!-- Skills -->
        <p class="thin text-base">My skills:</p>
        <div class="rounded-lg bg-opacity-90 p-2" id="skills">
          <div class="flex flex-row flex-wrap gap-1.5">
            <Skill :skillData="{ icon: goIcon, name: 'Go (Golang)' }" />
            <Skill :skillData="{ icon: awsIcon, name: 'AWS' }" />
            <Skill :skillData="{ icon: dockerIcon, name: 'Docker' }" />
            <Skill
              :skillData="{ icon: kubernetesIcon, name: 'Kubernetes (K8s)' }"
            />
            <Skill :skillData="{ icon: gitIcon, name: 'Git/GitHub' }" />
            <Skill :skillData="{ icon: cIcon, name: 'C/C++' }" />
            <Skill :skillData="{ icon: pythonIcon, name: 'Python' }" />
            <Skill :skillData="{ icon: nodesjsIcon, name: 'Node.js' }" />
            <Skill :skillData="{ icon: reactIcon, name: 'React' }" />
            <Skill :skillData="{ icon: vueIcon, name: `Vue` }" />
            <Skill :skillData="{ icon: mongodbIcon, name: 'MongoDB' }" />
            <Skill :skillData="{ icon: javascriptIcon, name: 'Javascript' }" />
            <Skill :skillData="{ icon: tailwindIcon, name: 'Tailwind CSS' }" />
            <Skill
              :skillData="{ icon: postgresIcon, name: 'Postgres / MySQL' }"
            />
          </div>
        </div>
        <!-- Contact & social media links -->
        <div class="mt-8 md:mt-4" id="social-links">
          <p class="thin text-base">Let's connect:</p>
          <div class="ml-4 mt-2 flex flex-col gap-1.5 text-sm font-light">
            <a
              class="flex place-items-center fill-neutral-500 hover:fill-indigo-500 hover:text-indigo-500"
              href="https://www.linkedin.com/in/tb301/"
              target="_blank"
            >
              <inline-svg class="mr-4 h-6 w-6" :src="linkedinIcon" /> Linkedin
            </a>
            <a
              class="flex place-items-center fill-neutral-500 hover:fill-indigo-500 hover:text-indigo-500"
              href="https://www.linkedin.com/in/tb301/"
              target="_blank"
            >
              <inline-svg class="mr-4 h-6 w-6" :src="githubIcon" /> Github
            </a>
            <a
              class="flex place-items-center fill-neutral-500 hover:fill-indigo-500 hover:text-indigo-500"
              href="mailto:tigranbantikyan@u.northwestern.edu"
              target="_blank"
            >
              <inline-svg class="mr-4 h-6 w-6" :src="mailIcon" />
              tigranbantikyan@u.northwestern.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Skill from "../components/Skill.vue";

import awsIcon from "../assets/icons/aws.svg";
import cIcon from "../assets/icons/c.svg";
import dockerIcon from "../assets/icons/docker.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import goIcon from "../assets/icons/go.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import kubernetesIcon from "../assets/icons/kubernetes.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import mailIcon from "../assets/icons/mail.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import nodesjsIcon from "../assets/icons/nodejs.svg";
import postgresIcon from "../assets/icons/postgres.svg";
import pythonIcon from "../assets/icons/python.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import vueIcon from "../assets/icons/vue.svg";
</script>
