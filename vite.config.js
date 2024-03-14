import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Non c'è bisogno di differenziare tra sviluppo e produzione in questo caso
const base = '/';

export default defineConfig({
  plugins: [vue()],
  base, // Uso la variabile 'base' qui, ma potresti anche semplicemente scrivere 'base: "/"'
});