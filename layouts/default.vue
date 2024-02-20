<script setup lang="ts">

import FooterBar from "~/components/footerBar.vue";
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
  <div id="container">
    <div class="flex gap-40 justify-center items-center h-full">
      <div>
        <Navbar/>
      </div>
      <div id="slot">
        <slot/>
      </div>
    </div>
    <FooterBar/>
  </div>

</template>

<style scoped>
#container{
  height: 90vh;
  max-height: 90vh;
}

#slot{
  width: 50%;
}
</style>