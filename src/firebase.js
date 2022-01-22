// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// get fire store
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBYczDQOU-FTzMipU7o2q4bZpE9VrbwhIE",
  authDomain: "crown-clothing-2-3ed7e.firebaseapp.com",
  projectId: "crown-clothing-2-3ed7e",
  storageBucket: "crown-clothing-2-3ed7e.appspot.com",
  messagingSenderId: "1071728668496",
  appId: "1:1071728668496:web:098ea2cf69eea7d3ee0655",
  measurementId: "G-NP83F6F3JL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);
const auth = getAuth();

const analytics = getAnalytics(app);
const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => console.log(re))
    .catch((err) => {
      console.log(err);
    });
};

// ! custom hook to get current user
const useAuth = () => {
  const [currentUser, currentUserSet] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        currentUserSet(user);
      } else {
        currentUserSet(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return currentUser;
};

export { app, auth, firebase, useAuth, signInWithGoogle, analytics, signUp };
