<template>
    <div>
        <div class="flex self-start">
            <svg v-for="index in limit" :key="index" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 51 48">
                <defs>
                    <linearGradient :id="`grad-${index}-${id}`">
                        <stop v-bind:offset="`${fillPercentage(index)}%`" stop-color="yellow" />
                        <stop v-bind:offset="`${fillPercentage(index)}%`" stop-color="grey" />
                    </linearGradient>
                </defs>
                <path :fill="`url(#grad-${index}-${id})`" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
            </svg>
        </div>
        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 p-2">{{ rating }} out of 5</p>
    </div>
</template>

<script setup>
const { rating, limit } = defineProps({
    rating: Number,
    limit: Number,
    id: Number,
})
const fillPercentage = (index) => {
    let result = Math.floor(Math.max(0, Math.min(1, (rating - index + 1))) * 100)
    return result
}
</script>

<style scoped>
.star {
    position: relative;
    display: inline-block;

    margin-left: .9em;
    margin-right: .9em;
    margin-bottom: 1.2em;

    border-right: .3em solid transparent;
    border-bottom: .7em solid #FC0;
    border-left: .3em solid transparent;

    /* Controlls the size of the stars. */
    font-size: 12px;

    &:before,
    &:after {
        content: '';

        display: block;
        width: 0;
        height: 0;

        position: absolute;
        top: .6em;
        left: -1em;

        border-right: 1em solid transparent;
        border-bottom: .7em solid #FC0;
        border-left: 1em solid transparent;

        transform: rotate(-35deg);
    }

    &:after {
        transform: rotate(35deg);
    }
}
</style>