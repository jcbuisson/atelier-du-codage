<template>
  <nav class="bg-white fixed w-full z-20 top-0 left-0">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        class="logo-font text-accent text-2xl max-md:text-lg max-md:text-center max-md:w-full uppercase"
        href="#"
        @click="accueil"
      >
        <!-- L'atelier du<span class="text-primary"> codage </span> -->
        La compagnie des<span class="text-primary"> codeurs </span>
      </a>

      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700"
        >
          <li>
            <a
              class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
              href="#"
              @click="accueil"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
              href="#"
              @click="realisations"
            >
              Réalisations
            </a>
          </li>
          <li>
            <a
              class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
              href="#"
              @click="expertise"
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
              href="#"
              @click="tarifs"
            >
              Tarifs
            </a>
          </li>
          <li>
            <a
              class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
              href="#"
              @click="contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header
    class="bg-light-shade relative overflow-x-hidden md:overflow-y-hidden py-4"
  >
    <nav class="container flex max-md:flex-row justify-between items-center">
      <img
        class="absolute -top-[25%] -left-[10%] max-md:top-0 h-80 w-80 max-md:h-36 max-md:w-36"
        src="/src/imgs/pink-polygon.svg"
        alt="pink-polygon"
      />
      <img
        class="absolute bottom-[10%] left-[25%] h-24 w-24 max-md:h-12 max-md:w-12"
        src="/src/imgs/pink-polygon.svg"
        alt="pink-polygon"
      />
      <img
        class="absolute -top-[20%] right-[40%] max-md:-top-[21%] h-40 w-40 max-md:h-20 max-md:w-20"
        src="/src/imgs/pink-polygon.svg"
        alt="pink-polygon"
      />
      <img
        class="absolute -bottom-[0%] -right-[10%] h-96 w-96 max-md:h-48 max-md:w-48 overflow-y-hidden"
        src="/src/imgs/pink-polygon.svg"
        alt="pink-polygon"
      />

      <!-- THUK -->
      <ul
        :style="{ right: isNavOpen ? 0 : '-100%' }"
        class="flex gap-3 items-center max-md:fixed max-md:flex-col max-md:h-screen max-md:w-[65vw] max-md:py-14 max-md:gap-6 max-md:bg-white max-md:z-30 max-md:top-0 max-md:-right-full transition-all relative"
      >
        <button
          @click="toggleMobileNav()"
          :style="{ display: isNavOpen ? 'block' : 'none' }"
          class="md:hidden z-20 fixed right-0 top-0 py-4 px-8 hidden"
        >
          <img
            class="h-6 w-6"
            src="/src/imgs/mobile-nav-cross.svg"
            alt="mobile-nav-menu"
          />
        </button>

        <li>
          <a
            class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
            href="#"
            @click="accueil"
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
            href="#"
            @click="realisations"
          >
            Réalisations
          </a>
        </li>
        <li>
          <a
            class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
            href="#"
            @click="expertise"
          >
            Expertise
          </a>
        </li>
        <li>
          <a
            class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
            href="#"
            @click="tarifs"
          >
            Tarifs
          </a>
        </li>
        <li>
          <a
            class="mx-2 underline-offset-0 hover:underline hover:underline-offset-2 transition-all nav-link"
            href="#"
            @click="contact"
          >
            Contact
          </a>
        </li>
      </ul>

      <!-- outside click THUK -->
      <div
        @click="toggleMobileNav"
        :style="{ left: isNavOpen ? 0 : '100%' }"
        class="md:hidden h-screen w-[35vw] fixed top-0 left-full bg-accent/50 transition-all z-20"
      ></div>

      <!-- burger button -->
      <button
        @click="toggleMobileNav"
        class="md:hidden z-20 fixed right-8 top-5"
      >
        <img
          class="h-5 w-5"
          src="/src/imgs/mobile-nav-menu.svg"
          alt="mobile-nav-menu"
        />
      </button>
    </nav>

    <!-- title -->
    <main
      class="container text-center py-24 max-md:py-12"
      v-html="htmlTitle"
    ></main>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import router from "/src/router";

const accueilTitleHTML = `
  <h3 style="padding-top: 1rem;">
      Une <span class="text-primary">micro-agence</span> pour créer <span class="text-primary">sur
      mesure</span> votre
   </h3>
   <h1>
      Application Mobile ou Web
   </h1>
`;
const realisationsTitleHTML =
  "<h1 style='padding-top: 1rem;'>Réalisations</h1>";
const expertiseTitleHTML = "<h1 style='padding-top: 1rem;'>Expertise</h1>";
const tarifsTitleHTML = "<h1 style='padding-top: 1rem;'>Tarifs</h1>";
const contactTitleHTML = "<h1 style='padding-top: 1rem;'>Contact</h1>";

const htmlTitle = ref(accueilTitleHTML);
let navlinks;

onMounted(() => {
  navlinks = document.querySelectorAll(".nav-link");
  activateNavLink("accueil");
  console.log("accueil");
  observer.observe(target);
});

const accueil = () => {
  isNavOpen.value = false;

  htmlTitle.value = `
      <h3 style="padding-top: 1rem;">
         Une <span class="text-primary">micro-agence</span> pour créer <span class="text-primary">sur
         mesure</span> votre
      </h3>
      <h1>
         Application Mobile ou Web
      </h1>
   `;

  activateNavLink("accueil");
  router.push("/");
};

const realisations = () => {
  isNavOpen.value = false;
  htmlTitle.value = realisationsTitleHTML;
  activateNavLink("réalisations");

  router.push("/realisations");
};

const expertise = () => {
  isNavOpen.value = false;
  htmlTitle.value = expertiseTitleHTML;
  activateNavLink("expertise");
  isNavOpen.value = false;

  router.push("/expertise");
};

const tarifs = () => {
  isNavOpen.value = false;
  htmlTitle.value = tarifsTitleHTML;
  activateNavLink("tarifs");

  router.push("/tarifs");
};

const contact = () => {
  isNavOpen.value = false;
  htmlTitle.value = contactTitleHTML;
  activateNavLink("contact");

  router.push("/contact");
};

const activateNavLink = (linkName) => {
  navlinks.forEach((element) => {
    if (element.textContent.trim().toLowerCase() === linkName) {
      element.classList.add("underline");
      element.classList.add("underline-offset-2");
    } else {
      element.classList.remove("underline");
      element.classList.remove("underline-offset-2");
    }
  });
};

const isNavOpen = ref(false);

function toggleMobileNav() {
  isNavOpen.value = !isNavOpen.value;
}
// Probably optional
onUnmounted(() => {
  observer.disconnect();
});
</script>
