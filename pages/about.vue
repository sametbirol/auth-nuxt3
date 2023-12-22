<template>
    <div>
        <div v-if="firebaseUser">{{ firebaseUser }}</div>
        <div v-else>You are not logged in!</div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';
const { firebaseUser } = storeToRefs(useAuthStore());
</script>

<style scoped></style>