// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxRrYIrJljExdX_fp4Oao7r45czjjndiY",
  authDomain: "volunteer-hub-auth.firebaseapp.com",
  projectId: "volunteer-hub-auth",
  storageBucket: "volunteer-hub-auth.firebasestorage.app",
  messagingSenderId: "735773393960",
  appId: "1:735773393960:web:a127bd04bb6a88e40ae11d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;