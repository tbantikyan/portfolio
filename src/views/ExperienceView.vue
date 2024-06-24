<template>
  <main
    class="mt-4 bg-inherit text-inherit dark:bg-inherit dark:text-inherit lg:mt-8"
  >
    <div class="md:px-4 lg:px-16 xl:px-44">
      <h1 class="text-2xl font-bold md:text-3xl lg:text-4xl">My Experience</h1>
      <p class="mt-2 w-10/12 text-sm sm:w-8/12 md:text-base lg:w-6/12">
        A look into what I've accomplished in my work experiences.
      </p>
      <div
        class="mt-10 flex flex-col place-items-center gap-4 pb-10 md:pb-0 lg:gap-5"
      >
        <Experience
          :experience-data="{
            title: `Software Engineer Intern`,
            company: `Camber Cloud`,
            companyLogo: camberCloudIcon,
            date: `June 2024 - Present`,
            description: [
              `Developing a user-friendly interface for reserving high-end cloud GPUs & deploying to Kubernetes, addressing a
  critical need identified by many potential customers.`,
            ],
            skills: [
              { icon: goIcon, name: `Go (Golang)` },
              { icon: awsIcon, name: `AWS` },
              { icon: dockerIcon, name: `Docker` },
              { icon: kubernetesIcon, name: `Kubernetes` },
              { icon: nodesjsIcon, name: `Node.js` },
              { icon: javascriptIcon, name: `Javascript` },
              { icon: htmxIcon, name: `htmx` },
              { icon: gitIcon, name: `Git/GitHub` },
            ],
          }"
        />
        <Experience
          :experience-data="{
            title: `Software Engineer Intern`,
            company: `Clark University`,
            companyLogo: clarkUniversityIcon,
            date: `June 2023 - Sep. 2023`,
            description: [
              `Developed a consensus-driven linearizable storage to achieve a 30% increase in throughput over existing state-of-the-art systems.`,
              `Implemented features favoring industry use while reducing latency by 20-50% over an existing system more suited to an academic context.`,
              `Produced compelling visualizations via NumPy & Matplotlib for a paper submitted for publication.`
            ],
            skills: [
              { icon: goIcon, name: `Go (Golang)` },
              { icon: awsIcon, name: `AWS` },
              { icon: pythonIcon, name: `Python` },
              { icon: etcdIcon, name: `etcd` },
              { icon: linuxIcon, name: `Linux` },
              { icon: gitIcon, name: `Git/GitHub` },
            ],
          }"
        />
        <Experience
          :experience-data="{
            title: `Distributed Systems Researcher`,
            company: `Boston College`,
            companyLogo: bostonCollegeIcon,
            date: `Jan. 2021 - May 2022`,
            description: [
              `Programmed 4 novel consensus algorithms for experimentation, enabling a boost in performance of up to 50%.`,
              `Designed innovative an integration between Cassandra and Ethereum to create a system that addresses problems of IoT networks.`,
              `Utilized cloud infrastructure to simulate realistic conditions for test data, helping 3 papers achieve publication.`,
            ],
            skills: [
              { icon: goIcon, name: `Go (Golang)` },
              { icon: gcpIcon, name: `Google Cloud Platform` },
              { icon: pythonIcon, name: `Python` },
              { icon: cassandraIcon, name: `Cassandra`},
              { icon: ethereumIcon, name: `Ethereum Blockchain`},
              { icon: linuxIcon, name: `Linux` }
            ],
          }"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Experience from "../components/Experience.vue";

import awsIcon from "../assets/icons/aws.svg";
import bostonCollegeIcon from "../assets/icons/bostoncollege.svg";
import camberCloudIcon from "../assets/icons/cambercloud.svg";
import cassandraIcon from "../assets/icons/cassandra.svg";
import clarkUniversityIcon from "../assets/icons/clarkuniversity.svg";
import dockerIcon from "../assets/icons/docker.svg";
import etcdIcon from "../assets/icons/etcd.svg";
import ethereumIcon from "../assets/icons/ethereum.svg";
import gcpIcon from "../assets/icons/gcp.svg";
import gitIcon from "../assets/icons/git.svg";
import goIcon from "../assets/icons/go.svg";
import htmxIcon from "../assets/icons/htmx.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import kubernetesIcon from "../assets/icons/kubernetes.svg";
import linuxIcon from "../assets/icons/linux.svg"
import nodesjsIcon from "../assets/icons/nodejs.svg";
import pythonIcon from "../assets/icons/python.svg";
</script>
