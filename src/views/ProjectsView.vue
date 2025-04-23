<template>
  <main
    class="mt-4 bg-inherit text-inherit dark:bg-inherit dark:text-inherit lg:mt-8"
  >
    <div class="md:px-4 lg:px-16 xl:px-44">
      <h1 class="text-2xl font-bold md:text-3xl lg:text-4xl">My Projects</h1>
      <p class="mt-2 w-10/12 text-sm sm:w-8/12 md:text-base lg:w-6/12">
        Hobby projects I've pursued to fulfill personal needs and learn new
        skills. Many of them are deployed and feature a link to the code on
        GitHub.
      </p>
    </div>
    <div
      class="mt-10 flex flex-col place-items-center gap-4 pb-10 md:pb-0 lg:gap-5"
    >
      <Project
        :project-data="{
          title: `WalletCache: Secure Credit Card Store`,
          description: `CLI app created to be a secure, lightweight, and performant means of storing credit cards 
                        digitally. Leverages industry best OOP & CI/CD practices, follows rigorous secure coding 
                        standards, and incorporates optimizations like lazy writes and efficient low-level I/O code.`,
          link: 'https://github.com/tigranb2/WalletCache',
          imgSrc: walletCacheDisplay,
          skills: [
            { icon: cIcon, name: `C/C++` },
            { icon: libsodiumIcon, name: `libsodium` },
            { icon: googleIcon, name: `GTest` },
            { icon: cmakeIcon, name: `CMake` },
            { icon: gitIcon, name: `Git/GitHub` },
          ],
        }"
      />
      <Project
        :project-data="{
          title: `Tachy: Productivity Tracker`,
          description: `Full stack web app that allows users to track simultaneous tasks and visualize productivity.
                        Responsive site design and an authentication system ensure users can access their data from 
                        any device.`,
          link: 'https://tachy.pages.dev/',
          imgSrc: tachyDisplay,
          skills: [
            { icon: mongodbIcon, name: `MongoDB` },
            { icon: reactIcon, name: `React` },
            { icon: nodesjsIcon, name: `Node.js` },
            { icon: gitIcon, name: `Git/GitHub` },
          ],
        }"
      />
      <Project
        :project-data="{
          title: `Pineapple: Consensus Algorithm`,
          description: `Developed a highly performant consensus algorithm that improves on Multi-Paxos by integrating
                        ABD. Achieves significant latency & throughput improvement (from 30% to 50%) over competitors.`,
          link: 'https://github.com/tigranb2/pineapple/',
          imgSrc: pineappleDisplay,
          skills: [
            { icon: goIcon, name: `Go (Golang)` },
            { icon: cloudlabIcon, name: `Cloudlab` },
            { icon: gitIcon, name: `Git/GitHub` },
          ],
        }"
      />
      <Project
        :project-data="{
          title: `SoHamov: Dish Classifier`,
          description: `Responsive web app for classifying images of popular Armenian cuisine and educating users. In
                        built a custom dataset and trained the AI model, achieving 97% accuracy.`,
          link: 'https://sohamov.pages.dev/',
          imgSrc: sohamovDisplay,
          skills: [
            { icon: tensorflowIcon, name: `Tensorflow` },
            { icon: firebaseIcon, name: `Firebase` },
            { icon: reactIcon, name: `React` },
            { icon: nodesjsIcon, name: `Node.js` },
            { icon: gitIcon, name: `Git/GitHub` },
          ],
        }"
      />
      <Project
        :project-data="{
          title: `Personal Portfolio Site`,
          description: `You're here! Carefully designed with iterability in mind to enable efficient addition of projects and experiences.`,
          link: '',
          imgSrc: portfolioDisplay,
          skills: [
            { icon: vueIcon, name: `Vue` },
            { icon: tailwindIcon, name: `Tailwind CSS` },
            { icon: nodesjsIcon, name: `Node.js` },
            { icon: gitIcon, name: `Git/GitHub` },
          ],
        }"
      />
      <Project
        :project-data="{
          title: `Realistic Flight Simulator`,
          description: `A POV flight simulator with realistic physics. Features playable level to experience controls and game mechanics.`,
          link: 'https://github.com/tigranb2/flying-sim',
          imgSrc: flightSimDisplay,
          skills: [
            { icon: csharpIcon, name: `C#` },
            { icon: unityIcon, name: `Unity` },
            { icon: gitIcon, name: `Git/GitHub` },
          ],
        }"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import Project from "../components/Project.vue";

import cIcon from "../assets/icons/c.svg";
import cloudlabIcon from "../assets/icons/cloudlab.svg";
import cmakeIcon from "../assets/icons/cmake.svg";
import csharpIcon from "../assets/icons/csharp.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import flightSimDisplay from "../assets/flight-sim-display.jpg";
import gitIcon from "../assets/icons/git.svg";
import goIcon from "../assets/icons/go.svg";
import googleIcon from "../assets/icons/google.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import nodesjsIcon from "../assets/icons/nodejs.svg";
import libsodiumIcon from "../assets/icons/libsodium.svg";
import pineappleDisplay from "../assets/pineapple-display.png";
import portfolioDisplay from "../assets/portfolio-display.jpg";
import reactIcon from "../assets/icons/react.svg";
import sohamovDisplay from "../assets/sohamov-display.jpg";
import tachyDisplay from "../assets/tachy-display.jpg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import tensorflowIcon from "../assets/icons/tensorflow.svg";
import unityIcon from "../assets/icons/unity.svg";
import vueIcon from "../assets/icons/vue.svg";
import walletCacheDisplay from "../assets/wallet-cache-display.jpg";
</script>
