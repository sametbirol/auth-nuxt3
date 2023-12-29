<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <NuxtLink to="/" class="font-bold">Authenticator</NuxtLink>
                <ul class="flex gap-4 p-0">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li v-if="isAuthenticated">
                        <NuxtLink to="/profile">Profile</NuxtLink>
                    </li>
                    <li v-if="!isAuthenticated">
                        <NuxtLink to="/login" class="loginBtn">Login</NuxtLink>
                    </li>
                    <li v-else>
                        <NuxtLink to="/logout" class="loginBtn">Logout</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="flex justify-center">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';
const { isAuthenticated } = storeToRefs(useAuthStore());
const { initUser } = useAuthStore()
onBeforeMount(async () => {
    initUser();
})

</script>

<style scoped></style>