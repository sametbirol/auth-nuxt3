<template>
    <div class="flex gap-8 p-16 flex-wrap justify-center bg-gray-400 h-full">
        <CardProduct v-for="product in products" :product="product"> </CardProduct>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useProductsStore } from '~/store/products';
const { getProducts } = useProductsStore()
const { products } = storeToRefs(useProductsStore())
onMounted(async () => {
    await getProducts();
})
</script>

<style scoped></style>