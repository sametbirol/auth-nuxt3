import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
export default function () {
    const uploadPhoto = (photo: File, email: String) => {
        const storage = getStorage();
        const storageRef = ref(storage, `users/photos/${email}`);
        uploadBytes(storageRef, photo).then((snapshot) => {
            console.log(snapshot)
        }).then(() => {
            updatePhotoUrl(email)
        }).catch((error) => {
            console.log(error.code)
        })

    }
    const updatePhotoUrl = (email: String) => {
        const storage = getStorage();
        const storageRef = ref(storage, `users/photos/${email}`);
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