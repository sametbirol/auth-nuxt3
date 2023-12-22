<template>
    <Transition name="slide-down">
        <div v-if="props.modelValue" class="w-1/2 flex justify-between items-center text-white rounded p-2 gap-4 absolute  top-4 left-1/4"
            :style="{ backgroundColor: getColor }">
            <img :src="`/media/${errorColor}.svg`" class="w-8" />
            <p >{{ error }}</p>
            <button class=" px-3 py-2 rounded-md text-sm text-white" @click.prevent="$emit('close')">X</button>
        </div>
    </Transition>
</template>

<script setup>
const emit = defineEmits(['close'])
const ColorMap = {
    'green': '#3F784C',
    'yellow': '#D5E2BC',
    'red': '#B20D30',
}


const props = defineProps({
    error: String,
    errorColor: String,
    modelValue: Boolean
})
const getModelValue = computed(() => {
    return props.modelValue;
})
watch(getModelValue, (newValue, oldValue) => {
    if (newValue) {
        setTimeout(() => {
            emit('close');
        },3000)
    }
})
const getColor = computed(() => {
    return ColorMap[props.errorColor] || 'blue';
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease-in;
}

.slide-down-enter-from {
    opacity: 0;
    transform: translate(0, -200px);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translate(0, -200px);
}
</style>