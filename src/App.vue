<template>
  <header>
    <NavBar />

    <!-- <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/experience">About</RouterLink>
        <RouterLink to="/projects">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <!-- <RouterView />3 -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>
