import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  GoogleProvider,
  createUserProfileDocument,
  auth,
  db,
  logout,
  signUp,
} from "../../firebase";
import {
  SignInFailure,
  SignInSuccess,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.action";
import UserActionTypes from "./user.types";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  console.log("name is", additionalData);

  try {
    yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield doc(db, "user", userAuth.uid);
    const snapShot = yield getDoc(userSnapshot);
    yield put(SignInSuccess({ id: snapShot.id, ...snapShot.data() }));
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const provider = GoogleProvider();
    const { user } = yield signInWithPopup(auth, provider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    put(SignInFailure(err));
  }
}

export function* OnGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_USER_START, signInWithGoogle);
}

//! for sign up
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(SignInFailure(err));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
//! for sign out
export function* signOut() {
  try {
    yield logout();

    yield put(signOutSuccess());
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

// ! sing up
export function* signUpMethod({ payload: { email, password, name } }) {
  try {
    console.log({ email, password, name });
    const { user } = yield signUp(email, password);
    yield put(signUpSuccess({ user, additionalData: { name } }));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

export function* onSignup() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpMethod);
}

export function* signUpSuccessAfter({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signUpSuccessAfter);
}
export function* userSaga() {
  yield all([
    call(OnGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOut),
    call(onSignup),
    call(onSignUpSuccess),
  ]);
}
