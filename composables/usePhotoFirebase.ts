import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
export default function () {
    const uploadPhoto = (photo: File, id: String) => {
        const storage = getStorage();
        const storageRef = ref(storage, `users/photos/${id}.jpg`);
        uploadBytes(storageRef, photo).then((snapshot) => {
            console.log(snapshot)
        }).then(() => {
            updatePhotoUrl(id)
        }).catch((error) => {
            console.log(error.code)
        })

    }
    const updatePhotoUrl = (id: String) => {
        const storage = getStorage();
        const storageRef = ref(storage, `users/photos/${id}.jpg`);
        getDownloadURL(storageRef).then(async (url) => {
            updateUserProfile(url);
        }).catch((error) => {
            console.log(error.code)
        })
    }
    const updateUserProfile = (photoURL: string | null) => {
        const auth = getAuth()
        if (auth.currentUser) {
            updateProfile(auth.currentUser, {
                photoURL
            }).catch(() => {
                console.log("Error updating")
            })
        }
    }
    return { uploadPhoto }
}