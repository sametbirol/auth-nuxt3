<template>
    <div class="login-container mx-auto">
        <div>You are logged out and wil be redirected to home page in {{ count }} seconds.</div>
        <div>Click <NuxtLink to="/" class="underline hover:text-green-700">here</NuxtLink> if you want to go Home now.</div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '~/store/auth';
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store


definePageMeta({
    layout: "login"
})
const count = ref(5);

const countdown = setInterval(() => {
    if (count.value <= 0) {
        clearInterval(countdown);
    } else {
        count.value--;
    }
}, 1000);
const router = useRouter();
onMounted(async () => {
    await logUserOut();
})
watch(count,async (newValue) => {
    if(newValue <= 0) {
        router.push("/")
    }
})

</script>

<style scoped></style>