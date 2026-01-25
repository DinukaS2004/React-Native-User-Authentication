// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGgxZgL7EceR0QwieTuo78M0HdpEXeSZM",
    authDomain: "react-native-auth-61555.firebaseapp.com",
    projectId: "react-native-auth-61555",
    storageBucket: "react-native-auth-61555.firebasestorage.app",
    messagingSenderId: "481500097632",
    appId: "1:481500097632:web:14d0700601f8ac31ad6705",
    measurementId: "G-08QGPCG94N"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});