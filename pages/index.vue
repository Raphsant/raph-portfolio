<script setup lang="ts">
import ProjectCard from "~/components/projectCard.vue";
import {ref, onMounted} from "vue"
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref();
const show = ref(false)
const [parent] = useAutoAnimate()


</script>

<template>

  <div class="flex flex-col items-center space-y-5">
    <HeroSection/>
    <DevIconsBar/>
    <div class="m-10 space-y-5 text-center">
      <span id="terminal-span" class=" text-white font-extralight" @click="show = !show"> $ <span
          class="text-coral font-light">cd Raphsant/Documents/repos</span> <Icon  class="animate-bounce hover:text-coral" name="ep:arrow-down-bold"/> </span>

      <div ref="parent">
        <ProjectCard v-if="show"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');

#terminal-span {
  font-family: 'Chakra Petch', sans-serif;
}
</style>