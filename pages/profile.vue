<template>
    <div>
        <pre>
            <code >
                {{ firebaseUser }}
            </code>
        </pre>
        <div class="absolute left-1/4 rounded w-1/2 h-1/2 p-8 bg-red-200 flex flex-col items-center">
            <img :src="firebaseUser.providerData[0].photoURL || 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'"
                class="w-24" />
            <input type="file" ref="photoUpload" accept="image/png, image/jpeg">
            <button @click.prevent="handleUpdate">Update</button>
            <div class="flex flex-col gap-4">
                <p>Email: {{ firebaseUser.providerData[0].email }}</p>
                <p>Phone: {{ firebaseUser.providerData[0].phoneNumber | 'empty' }}</p>
                <p>Name: {{ firebaseUser.providerData[0].displayName | 'empty' }}</p>

            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';
import { usePhotoStore } from '~/store/photo';
const { firebaseUser } = storeToRefs(useAuthStore());
const { uploadPhoto } = usePhotoStore();
definePageMeta({
    middleware: 'auth',
})
const photoUpload = ref(null)
const handleUpdate = () => {
    uploadPhoto(photoUpload.value.files[0], firebaseUser.value.providerData[0].email);
}
// const email =  computed(() => firebaseUser?.providerData[0]?.email)
</script>

<style scoped></style>