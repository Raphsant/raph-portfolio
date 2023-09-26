<script setup lang="ts">
import {useMouse} from "@vueuse/core";

const {x, y} = useMouse();
</script>

<template>
  <div id="blureffect" class=" absolute bg-coral/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl overflow-hidden w-screen h-screen"
       :style="{
    left: `${x}px`,
    top: `${y}px`,
    width: `200px`,
    height: `200px`,
  }">

  </div>
  <div class="flex flex-col justify-center items-center my-20 space-y-5 custom-font">
    <div id="title" class="text-white text-8xl font-extralight">
      <NameBanner/>
    </div>
    <hr class="w-1/6 border-coral"/>
    <div class="text-coral text-5xl font-thin custom-font">
      Software developer
    </div>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Nunito&display=swap');

.custom-font {
  font-family: 'Lato', sans-serif;
}
#blureffect{
  z-index: -1;
  overflow: hidden;
}

</style>