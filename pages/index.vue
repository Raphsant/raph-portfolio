<script setup lang="ts">
import ProjectCard from "~/components/projectCard.vue";
</script>

<template>

<div class="flex flex-col items-center space-y-5">
  <HeroSection/>
  <DevIconsBar/>
  <div class="m-10 space-y-5 text-center">
    <span id="terminal-span" class=" text-white font-extralight"> $ <span class="text-coral font-light">cd Raphsant/Documents/repos</span> </span>
    <ProjectCard/>
  </div>
</div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');

#terminal-span {
  font-family: 'Chakra Petch', sans-serif;
}
</style>