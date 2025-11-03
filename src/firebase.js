import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2sXwx43FDUkqhN77at4supllQRTBD2gg",
  authDomain: "fir-e05e6.firebaseapp.com",
  projectId: "fir-e05e6",
  storageBucket: "fir-e05e6.firebasestorage.app",
  messagingSenderId: "871266758657",
  appId: "1:871266758657:web:e34a086c60e282790b9000",
  measurementId: "G-1S14B202ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//Provedor Google
const googleProvider = new GoogleAuthProvider();

//Função login popup
async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}

//função para logout
async function logout() {
    await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };