import { defineStore } from 'pinia';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import type { User } from "firebase/auth"
interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    async createUser({ email, password }: UserPayloadInterface) {
      const auth = getAuth();
      const credentials = await
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            this.user = userCredential.user;
            return userCredential;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log({ errorCode, errorMessage })
            return { errorCode, errorMessage }
          })
      // console.log(credentials);
      return credentials
    },
    async signInUser({ email, password }: UserPayloadInterface) {
      const auth = getAuth();
      const credentials = await
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            this.user = userCredential.user;
            return userCredential;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log({ errorCode, errorMessage });
            return { errorCode, errorMessage }
          });
      return credentials;
    },
    initUser() {
      const auth = getAuth();
      const userCookie = useCookie("userCookie");
      const router = useRouter();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          // @ts-ignore
          userCookie.value = user
        } else {
          userCookie.value = null
          router.push("/");
        }
      });
    },
    async signOutUser() {
      const auth = getAuth();
      const result = await auth.signOut();
      this.user = null;
      return result;
    }
  },
  getters: {
    isAuthenticated(): Boolean {
      return this.user != null;
    }
  }
});