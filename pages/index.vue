<template>
    <div>
        <div v-if="authenticated">{{ user }}</div>
        <div v-else>You are not logged in!</div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated, user } = storeToRefs(useAuthStore());

</script>

<style scoped></style>