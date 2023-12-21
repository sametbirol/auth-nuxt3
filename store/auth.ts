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
    firebaseUser: null as User | null,
  }),
  actions: {
    async createUser({ email, password }: UserPayloadInterface) {
      const auth = getAuth();
      const credentials = await
        createUserWithEmailAndPassword(auth, email, password)
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage })
          })
      return credentials
    },
    async signInUser({ email, password }: UserPayloadInterface) {
      const auth = getAuth();
      const credentials = await
        signInWithEmailAndPassword(auth, email, password)
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage });
            return { errorCode, errorMessage }
          });
      this.firebaseUser = auth.currentUser
      return credentials;
    },
    async initUser() {
      const auth = getAuth();
      this.firebaseUser = auth.currentUser;
      const userCookie = useCookie("userCookie");

      const router = useRouter();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
        } else {
          //if signed out
          router.push("/");
        }

        this.firebaseUser = user;

        // @ts-ignore
        userCookie.value = user; //ignore error because nuxt will serialize to json

        // $fetch("/api/auth", {
        //   method: "POST",
        //   body: { user },
        // });
      });
    },
    async signOutUser() {
      const auth = getAuth();
      const result = await auth.signOut();
      return result;
    }
  }
});