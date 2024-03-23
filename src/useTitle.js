import { ref } from 'vue'



export const htmlTitle = ref(`
   <h3>
      Une <span class="text-primary">micro-agence</span> pour créer <span class="text-primary">sur
      mesure</span> votre
   </h3>
   <h1>
      Application Mobile ou Web
   </h1>`
)

export function useTitle() {
   return {
      htmlTitle,
   }
}
