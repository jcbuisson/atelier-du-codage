<template>
   <header class=" bg-light-shade relative overflow-x-hidden md:overflow-y-hidden py-4">
      <nav class="container flex max-md:flex-row-reverse justify-between items-center">

         <a class="logo-font text-accent text-2xl max-md:text-lg max-md:text-center max-md:w-full uppercase" href="index.html">
               L'atelier du<span class="text-primary"> codage </span>
         </a>

         <img class="absolute -top-[25%] -left-[10%] max-md:top-0 h-80 w-80 max-md:h-36 max-md:w-36"
         src="/src/imgs/pink-polygon.svg" alt="pink-polygon">
      <img class="absolute bottom-[10%] left-[25%] h-24 w-24 max-md:h-12 max-md:w-12"
         src="/src/imgs/pink-polygon.svg" alt="pink-polygon">
      <img class="absolute -top-[20%] max-xl:-top-[10%] right-[40%] max-sm:-top-[21%] h-40 w-40 max-md:h-20 max-md:w-20"
         src="/src/imgs/pink-polygon.svg" alt="pink-polygon">
      <img class="absolute -bottom-[0%] -right-[10%] h-96 w-96 max-md:h-48 max-md:w-48 overflow-y-hidden"
         src="/src/imgs/pink-polygon.svg" alt="pink-polygon">

         <ul id="mobile-nav-menu"
               class="flex gap-3 items-center max-md:fixed max-md:flex-col max-md:h-screen max-md:w-[65vw] max-md:py-12 max-md:gap-6 max-md:bg-white max-md:z-30 max-md:top-0 max-md:-left-full transition-all relative">
               <button id="mobile-nav-cross" onclick="toggleMobileNav()"
                  class="md:hidden z-20 fixed left-0 top-0 py-4 container hidden">
                  <img class="h-6 w-6" src="/src/imgs/mobile-nav-cross.svg" alt="mobile-nav-menu">
               </button>
               <li>
                  <a class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all"
                     href="#" @click="realisations">
                     Réalisations</a>
               </li>
               <li>
                  <a class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all"
                     href="#" @click="expertise">
                     Expertise
                  </a>
               </li>
               <li>
                  <a class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all"
                     href="#" @click="tarifs">
                     Tarifs
                  </a>
               </li>
               <li>
                  <a class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all"
                     href="#" @click="contact">
                     Contact
                  </a>
               </li>
         </ul>

         <div onclick="toggleMobileNav()" id="mobile-nav-menu-blank"
               class="md:hidden h-screen w-[35vw] fixed top-0 right-full bg-accent/50 transition-all">
         </div>

         <button onclick="toggleMobileNav()" class="md:hidden z-20">
               <img class="h-5 w-5" src="/src/imgs/mobile-nav-menu.svg" alt="mobile-nav-menu">
         </button>

      </nav>

      <!-- title -->
      <main class="container text-center py-24 max-sm:py-8"  v-html="htmlTitle">
      </main>

   </header>

</template>

<script setup>
import { useTitle } from '/src/useTitle.js'
import router from "/src/router"

const { htmlTitle } = useTitle()

const realisations = () => {
   htmlTitle.value = "<h1>Réalisations</h1>"
   router.push('/realisations')
}

const expertise = () => {
   htmlTitle.value = "<h1>Expertise</h1>"
   router.push('/expertise')
}

const tarifs = () => {
   htmlTitle.value = "<h1>Tarifs</h1>"
   router.push('/tarifs')
}

const contact = () => {
   htmlTitle.value = "<h1>CONTACT</h1>"
   router.push('/contact')
}
</script>
