<template>

   <section class="container  py-20 max-lg:py-10">

      <!-- Food-Admin -->
      <div class="w-full">

         <h1>
               Food-Admin
            </h1>

      <div class="flex max-lg:flex-col-reverse gap-6 w-full">

         <div class="w-full flex flex-col gap-8 max-sm:gap-2">

            <!-- members -->
            <div class="flex flex-col max-lg:flex-row max-lg:justify-between gap-6">
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/reda.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Réda
                        </h6>
                        <p class="max-sm:text-xs">Développeur</p>
                    </div>
                </div>
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/jean-christophe.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Jean-Christophe
                        </h6>
                        <p class="max-sm:text-xs">Chef de projet</p>
                    </div>
                </div>
            </div>

            <!-- about -->
            <div class="flex gap-4">
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/calendar-vector.svg" alt="calendar">
                    <p class="max-sm:text-xs">
                        10/2023 - 03/2024
                    </p>
                </span>
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/person-vector.svg" alt="person">
                    <p class="max-sm:text-xs">
                        Hôpitaux de Toulouse
                    </p>
                </span>
            </div>
                
            <!-- description -->
            <div>
                <p class="text-lg">
                    Cette application a été réalisée dans une coopération avec les services de diabétologie et de nutrition
                    des Hôpitaux de Toulouse.<br/>

                    Elle permet aux diététicien(ne)s de modifier le contenu de la base de données alimentaire utilisée
                    par toutes les applications du service. Elle peut scanner en direct les code-barres des aliments packagés
                    et récupérer les informations disponibles dans OpenFoodFacts.<br/>

                    Food-Admin s'interface avec la base de données nutritionnelle des Hôpitaux de Toulouse.
                    C'est une application codée en React-Native, qui utilise donc les composants
                    natifs des smartphones iOS ou Android pour un rendu et des performances optimaux.<br>
                </p>
            </div>
            
        </div>

        <img class="w-96" src="/src/imgs/projects/food-admin3.png" alt="food-admin">

    </div>

    <div class="mt-8 mb-14">
        <div class="w-full h-0.5 bg-zinc-300"></div>
    </div>

</div>

<!-- SolucesDAO -->
<div class="w-full">
    <div class="flex max-lg:flex-col-reverse gap-6 w-full">
        <div class="w-4/12 max-xl:w-5/12 max-lg:w-full flex flex-col gap-8 max-sm:gap-2">
            <!-- members -->
            <div class="flex flex-col max-lg:flex-row max-lg:justify-between gap-6">
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/jean-christophe.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Jean-Christophe
                        </h6>
                        <p class="max-sm:text-xs">Chef de projet & développeur</p>
                    </div>
                </div>
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/elias.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Elias
                        </h6>
                        <p class="max-sm:text-xs">Développeur</p>
                    </div>
                </div>
            </div>
            <!-- about -->
            <div class="flex gap-4">
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/calendar-vector.svg" alt="calendar">
                    <p class="max-sm:text-xs">
                        07/2023 - 10/2023
                    </p>
                </span>
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/person-vector.svg" alt="person">
                    <p class="max-sm:text-xs">
                        SolucesDAO
                    </p>
                </span>
            </div>
                
            <div>
                <h6>
                    Pointage horaire
                </h6>
                <p class="text-lg">
                    Cette application, commandée par un bureau d'études, réalise le pointage des employés :
                    leur localisation et adresse IP est enregistrée;
                    les employés peuvent déclarer des oublis de pointage, en laissant un message au coordinateur.
                </p>
            </div>
        </div>

        <div class=" w-8/12 max-xl:w-7/12 max-lg:w-full">
            <img class="w-full" src="/src/imgs/projects/solucesdao3.png" alt="solucesdao">
        </div>
    </div>

    <p class="py-4 text-lg max-sm:text-base">
        Les employés peuvent fixer des horaires de rappel : ils recevront alors un email de rappel à l'heure prévue, les jours ouvrables.<br/>
        Le coordinateur a un tableau des pointage de chaque journée ; ce tableau évolue en temps-réel.
        Il peut examiner les messages liés aux oublis et corriger les horaires si nécessaire.
    </p>
</div>

<div class="mt-8 mb-14">
    <div class="w-full h-0.5 bg-zinc-300"></div>
</div>



<!-- Nutri-Expert -->
<div class="w-full">
    <div class="flex max-lg:flex-col-reverse gap-6 w-full">
        <div class="w-4/12 max-xl:w-5/12 max-lg:w-full flex flex-col gap-8 max-sm:gap-2">
            <!-- members -->
            <div class="flex flex-col max-lg:flex-row max-lg:justify-between gap-6">
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/jean-christophe.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Jean-Christophe
                        </h6>
                        <p class="max-sm:text-xs">Chef de projet & développeur</p>
                    </div>
                </div>
            </div>
            <!-- about -->
            <div class="flex gap-4">
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/calendar-vector.svg" alt="calendar">
                    <p class="max-sm:text-xs">
                        12/2022 - 06/2023
                    </p>
                </span>
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/person-vector.svg" alt="person">
                    <p class="max-sm:text-xs">
                        Hôpitaux de Toulouse
                    </p>
                </span>
            </div>
                
            <div>
                <h6>
                    Nutri-Expert
                </h6>
                <p class="text-lg">
                    Nutri-Expert a été développé dans une collaboration avec les services de Diabétologie et de Nutrition des Hôpitaux de Toulouse.<br/>
                    Il utilise un algorithme de recherche heuristiquement ordonnée pour "réparer" les repas,
                    c'est à dire trouver les actions qui vont le rendre équilibré.
                </p>
            </div>
        </div>

        <div class=" w-8/12 max-xl:w-7/12 max-lg:w-full">
            <img class="w-full" src="/src/imgs/project-1.png" alt="project-1">
        </div>
    </div>

    <p class="py-4 text-lg max-sm:text-base">
        Nutri-Expert utilise également la Théorie des Possibilités pour modéliser l'imprécision des données et la propager dans les calculs.
        En nutrition de nombreuses valeurs peuvent être imprécisément définies : poids des portions, valeurs nutritionnelles des aliments.
        En intégrant cette imprécision dans les calculs à l'aide d'un modèle solide, on la prend en compte sans la caricaturer.
        Des gauges spécifiques permettent de visualiser les résultats.<br/>
        L'efficacité médicale de Nutri-Expert a été validée par des protocoles médicaux randomisés.<br/>
        Nutri-Expert a été industrialisé dans le cadre d'une certification CE médical classe 2.
    </p>
</div>





<div class="mt-8 mb-14">
    <div class="w-full h-0.5 bg-zinc-300"></div>
</div>

<!-- MiTab -->
<div class="w-full">
    <div class="flex max-lg:flex-col-reverse gap-6 w-full">
        <div class="w-4/12 max-xl:w-5/12 max-lg:w-full flex flex-col gap-8 max-sm:gap-2">
            <!-- members -->
            <div class="flex flex-col max-lg:flex-row max-lg:justify-between gap-6">
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/jean-christophe.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Jean-Christophe
                        </h6>
                        <p class="max-sm:text-xs">Chef de projet & développeur</p>
                    </div>
                </div>
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/reda.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Réda
                        </h6>
                        <p class="max-sm:text-xs">Développeur</p>
                    </div>
                </div>
            </div>
            <!-- about -->
            <div class="flex gap-4">
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/calendar-vector.svg" alt="calendar">
                    <p class="max-sm:text-xs">
                        09/2022 - 03/2023
                    </p>
                </span>
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/person-vector.svg" alt="person">
                    <p class="max-sm:text-xs">
                        Miyengue SAS
                    </p>
                </span>
            </div>
                
            <div>
                <h6>
                    MiTab
                </h6>
                <p class="text-lg max-sm:text-base">
                    Application de visio-communication pour personnes âgées.<br/>
                    Elle fonctionne sous forme de Progressive Web App et utilise le protocole WebRTC et les Push notifications.<br/>
                </p>
            </div>
        </div>

        <div class=" w-8/12 max-xl:w-7/12 max-lg:w-full">
            <img class="w-full" src="/src/imgs/projects/mytab1.jpg" alt="mytab">
        </div>
    </div>

    <!-- <p class="py-4 text-lg max-sm:text-base">
    </p> -->
</div>


<div class="mt-8 mb-14">
    <div class="w-full h-0.5 bg-zinc-300"></div>
</div>

<!-- Live-Anatomy -->
<div class="w-full">
    <div class="flex max-lg:flex-col-reverse gap-6 w-full">
        <div class="w-4/12 max-xl:w-5/12 max-lg:w-full flex flex-col gap-8 max-sm:gap-2">
            <!-- members -->
            <div class="flex flex-col max-lg:flex-row max-lg:justify-between gap-6">
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/jean-christophe.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Jean-Christophe
                        </h6>
                        <p class="max-sm:text-xs">Chef de projet & développeur</p>
                    </div>
                </div>
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/reda.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Réda
                        </h6>
                        <p class="max-sm:text-xs">Développeur</p>
                    </div>
                </div>
            </div>
            <!-- about -->
            <div class="flex gap-4">
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/calendar-vector.svg" alt="calendar">
                    <p class="max-sm:text-xs">
                        05/2020 - 10/2021
                    </p>
                </span>
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/person-vector.svg" alt="person">
                    <p class="max-sm:text-xs">
                        Live-Anatomy SAS
                    </p>
                </span>
            </div>
                
            <div>
                <h6>
                    Live-Anatomy
                </h6>
                <p class="text-lg max-sm:text-base">
                    Application web commandée par la société <a href="https://liveanatomy.fr">Live-Anatomy</a> à destination des kinésithérapeutes, osthéopathes
                    et leurs patients. Elle numérise toute l'activité médicale et administrative autour des patients.
                </p>
            </div>
        </div>

        <div class=" w-8/12 max-xl:w-7/12 max-lg:w-full">
            <img class="w-full" src="/src/imgs/projects/liveanatomy2.png" alt="diabphone">
        </div>
    </div>

    <p class="py-4 text-lg max-sm:text-base">
        - visualisation 3D interactive des imageries scanner et IRM<br/>
        - cartes interactives du corps humain<br/>
        - prise vocale de comptes rendus<br/>
        - lexiques interactifs avec modèles 3D
    </p>
</div>




<div class="mt-8 mb-14">
    <div class="w-full h-0.5 bg-zinc-300"></div>
</div>

<!-- MHLink -->
<div class="w-full">
    <div class="flex max-lg:flex-col-reverse gap-6 w-full">
        <div class="w-4/12 max-xl:w-5/12 max-lg:w-full flex flex-col gap-8 max-sm:gap-2">
            <!-- members -->
            <div class="flex flex-col max-lg:flex-row max-lg:justify-between gap-6">
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/jean-christophe.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Jean-Christophe
                        </h6>
                        <p class="max-sm:text-xs">Développeur</p>
                    </div>
                </div>
            </div>
            <!-- about -->
            <div class="flex gap-4">
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/calendar-vector.svg" alt="calendar">
                    <p class="max-sm:text-xs">
                        05/2015 - 10/2019
                    </p>
                </span>
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/person-vector.svg" alt="person">
                    <p class="max-sm:text-xs">
                        MHComm SAS
                    </p>
                </span>
            </div>
                
            <div>
                <h6>
                    MHLink
                </h6>
                <p class="text-lg max-sm:text-base">
                    Application de télésurveillance de patients. Elle inclut un éditeur de parcours de soins, un éditeur de questionnaires.
                    Les patients inclus dans un parcours de soins doivent remplir des questionnaires sur leur état à des moments définis
                    par le parcours de soins dans lequel ils sont inclus.
                    Des relances par SMS permettent une meilleure qualité de recueil d'information et une remontée des alertes.
                </p>
            </div>
        </div>

        <div class=" w-8/12 max-xl:w-7/12 max-lg:w-full">
            <img class="w-full" src="/src/imgs/projects/mhlink1.png" alt="diabphone">
        </div>
    </div>

    <!-- <p class="py-4 text-lg max-sm:text-base">
    </p> -->
</div>





<div class="mt-8 mb-14">
    <div class="w-full h-0.5 bg-zinc-300"></div>
</div>

<!-- Diabphone -->
<div class="w-full">
    <div class="flex max-lg:flex-col-reverse gap-6 w-full">
        <div class="w-4/12 max-xl:w-5/12 max-lg:w-full flex flex-col gap-8 max-sm:gap-2">
            <!-- members -->
            <div class="flex flex-col max-lg:flex-row max-lg:justify-between gap-6">
                <div class="flex gap-4 max-sm:gap-2 items-center">
                    <img class="h-24 w-24 max-sm:h-12 max-sm:w-12 border-2 max-sm:border border-primary rounded-full"
                        src="/src/imgs/members/jean-christophe.png" alt="team-member">
                    <div class="">
                        <h6 class="max-sm:text-xs">
                            Jean-Christophe
                        </h6>
                        <p class="max-sm:text-xs">Chef de projet & développeur</p>
                    </div>
                </div>
            </div>
            <!-- about -->
            <div class="flex gap-4">
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/calendar-vector.svg" alt="calendar">
                    <p class="max-sm:text-xs">
                        08/2013 - 06/2014
                    </p>
                </span>
                <span class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="/src/imgs/person-vector.svg" alt="person">
                    <p class="max-sm:text-xs">
                        Hôpitaux de Toulouse
                    </p>
                </span>
            </div>
                
            <div>
                <h6>
                    Diabphone
                </h6>
                <p class="text-lg max-sm:text-base">
                    Diabphone est un carnet de surveillance pour diabétique, développé en partenariat avec le service de Diabétologie
                    des Hôpitaux de Toulouse. Diabphone est disponible sous forme d'une application iOS pour iPhone et iPad.
                    Elle propose un dispositif complet d’insulino-thérapie fonctionnelle, qui permet aux diabétiques de type 1 de calculer,
                    sous la supervision de leur médecin, leurs doses d’insuline en fonction des glucides absorbés pendant les repas.
                </p>
            </div>
        </div>

        <div class=" w-8/12 max-xl:w-7/12 max-lg:w-full">
            <img class="w-full" src="/src/imgs/projects/diabphone.png" alt="diabphone">
        </div>
    </div>

    <p class="py-4 text-lg max-sm:text-base">
        Diabphone propose des fonctions de saisie et d’impression, une sauvegarde automatique, continue et anonyme des données
        de l’utilisateur sur un serveur sécurisé. Le médecin traitant dispose d’un accès web sécurisé au carnet de son patient, si ce dernier le désire.<br/>
        
        Diabphone a reçu en 2014 <a href="https://www.federationdesdiabetiques.org/federation/actualites/l-application-diabphone-parmi-les-laureats-des-trophees-de-la-sante-mobile">le trophée de la meilleure application mobile de santé</a>, catégorie "Diabète".
    </p>
</div>

</section>
</template>