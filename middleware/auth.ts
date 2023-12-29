import { useAuthStore } from "~/store/auth"
const { isAuthenticated } = storeToRefs(useAuthStore())
export default defineNuxtRouteMiddleware((to, from) => {
    if (!isAuthenticated.value) {
        console.log("sending to login page")
        return navigateTo('/')
    }
})