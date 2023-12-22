import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyD_qDxPdN089Wnb3YMdrt2FGwGYAE4a-DM",
        authDomain: "auth-nuxt3-d9ac6.firebaseapp.com",
        projectId: "auth-nuxt3-d9ac6",
        storageBucket: "auth-nuxt3-d9ac6.appspot.com",
        messagingSenderId: "271396117884",
        appId: "1:271396117884:web:6e46a580e870725b1a58f9",
        measurementId: "G-2VDPX9H2JE"
    };

    const app = initializeApp(firebaseConfig)

    // const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const storage = getStorage(app)
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)

    nuxtApp.vueApp.provide('storage', storage)
    nuxtApp.provide('storage', storage)
})