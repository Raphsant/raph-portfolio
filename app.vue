<template>
   <NuxtLayout>
     <NuxtPage/>
   </NuxtLayout>
</template>
<style>

html{
  background-color: #131417;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-leave-to {
  opacity: 0;
  //filter: blur(1rem);
  transform: translate(0, -100px);

}

.slide-enter-from{
  opacity: 0;
//filter: blur(1rem);
  transform: translate(0, 100px);
}

</style>
