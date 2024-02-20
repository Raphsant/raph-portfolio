<script setup lang="ts">

</script>

<template>
  <div>
    <div class="text-white text-3xl font-extralight m-2  flex flex-row justify-center items-center">
      <nav class="flex justify-center items-center space-x-8 text-xl">
        <ul>
          <li>
            <NuxtLink to="/"><span id="terminal-span" class=" text-white font-extralight" @click="show = !show"> $ <span
                class="text-coral font-light">cd Raphsant</span> <Icon class="animate-bounce hover:text-coral"
                                                                       name="ep:arrow-down-bold"/> </span></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about"><span id="terminal-span" class=" text-white font-extralight" @click="show = !show"> $ <span
                class="text-coral font-light">cd Raphsant/Documents/about.txt</span> <Icon
                class="animate-bounce hover:text-coral"
                name="ep:arrow-down-bold"/> </span></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects"><span id="terminal-span" class=" text-white font-extralight" @click="show = !show"> $ <span
                class="text-coral font-light">cd Raphsant/Documents/repos</span> <Icon
                class="animate-bounce hover:text-coral" name="ep:arrow-down-bold"/> </span></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/socials"><span id="terminal-span" class=" text-white font-extralight" @click="show = !show"> $ <span
                class="text-coral font-light">cd Raphsant/Documents/socials</span> <Icon
                class="animate-bounce hover:text-coral" name="ep:arrow-down-bold"/> </span></NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
</style>