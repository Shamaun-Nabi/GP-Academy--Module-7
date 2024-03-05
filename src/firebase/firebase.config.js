// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfMpCqAkBjNEYN5CTj7Zwa-UvBXcLP1NI",
  authDomain: "ebay-2047d.firebaseapp.com",
  projectId: "ebay-2047d",
  storageBucket: "ebay-2047d.appspot.com",
  messagingSenderId: "667970244785",
  appId: "1:667970244785:web:2778459a00d1caa79f9290",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Register with email and password
export const userRegister = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// Sign in with Email and Password

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result.user);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
