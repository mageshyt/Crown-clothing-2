// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// get fire store
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  writeBatch,
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
// const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((re) => console.log("successfully signed in with google", re))
//     .catch((err) => {
//       console.log(err);
//     });
// };
// Provider
const GoogleProvider = () => new GoogleAuthProvider();
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
  //! if snapShot does not exist then created a new user
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } else {
    console.log("the user already exists");
  }
  return userRef;
};

// ! Add collection
const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, "collections");

  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

// ! convertCollectionsSnapshotToMap
const convertCollectionsSnapshotToMap = (collection) => {
  const transFormedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routerName: encodeURI(title.toLowerCase()),
      title,
      items,
      id: doc.id,
    };
  });

  //! what we are doing here means means we are creating a new object and make title alone to small case & keep remaining unChange and return it like accumulator
  return transFormedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
export {
  app,
  auth,
  logout,
  db,
  useAuth,
  GoogleProvider,
  analytics,
  signUp,
  login,
  createUserProfileDocument,
  addCollectionAndDocuments,
  convertCollectionsSnapshotToMap,
};
