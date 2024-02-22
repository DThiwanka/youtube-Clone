import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD9c801ZNWMwzpSgqKVu9yGa4yUB8MPGRU",
    authDomain: "video-59788.firebaseapp.com",
    projectId: "video-59788",
    storageBucket: "video-59788.appspot.com",
    messagingSenderId: "984789645225",
    appId: "1:984789645225:web:370b0a965292fe876e36b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;