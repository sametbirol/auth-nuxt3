<template>
    <NuxtLink :to="`/product/${id}`"
        class="flex flex-col rounded-xl bg-gray-100 w-48 hover:scale-110 overflow-hidden shadow ">
        <img :src="thumbnail" class="h-48 object-cover">
        <p class="w-full text-center p-1 font-bold ellipsis">{{ title }}</p>
        <p class="w-full p-2 text-sm overflow-hidden ellipsis">{{ description }}</p>
        <p class="w-full text-center p-1 font-semibold ">${{ price }}
            <span class="text-sm">{{ discountPercentage }}% off</span>
        </p>
        <CardRating class="self-center" :rating="rating" :limit="5" :id="id"></CardRating>

    </NuxtLink>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { Product } from '~/store/products'
const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true,
    }
})

const { id, title, description, price, rating, thumbnail, discountPercentage } = props.product
</script>

<style scoped>
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>