import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSLZt7it79bbStY3fLDw7w53k02SFrzkg",
  authDomain: "crown-clothing-db-f6b31.firebaseapp.com",
  projectId: "crown-clothing-db-f6b31",
  storageBucket: "crown-clothing-db-f6b31.appspot.com",
  messagingSenderId: "289018450585",
  appId: "1:289018450585:web:4776f732cd172ae67d9e08",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
