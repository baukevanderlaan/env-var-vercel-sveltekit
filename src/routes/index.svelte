<script>
  // Due to how Vite works, we can't import variables directly into .svelte files, so we have to import them from a .js file.
  // See https://kit.svelte.dev/faq#env-vars
  import { VITE_VERCEL_ENV } from "../env";
</script>

<code>VITE_VERCEL_ENV: <b>{VITE_VERCEL_ENV}</b></code>
<p>
  If this SvelteKit project is deployed with the zero-config SvelteKit preset,
  the above variable will be undefined.
</p>
<p>
  If I change the framework preset to Vite, VITE_VERCEL_ENV will be defined, but
  that makes me lose the zero-config benefit as I have to override build
  commands, output directory etc.
</p>
