import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createI18n } from 'vue-i18n'
import fr from './locale/fr.json'
import en from './locale/en.json'
import router from './router'

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    messages: { fr, en }
  })
createApp(App).use(i18n).use(router).mount('#app')
