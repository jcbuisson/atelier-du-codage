<template>
  <section class="container">
    <main
      class="p-16 max-md:p-12 max-sm:p-8 -translate-y-24 max-md:-translate-y-8 bg-white z-10 rounded-xl flex flex-col gap-6 max-md:gap-4"
    >
      <div
        class="flex gap-4 p-12 max-md:p-8 max-sm:p-6 border-zinc-300 border rounded-3xl max-md:flex-col max-md:items-center max-md:text-center"
      >
        <img
          class="h-24 w-24"
          src="/src/imgs/expertise-temps-reel.svg"
          alt="expertise-temps-réel"
        />
        <div class="gap-2">
          <h5>Temps-réel</h5>
          <h6>Le contenu visible est mis à jour en direct.</h6>
          <p>
            Les données sont transmises par des websockets et non des requêtes
            http ; un système publish/subscribe informe les clients des
            changements des données qui les concernent, leur permettant de
            mettre à jour leur contenu en direct
          </p>
          <h6>
            Projets :
            <span class="text-primary">Pointage, MyTab, LiveAnatomy</span>
          </h6>
        </div>
      </div>

      <div
        class="flex gap-4 p-12 max-md:p-8 max-sm:p-6 border-zinc-300 border rounded-3xl max-md:flex-col max-md:items-center max-md:text-center"
      >
        <img
          class="h-24 w-24"
          src="/src/imgs/icons/PWA_color_logo.svg"
          alt="expertise-pwa"
        />
        <div class="gap-2">
          <h5>PWA</h5>
          <h6>Comme des applications, sans les stores</h6>
          <p>
            Les Progressive Web Apps (PWA) sont des applications web qui offrent
            une expérience utilisateur similaire à celle des applications
            natives, mais qui sont accessibles via un navigateur web. Elles
            offrent une installation rapide, une utilisation hors ligne et des
            notifications push, sur mobiles, tablettes et ordinateurs de bureau.
            Les PWA ne nécessitent pas de téléchargement depuis les app stores
            traditionnels, ce qui simplifie leur distribution et leur mise à
            jour.
          </p>
          <h6>Projets : <span class="text-primary">Pointage, MyTab</span></h6>
        </div>
      </div>

      <div
        class="flex gap-4 p-12 max-md:p-8 max-sm:p-6 border-zinc-300 border rounded-3xl max-md:flex-col max-md:items-center max-md:text-center"
      >
        <img
          class="h-24 w-24"
          src="/src/imgs/icons/React-icon.svg"
          alt="expertise-react-native"
        />
        <div class="gap-2">
          <h5>React-Native</h5>
          <h6>Des applications mobiles quasi-natives</h6>
          <p>
            Grâce à son approche basée sur des composants réutilisables et sa
            performance élevée, React Native est largement utilisé par les
            développeurs pour créer des applications mobiles modernes,
            évolutives et efficaces, avec un temps de développement réduit et
            une maintenance simplifiée. Il permet de partager un même code entre
            les deux plateformes iOS et Android, tout en offrant une expérience
            utilisateur fluide et quasi-native.
          </p>
          <h6>Projets : <span class="text-primary">Food-Admin</span></h6>
        </div>
      </div>

      <div
        class="flex gap-4 p-12 max-md:p-8 max-sm:p-6 border-zinc-300 border rounded-3xl max-md:flex-col max-md:items-center max-md:text-center"
      >
        <img
          class="h-24 w-24"
          src="/src/imgs/icons/SVG_Logo.svg"
          alt="expertise-react-native"
        />
        <div class="gap-2">
          <h5>SVG</h5>
          <h6>Des schémas interactifs pour le web</h6>
          <p>
            SVG (Scalable Vector Graphics) est une technologie permettant de
            créer des graphiques vectoriels dynamiques et interactifs pour le
            web. Contrairement aux images bitmap, les graphiques SVG sont
            définis en termes de formes géométriques et de trajectoires, ce qui
            leur permet de s'adapter à différentes résolutions d'écran sans
            perte de qualité.
          </p>
          <p>
            SVG offre une flexibilité exceptionnelle pour créer des animations,
            des cartes, des graphiques et des interfaces utilisateur riches. SVG
            permet également une manipulation aisée via JavaScript et peut être
            stylé avec CSS, pour créer des contenus graphiques hautement
            personnalisables et accessibles sur le web moderne.
          </p>
          <h6>
            Projets : <span class="text-primary">MHLink, LiveAnatomy</span>
          </h6>
        </div>
      </div>
    </main>
  </section>
</template>
