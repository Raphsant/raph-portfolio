<script setup lang="ts">
const name = ref('Raph Santana')
const [parent] = useAutoAnimate()


</script>

<template>
<div ref="parent">
  <span v-for="letter in name" class="text-white hover:text-coral">{{letter}}</span>
</div>
</template>

<style scoped>

</style>