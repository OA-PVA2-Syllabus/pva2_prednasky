/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'github-dark-default', /*'min-dark',*/
      light: 'github-light-default', /*'min-light'*/
    },
    transformers: [
      // ...
    ],
  }
})