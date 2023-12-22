<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <NuxtLink to="/" class="font-bold">Authenticator</NuxtLink>
                <ul class="flex gap-4 p-0">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li v-if="!firebaseUser">
                        <NuxtLink to="/login" class="loginBtn">Login</NuxtLink>
                    </li>
                    <li v-else>
                        <NuxtLink to="/logout" class="loginBtn">Logout</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';
const { firebaseUser } = storeToRefs(useAuthStore());

</script>

<style scoped></style>