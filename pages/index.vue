<template>
    <NuxtLink to="/product/" class="loginBtn">See Products</NuxtLink>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
// import { useProductsStore } from '~/store/products';
const { initUser } = useAuthStore()
// const { getProducts } = useProductsStore()
onMounted(async () => {
    initUser();
    // await getProducts();
})

</script>

<style scoped></style>