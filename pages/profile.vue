<template>
    <div>
        <div class="container mx-auto px-4 py-8">
            <div class="flex items-center flex-col justify-center mb-8">
                <img :src="user.photoURL" alt="Profile Picture" class="w-48 h-48 rounded-full">
                <button @click="showModal = true" class="px-2 py-1 bg-blue-500 text-white rounded-md">Edit</button>
                <div v-if="showModal"
                    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div class="relative bg-white rounded-lg p-8 m-8">
                        <button @click="showModal = false"
                            class="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white rounded-md">Close</button>
                        <div class="flex flex-col items-center">
                            <img :src="previewImage" class="w-48 h-48 rounded-full" />
                            <input type="file" ref="photoUpload" accept="image/png, image/jpeg" class="mb-4"
                                @change="handleFileChange">
                            <button @click.prevent="handleUpdate"
                                class="px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 class="text-xl font-semibold mb-2">Profile Information</h2>
                    <div class="bg-white rounded-lg p-4 shadow">
                        <p><span class="font-semibold">Email:</span> {{ user.email }}</p>
                        <p><span class="font-semibold">Email Verified:</span> {{ user.emailVerified ? 'Yes' : 'No' }}
                        </p>
                        <p><span class="font-semibold">Provider:</span> {{ user.providerData[0].providerId }}</p>
                        <p><span class="font-semibold">Anonymous:</span> {{ user.isAnonymous ? 'Yes' : 'No' }}</p>
                        <p><span class="font-semibold">UID:</span> {{ user.uid }}</p>
                        <p><span class="font-semibold">Created At:</span> {{ formatDate(user.createdAt) }}</p>
                        <p><span class="font-semibold">Last Login At:</span> {{ formatDate(user.lastLoginAt) }}</p>
                    </div>

                </div>
                <!-- Other user-related information or actions -->
            </div>
            <div class="relative mt-8">
                <!-- <button @click="showUpdateSection = !showUpdateSection"
                    class="absolute top-0 right-0 px-2 py-1 bg-blue-500 text-white rounded-md">Edit</button>
                <div v-if="showUpdateSection"
                    class="absolute left-1/4 top-20 rounded w-1/2 p-8 bg-red-200 flex flex-col items-center">
                    <img :src="user.providerData[0].photoURL || 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'"
                        class="w-48" />
                    <input type="file" ref="photoUpload" accept="image/png, image/jpeg">
                    <button @click.prevent="handleUpdate"
                        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
                </div> -->
            </div>
        </div>
        <!-- <div class="absolute left-1/4 rounded w-1/2 h-1/2 p-8 bg-red-200 flex flex-col items-center">
            <img :src="user.providerData[0].photoURL || 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'"
                class="w-48" />
            <input type="file" ref="photoUpload" accept="image/png, image/jpeg">
            <button @click.prevent="handleUpdate">Update</button>
            <div class="flex flex-col gap-4">
                <p>Email: {{ user.providerData[0].email }}</p>
                <p>Phone: {{ user.providerData[0].phoneNumber | 'empty' }}</p>
                <p>Name: {{ user.providerData[0].displayName | 'empty' }}</p>

            </div>
        </div> -->
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth';
const { user } = storeToRefs(useAuthStore());
const { uploadPhoto } = usePhotoFirebase();
definePageMeta({
    middleware: 'auth',
})
const photoUpload = ref(null)
const handleUpdate = () => {
    uploadPhoto(photoUpload.value.files[0], user.value.providerData[0].email);
}
const formatDate = (timestamp) => {
    // Add your date formatting logic here
    return new Date(parseInt(timestamp)).toLocaleString();
};

const previewImage = ref(null);
const showModal = ref(false);
const handleFileChange = () => {
    const file = photoUpload.value.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};
</script>

<style scoped>
/* Add your Tailwind CSS classes here */
/* Example: */
.container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

/* Customize styles as needed */
</style>