import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { VueFire } from 'vuefire'

import App from './App.vue'
import router from './router'

const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG

export const firebaseApp = initializeApp({
    firebaseConfig
})

const db = getFirestore(firebaseApp)
export const usersCollection = collection(db)

const app = createApp(App)

app.use(VueFire, { firebaseApp: firebaseApp, modules: [] })
app.use(createPinia())
app.use(router)

app.mount('#app')
