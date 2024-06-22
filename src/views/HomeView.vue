<template>
  <main class="md:flex md:flex-col md:gap-16 md:px-4 lg:px-16 xl:px-44 bg-inherit text-inherit dark:bg-inherit dark:text-inherit">
    <!-- Header -->
    <div class="mt-4 md:mt-16 flex flex-col bg-inherit text-inherit dark:bg-inherit dark:text-inherit">
      <h1
        class="mt-1 place-content-center text-3xl sm:text-4xl md:text-5xl font-bold lg:text-6xl xl:text-7xl"
      >
        I'm
        <span
          class="bg-gradient-to-t from-indigo-600 to-indigo-400 bg-clip-text text-transparent"
          >Tigran Bantikyan</span
        >
      </h1>
      <div class="font-mono mt-1 text-base font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl border-r-5 bg-inherit text-inherit dark:bg-inherit dark:text-inherit">
        <h2 class="relative before:absolute w-fit before:inset-0 before:animate-[typewriter_0.8s_steps(18)_forwards] bg-inherit before:bg-inherit dark:bg-inherit dark:before:bg-inherit">
          Software Engineer.
        </h2>
        <h2 class="relative w-fit before:absolute before:inset-0 before:animate-[typewriter_1.3s_0.8s_steps(31)_forwards] bg-inherit before:bg-inherit dark:bg-inherit dark:before:bg-inherit">
          CS at Northwestern University.</h2>
      </div>
    </div>
    <div class="mt-8 md:mt-0 flex justify-between flex-col md:flex-row">
      <!-- about me text -->
      <div class="basis-3/6 text-base lg:text-xl" id="about-me">
        <p class="md:leading-8">
          I am a Software Enginner, student, and life-long learner. My passion for
          for Computer Science begin at the age of 9, when I  set out
          to uncover how video games were made in hopes of forging one of my own. Today, I prize my
          curiosity and high standards for work as characteristics that drive me to become a better
          engineer.
        </p>
        <p class="md:leading-8 mt-3">
          I have had the privilege of optimizing algorithms, designing backend systems, and 
          developing scalable apps in past experiences while cultivating my collaboration and
          problem-solving skills. I am eager to further my SWE career.
        </p>
      </div>
      <div class="basis-2/5 mt-8 md:mt-0 pb-10 md:flex md:flex-col md:pb-0">
        <!-- Skills -->
        <p class="thin text-base">My Skills:</p>
        <div class="rounded-lg bg-opacity-90 p-2" id="skills">
          <div class="flex flex-row flex-wrap gap-2">
            <Skills :icon="goIcon" :skillName="'Go (Golang)'" />
            <Skills :icon="awsIcon" :skillName="'AWS'" />
            <Skills :icon="dockerIcon" :skillName="'Docker'" />
            <Skills :icon="kubernetesIcon" :skillName="'Kubernetes (K8s)'" />
            <Skills :icon="gitIcon" :skillName="'Git/GitHub'" />
            <Skills :icon="cIcon" :skillName="'C/C++'" />
            <Skills :icon="pythonIcon" :skillName="'Python'" />
            <Skills :icon="nodesjsIcon" :skillName="'Node.js'" />
            <Skills :icon="reactIcon" :skillName="'React'" />
            <Skills :icon="mongodbIcon" :skillName="'MongoDB'" />
            <Skills :icon="javascriptIcon" :skillName="'Javascript'" />
            <Skills :icon="tailwindIcon" :skillName="'Tailwind CSS'" />
            <Skills :icon="postgresIcon" :skillName="'Postgres / MySQL'" />
          </div>
        </div>
        <!-- Contact & social media links -->
        <div class="mt-8 md:mt-4 lg:mt-8" id="social-links">
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
import Skills from "../components/Skills.vue";
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
import portrait from "../assets/portrait.png";
</script>
