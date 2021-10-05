If this SvelteKit project is deployed with the zero-config SvelteKit preset, the above variable will be undefined.

If I change the framework preset to Vite, `VITE_VERCEL_ENV` will be defined, but that makes me lose the zero-config benefit as I have to override build commands, output directory etc.

Exposing the `VITE_`-prefixed system environment variables to the SvelteKit framework preset would solve this for SvelteKit users.
