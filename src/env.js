// Due to how Vite works, we can't import variables directly into .svelte files, so we have to import them from a .js file.
  // See https://kit.svelte.dev/faq#env-vars
export const VITE_VERCEL_ENV = import.meta.env.VITE_VERCEL_ENV