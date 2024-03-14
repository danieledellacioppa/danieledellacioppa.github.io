import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importazione di CSS globale
import './assets/style.css' // Assicurati di aver spostato il tuo CSS qui

const app = createApp(App)

app.use(router) // Utilizza Vue Router

app.mount('#app')

