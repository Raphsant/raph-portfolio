<script setup lang="ts">
const projects = [
  {
    'name': 'EAC Game',
    'description': 'Financial simulator made for the Economic Awareness Council of Chicago by Columbia College Chicago Design Lab, with my as the lead Developer. This web application was developed to help students in lower income communities learn about economic literacy and the importance of investing and saving. This was developed using React and vanilla Css for the styling.',
    'repo': 'https://github.com/',
    'tech': ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
    'img': "https://cdn.discordapp.com/attachments/684442343168147529/1045108819400867910/image.png"
  },
  {
    'name': 'Parkway',
    'description': 'Final project for my Application Development class. Project involved in making a user friendly version of the National Park Service website (NPS) using their API, this website was developed with React and used Tailwind for the styling.',
    'repo': 'https://github.com/',
    'tech': ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",],
    'img': "https://cdn.discordapp.com/attachments/684442343168147529/1045109724460367942/image.png"
  },
  {
    'name': 'Alpha Circuit',
    'description': 'Website made for the PCB selling company Alpha circuit, customers can learn about the company here and also request quotes or sent direct emails through the forms. Made using Nuxt3, styled with Tailwind, hosted in Netlify',
    'repo': 'https://github.com/',
    'tech': ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",],
    'img': "https://cdn.discordapp.com/attachments/684442369063780362/1155984894309175367/image.png"
  }
]
</script>

<template>
  <div class="flex space-x-10">
    <div v-for="project in projects" class=" bg-bluegray rounded-md flex flex-col items-center justify-between w-full">
      <div id="img_container" class=" h-[10rem] w-full">
        <img class="rounded-t-md object-cover h-full w-full"
             :src="project.img" alt="">
      </div>
      <div class="h-72 px-3">
        <div class="text-white text-center text-2xl mt-2">
          {{ project.name }}
          <hr class=" border-coral text-center mt-2"/>
        </div>
        <div id="desc" class="text-white text-center px-2 py-1 font-extralight overflow-y-auto items-center">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#desc{
  height: 80%;
}
</style>