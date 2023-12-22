import { defineStore } from 'pinia';
import { getStorage, ref, uploadBytes, type UploadResult, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
export const usePhotoStore = defineStore('photo', {
  state: () => ({
  }),
  actions: {
    uploadPhoto(photo: File, email: String) {
      const storage = getStorage();
      const storageRef = ref(storage, `users/photos/${email}`);
      uploadBytes(storageRef, photo).then((snapshot) => {
        console.log(snapshot)
      }).then(() => {
        this.updatePhotoUrl(email);
      })
        .catch((error) => {
          console.log(error.code)
        })

    },
    updatePhotoUrl(email: String) {
      const storage = getStorage();
      const storageRef = ref(storage, `users/photos/${email}`);
      getDownloadURL(storageRef).then(async (url) => {
        this.updateUserProfile(null, url);
      }).catch((error) => {
        console.log(error.code)
      })
    },
    updateUserProfile(displayName: string | null, photoURL: string | null) {
      const auth = getAuth()
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName, photoURL
        }).catch(() => {
          console.log("Error updating")
        })
      }
    },
  }
});