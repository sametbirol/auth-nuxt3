<template>
    <div class=" flex flex-col rounded-xl bg-gray-100 w-48 hover:scale-110 overflow-hidden shadow ">
        <img :src="images[images.length - 1]" class="w-full h-48">
        <p class="w-full text-center p-1 font-bold">{{ title }}</p>
        <p class="w-full p-2 ellipsis">{{ description }}</p>
        <CardRating class="align-right" :rating="rating" :limit="5" :id="id"></CardRating>
    </div>
</template>

<script setup>
const props = defineProps({
    product: Object,
})
const { id, title, description, price, rating, images } = props.product
</script>

<style scoped>
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>