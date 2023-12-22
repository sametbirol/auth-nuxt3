import { useAuthStore } from "~/store/auth"
const { isAuthenticated } = storeToRefs(useAuthStore())
export default defineNuxtRouteMiddleware((to, from) => {
    if (!isAuthenticated.value) {
        return navigateTo('/login')
    }
})