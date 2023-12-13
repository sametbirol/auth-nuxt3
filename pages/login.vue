<template>
    <div class="login-container mx-auto">
        <form class="container bg-white rounded-md p-8 ">
            <h1 class="py-2 pb-16 font-bold text-center">Login</h1>
            <div class="container flex flex-col">
                <label class="label-input">Username</label>
                <div class="flex p-2  gap-2 border-b-2">
                    <img src="@/assets/media/user.svg" class="w-4">
                    <input class="py-1  focus:outline-none grow" placeholder="Type your username" autocomplete="username"
                        type="text" v-model="user.username" />
                </div>
                <span class="text-red-700">{{ usernameError }}</span>
                <label class="label-input mt-8">Password</label>
                <div class="flex p-2 gap-2 border-b-2">
                    <img src="@/assets/media/lock.svg" class="w-4">
                    <input class="py-1  focus:outline-none grow" placeholder="Type your password"
                        autocomplete="current-password" type="password" v-model="user.password" />
                </div>
                <span class="text-red-700">{{ passwordError }}</span>
                <!-- <div v-for="error in errors" class="text-red-800">{{ error }}</div> -->
                <span class="text-right label-input pb-8"><a href="#">Forgot password?</a></span>
                <div class="rounded-full flex justify-center relative overflow-hidden h-12 w-64 mx-auto">
                    <div class="gradient-div-btn-bg -z-1"></div>
                    <button class="z-2 relative text-white font-bold w-full disabled:bg-black" @click.prevent="checkForm"
                        :disabled="usernameError != '' || passwordError != ''">LOGIN</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore());

// My code start
definePageMeta({
    layout: "login"
})
const user = ref({
    username: '',
    password: '',
});
const userTyped = ref({
    username: 0,
    password: 0,
})
const usernameError = computed(() => {
    if (user.value.username === '' && userTyped.value.username) {
        return 'Please enter your username.';
    }
    userTyped.value.username = 1;
    return '';
});
const passwordError = computed(() => {
    if (user.value.password === '' && userTyped.value.password) {
        return 'Please enter your password.';
    }
    userTyped.value.password = 1;
    return '';
});

// END
const router = useRouter();
const checkForm = async (e) => {
    await authenticateUser(user.value);
    if (authenticated) {
        router.push("/")
    }
}

</script>

<style scoped></style>