<template>
    <div class="container mx-auto px-4 py-8">
      <div v-if="product" class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2">
          <img :src="product.thumbnail" alt="Product Thumbnail" class="w-full rounded-lg mb-4">
          <div class="grid grid-cols-4 gap-4">
            <template v-for="(image, index) in product.images" :key="index">
              <img :src="image" alt="Product Image" class="w-full rounded-lg cursor-pointer">
            </template>
          </div>
        </div>
        <div class="md:w-1/2 md:pl-8">
          <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
          <p class="text-gray-600 mb-4">{{ product.description }}</p>
          <p class="text-lg text-gray-800 mb-4">Price: ${{ product.price }}</p>
          <p class="text-sm text-gray-600 mb-4">Rating: {{ product.rating }}</p>
          <p class="text-sm text-gray-600 mb-4">Stock: {{ product.stock }}</p>
          <p class="text-sm text-gray-600 mb-4">Brand: {{ product.brand }}</p>
          <p class="text-sm text-gray-600 mb-4">Category: {{ product.category }}</p>
        </div>
      </div>
      <div v-else class="text-center">
        Loading...
      </div>
    </div>
  </template>

<script setup lang="ts">

import { useProductsStore, type Product } from '~/store/products';
import { storeToRefs } from 'pinia';

const { getProducts, getThatProduct } = useProductsStore();
const { products } = storeToRefs(useProductsStore())
const route = useRoute();
const product = ref<Product | null>(null);

onMounted(async () => {
    if (!products.value.length) {
        await getProducts();
    }
    product.value = getThatProduct(route.params.id as string)
});
</script>

<style lang="scss" scoped></style>