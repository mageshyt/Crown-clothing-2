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
  signOut,
} from "firebase/auth";
// get fire store
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
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
const db = getFirestore(app);
const auth = getAuth();

const analytics = getAnalytics(app);
const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
// ! login with google
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => console.log("successfully signed in with google", re))
    .catch((err) => {
      console.log(err);
    });
};
// ! login with mail and password
const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// ! log out

const logout = () => {
  return signOut(auth);
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

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, `user`, userAuth.uid);
  const snapShot = await getDoc(userRef);
  const collectionRef = collection(db, `user`);

  console.log(snapShot.exists());
  //! if snapShot does not exist then created a new user
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    // console.log({ displayName, email });
    const createdAt = new Date();
    console.log("additionalData", additionalData);
    try {
      await addDoc(collectionRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      // await collection(db, "user")
      //   .doc(userAuth.uid)
      //   .set({
      //     displayName,
      //     email,
      //     createdAt,
      //     ...additionalData,
      //   });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } else {
    console.log("the user already exists");
  }
  // console.log("succesfully done 😀");
  // console.log(userRef);
  console.log("id", userAuth.uid); // const snapShot = await
  return userRef;
};
// createUserProfileDocument(auth/);
export {
  app,
  auth,
  logout,
  db,
  useAuth,
  signInWithGoogle,
  analytics,
  signUp,
  login,
  createUserProfileDocument,
};
