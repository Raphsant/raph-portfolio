<script setup lang="ts">

</script>

<template>

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

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Nunito&display=swap');

.custom-font {
  font-family: 'Lato', sans-serif;
}
#blureffect{
  z-index: -10;
  overflow: hidden;
}

</style>