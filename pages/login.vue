<template>
    <div class="login-container mx-auto">
        <form class="container bg-white rounded-md p-8 ">
            <h1 class="py-2 pb-16 font-bold text-center">Login</h1>
            <div class="container flex flex-col">
                <label class="label-input">Email</label>
                <div class="flex p-2  gap-2 border-b-2">
                    <img src="@/assets/media/user.svg" class="w-4">
                    <input class="py-1  focus:outline-none grow" placeholder="Type your email" autocomplete="email"
                        type="text" v-model="user.email" />
                </div>
                <span class="text-red-700">{{ emailError }}</span>
                <label class="label-input mt-8">Password</label>
                <div class="flex p-2 gap-2 border-b-2">
                    <img src="@/assets/media/lock.svg" class="w-4">
                    <input class="py-1  focus:outline-none grow" placeholder="Type your password"
                        autocomplete="current-password" type="password" v-model="user.password" />
                </div>
                <span class="text-red-700">{{ passwordError }}</span>
                <!-- <div v-for="error in errors" class="text-red-800">{{ error }}</div> -->
                <div class="flex justify-between w-full">
                    <span class="label-input pb-8"><a href="#">Not signed up before?</a></span>
                    <span class="label-input pb-8"><a href="#">Forgot password?</a></span>
                </div>
                <div class="rounded-full flex justify-center relative overflow-hidden h-12 w-64 mx-auto">
                    <div class="gradient-div-btn-bg -z-1"></div>
                    <button class="z-2 relative text-white font-bold w-full disabled:bg-black" @click.prevent="checkForm"
                        :disabled="emailError != '' || passwordError != ''">LOGIN</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';
const { signInUser } = useAuthStore(); // use authenticateUser action from  auth store

const { firebaseUser } = storeToRefs(useAuthStore());

// My code start
definePageMeta({
    layout: "login"
})
const user = ref({
    email: '',
    password: '',
});
const userTyped = ref({
    email: 0,
    password: 0,
})
const emailError = computed(() => {
    if (user.value.email === '' && userTyped.value.email) {
        return 'Please enter your email.';
    }
    userTyped.value.email = 1;
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
    const response = await signInUser(user.value);
    if (firebaseUser.value) {
        router.push("/");
    }
    else if ("errorMessage" in response) {
        alert(response.errorMessage);
    }
    else{
        console.log(response)
    }
}

</script>

<style scoped></style>