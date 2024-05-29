<template>

   <nav class="bg-white fixed w-full z-20 top-0 left-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <!-- <a href="https://formation-fullstack.fr" class="flex items-center">
            <img src="https://www.formation-fullstack.fr/logo320x462.png" class="h-8 mr-3">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DU Fullstack</span>
         </a> -->
         <a class="logo-font text-accent text-2xl max-md:text-lg max-md:text-center max-md:w-full uppercase" href="index.html">
            L'atelier du<span class="text-primary"> codage </span>
         </a>

         <div class="flex md:order-2">
            <button id="navbar-toggle" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
               <span class="sr-only">Open main menu</span>
               <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
               </svg>
            </button>
         </div>
         <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
               <li>
                  <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a> -->
                  <a class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all"
                     href="#" @click="accueil">
                     Accueil
                  </a>
               </li>
               <li>
                  <!-- <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a> -->
                  <a class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all"
                     href="#" @click="realisations">
                     Réalisations
                  </a>
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
         </div>
      </div>
   </nav>


   <header class=" bg-light-shade relative overflow-x-hidden md:overflow-y-hidden py-4">
      <nav class="container flex max-md:flex-row-reverse justify-between items-center">

         <!-- <a class="logo-font text-accent text-2xl max-md:text-lg max-md:text-center max-md:w-full uppercase" href="index.html">
            L'atelier du<span class="text-primary"> codage </span>
         </a> -->

         <img class="absolute -top-[25%] -left-[10%] max-md:top-0 h-80 w-80 max-md:h-36 max-md:w-36"
            src="/src/imgs/pink-polygon.svg" alt="pink-polygon">
         <img class="absolute bottom-[10%] left-[25%] h-24 w-24 max-md:h-12 max-md:w-12"
            src="/src/imgs/pink-polygon.svg" alt="pink-polygon">
         <img class="absolute -top-[20%] max-xl:-top-[10%] right-[40%] max-sm:-top-[21%] h-40 w-40 max-md:h-20 max-md:w-20"
            src="/src/imgs/pink-polygon.svg" alt="pink-polygon">
         <img class="absolute -bottom-[0%] -right-[10%] h-96 w-96 max-md:h-48 max-md:w-48 overflow-y-hidden"
            src="/src/imgs/pink-polygon.svg" alt="pink-polygon">

         <ul
            :style="{ left: isNavOpen ? 0 : '-100%' }"
            class="flex gap-3 items-center max-md:fixed max-md:flex-col max-md:h-screen max-md:w-[65vw] max-md:py-12 max-md:gap-6 max-md:bg-white max-md:z-30 max-md:top-0 max-md:-left-full transition-all relative">

            <button @click="toggleMobileNav()"
               :style="{ display: isNavOpen ? 'block' : 'none' }"
               class="md:hidden z-20 fixed left-0 top-0 py-4 container hidden">
               <img class="h-6 w-6" src="/src/imgs/mobile-nav-cross.svg" alt="mobile-nav-menu">
            </button>

            <li>
               <a class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all"
                  href="#" @click="accueil">
                  Accueil
               </a>
            </li>
            <li>
               <a class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all"
                  href="#" @click="realisations">
                  Réalisations
               </a>
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

         <div @click="toggleMobileNav"
            :style="{ right: isNavOpen ? 0 : '100%' }"
            class="md:hidden h-screen w-[35vw] fixed top-0 right-full bg-accent/50 transition-all">
         </div>

         <button @click="toggleMobileNav" class="md:hidden z-20">
            <img class="h-5 w-5" src="/src/imgs/mobile-nav-menu.svg" alt="mobile-nav-menu">
         </button>

      </nav>

      <!-- title -->
      <main class="container text-center py-24 max-sm:py-8"  v-html="htmlTitle">
      </main>

   </header>

</template>

<script setup>
import { ref } from 'vue'
import router from "/src/router"

const accueilTitleHTML = `
   <h3>
      Une <span class="text-primary">micro-agence</span> pour créer <span class="text-primary">sur
      mesure</span> votre
   </h3>
   <h1>
      Application Mobile ou Web
   </h1>
`
const realisationsTitleHTML = "<h1>Réalisations</h1>"
const expertiseTitleHTML = "<h1>Expertise</h1>"
const tarifsTitleHTML = "<h1>Tarifs</h1>"
const contactTitleHTML = "<h1>Contact</h1>"

const htmlTitle = ref(accueilTitleHTML)

const accueil = () => {
   // toggleMobileNav()
   htmlTitle.value = `
      <h3>
         Une <span class="text-primary">micro-agence</span> pour créer <span class="text-primary">sur
         mesure</span> votre
      </h3>
      <h1>
         Application Mobile ou Web
      </h1>
   `
   router.push('/')
}

const realisations = () => {
   // toggleMobileNav()
   htmlTitle.value = realisationsTitleHTML
   router.push('/realisations')
}

const expertise = () => {
   // toggleMobileNav()
   htmlTitle.value = expertiseTitleHTML
   router.push('/expertise')
}

const tarifs = () => {
   // toggleMobileNav()
   htmlTitle.value = tarifsTitleHTML
   router.push('/tarifs')
}

const contact = () => {
   // toggleMobileNav()
   htmlTitle.value = contactTitleHTML
   router.push('/contact')
}

const isNavOpen = ref(false)

function toggleMobileNav() {
   isNavOpen.value = !isNavOpen.value
}
</script>
