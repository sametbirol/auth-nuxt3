<template>
    <div class="flex gap-4 p-4 flex-wrap justify-between" >
        <CardProduct v-for="product in products.products" :product="product"> </CardProduct>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
const { initUser } = useAuthStore()
onMounted(() => {
    initUser();
})
const { data: products } = await useFetch('https://dummyjson.com/products')

</script>

<style scoped></style>