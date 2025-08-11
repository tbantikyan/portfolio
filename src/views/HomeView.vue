<template>
  <main
    class="overflow-x-hidden bg-inherit px-8 text-inherit dark:bg-inherit dark:text-inherit md:flex md:flex-col md:gap-16 md:px-12 lg:px-24 xl:px-48"
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
          - Software Engineer
        </h2>
        <h2
          class="relative w-fit bg-inherit before:absolute before:inset-0 before:animate-[typewriter_1.3s_0.8s_steps(31)_forwards] before:bg-inherit dark:bg-inherit dark:before:bg-inherit"
        >
          - CS at Northwestern University
        </h2>
      </div>

      <!-- Contact & social media links -->
      <div id="social-links">
        <div
          class="mt-8 flex flex-col gap-1.5 text-xs font-light md:flex-row md:gap-6 md:text-sm"
        >
          <a
            class="flex place-items-center fill-neutral-500 hover:fill-indigo-500 hover:text-indigo-500"
            href="https://www.linkedin.com/in/tb301/"
            target="_blank"
          >
            <inline-svg class="mr-1.5 h-6 w-6" :src="linkedinIcon" /> Linkedin
          </a>
          <a
            class="flex place-items-center fill-neutral-500 hover:fill-indigo-500 hover:text-indigo-500"
            href="https://github.com/tbantikyan/"
            target="_blank"
          >
            <inline-svg class="mr-1.5 h-6 w-6" :src="githubIcon" /> Github
          </a>
          <a
            class="flex place-items-center fill-neutral-500 hover:fill-indigo-500 hover:text-indigo-500"
            href="mailto:tigranbantikyan@u.northwestern.edu"
            target="_blank"
          >
            <inline-svg class="mr-1.5 h-6 w-6" :src="mailIcon" />
            tigranbantikyan@u.northwestern.edu
          </a>
        </div>
      </div>
    </div>

    <!-- Skills carousel -->
    <div>
      <div
        class="group relative -mx-12 my-8 overflow-hidden whitespace-nowrap bg-opacity-0 py-[10px] md:-mx-12 md:my-0 lg:-mx-24 xl:-mx-52"
      >
        <div
          class="inline-flex w-max animate-slide flex-nowrap will-change-transform"
        >
          <div
            v-for="(logo, i) in [...logosWithNames, ...logosWithNames]"
            :key="i"
            class="mx-[30px] inline-block flex flex-col items-center sm:mx-[40px]"
          >
            <img
              :src="isDark && logo.srcDark ? logo.srcDark : logo.src"
              alt="logo"
              class="mb-1.5 h-[40px] w-auto md:h-[50px]"
            />
            <span
              class="text-center font-medium text-gray-700 dark:text-gray-300"
              :class="{
                'text-[10px]': logo.name.length > 12,
                'text-xs': logo.name.length <= 12,
              }"
            >
              {{ logo.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-8 flex flex-col justify-between md:flex-row">
      <div class="flex max-w-2xl basis-1/2 flex-col md:gap-8">
        <!-- about me text -->
        <div class="text-base lg:text-lg" id="about-me">
          <p class="md:leading-8">
            I am a Software Engineer, student, and lifelong learner. My passion
            for Computer Science began at the age of 9 when I set out to uncover
            how video games are made in hopes of forging one of my own. Today, I
            prize my curiosity and high standards for work as qualities that
            drive me to become a better engineer.
          </p>
          <p class="mt-3 md:leading-8">
            I have had the privilege of optimizing algorithms, designing backend
            systems, and developing scalable apps in past experiences while
            cultivating my collaboration and problem-solving skills. I am eager
            to further my SWE career.
          </p>
        </div>

        <div class="mt-8 pb-10 md:mt-0 md:flex md:flex-col md:pb-0">
          <!-- Skills -->
          <p class="text-base lg:text-lg">My skills:</p>
          <div class="rounded-lg bg-opacity-90 py-2" id="skills">
            <div class="flex flex-row flex-wrap gap-1.5">
              <Skill :skillData="{ icon: awsIconDark, name: 'AWS' }" />
              <Skill :skillData="{ icon: dockerIcon, name: 'Docker' }" />
              <Skill
                :skillData="{ icon: kubernetesIcon, name: 'Kubernetes (K8s)' }"
              />
              <Skill :skillData="{ icon: goIcon, name: 'Go (Golang)' }" />
              <Skill :skillData="{ icon: cIcon, name: 'C/C++' }" />
              <Skill :skillData="{ icon: pythonIcon, name: 'Python' }" />
              <Skill
                :skillData="{ icon: javascriptIcon, name: 'Javascript' }"
              />
              <Skill
                :skillData="{ icon: postgresIcon, name: 'Postgres / MySQL' }"
              />
              <Skill :skillData="{ icon: mongodbIcon, name: 'MongoDB' }" />
              <Skill :skillData="{ icon: nodesjsIcon, name: 'Node.js' }" />
              <Skill :skillData="{ icon: reactIcon, name: 'React' }" />
              <Skill :skillData="{ icon: vueIcon, name: `Vue` }" />
              <Skill
                :skillData="{ icon: tailwindIcon, name: 'Tailwind CSS' }"
              />
              <Skill :skillData="{ icon: gitIcon, name: 'Git/GitHub' }" />
            </div>
          </div>
        </div>
      </div>

      <!-- Experiences and Projects preview -->
      <div
        class="mx-auto flex w-full flex-col gap-8 md:mx-0 md:max-w-lg md:basis-5/12 xl:basis-2/5"
      >
        <div>
          <ExperiencePreview
            class="dark:bg-inherit"
            :preview-data="{
              title: `Latest Experiences`,
              items: [
                {
                  company: `Amazon`,
                  jobTitle: `Software Engineer Intern`,
                  logo: amazonIcon,
                  logoDark: amazonIconDark,
                },
                {
                  company: `Apple`,
                  jobTitle: `Software Engineer Intern`,
                  logo: appleIcon,
                  logoDark: appleIconDark,
                },
              ],
            }"
          />
        </div>

        <div>
          <ProjectPreview
            class="dark:bg-inherit"
            :preview-data="{
              title: `Latest Projects`,
              items: [
                {
                  project: `Vots: Low Latency Trading System`,
                  projectDescription: `Developing a low-latency, hyper-optimized trading exchange and market participant components`,
                },
                {
                  project: `WalletCache: Credit Card Vault`,
                  projectDescription: `Performant & secure CLI app for storing cards`,
                },
              ],
            }"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Skill from "../components/Skill.vue";

import amazonIcon from "../assets/icons/amazon.svg";
import amazonIconDark from "../assets/icons/amazonDark.svg";
import appleIcon from "../assets/icons/apple.svg";
import appleIconDark from "../assets/icons/appleDark.svg";
import awsIcon from "../assets/icons/aws.svg";
import awsIconDark from "../assets/icons/awsDark.svg";
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

import { isDark } from "../main";
import ExperiencePreview from "@/components/ExperiencePreview.vue";
import ProjectPreview from "@/components/ProjectPreview.vue";

const logosWithNames = [
  { src: awsIcon, srcDark: awsIconDark, name: "AWS" },
  { src: cIcon, name: "C/C++" },
  { src: dockerIcon, name: "Docker" },
  { src: gitIcon, name: "Git" },
  { src: goIcon, name: "Go (Golang)" },
  { src: javascriptIcon, name: "JavaScript" },
  { src: kubernetesIcon, name: "Kubernetes" },
  { src: mongodbIcon, name: "MongoDB" },
  { src: nodesjsIcon, name: "Node.js" },
  { src: postgresIcon, name: "PostgreSQL" },
  { src: pythonIcon, name: "Python" },
  { src: reactIcon, name: "React" },
  { src: tailwindIcon, name: "Tailwind CSS" },
  { src: vueIcon, name: "Vue.js" },
];
</script>
