import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebaseConfig";

import { child, getDatabase, ref, set, update } from "firebase/database";

export const signUp = (
  firstName,
  lastName,
  country,
  phoneNum,
  homeAddress,
  aptFloor,
  email,
  dob,
  password
) => {
  const auth = getAuth(app);

  console.log("hi");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      const { uid, stsTokenManager } = user;
      createUser(
        firstName,
        lastName,
        country,
        phoneNum,
        homeAddress,
        aptFloor,
        email,
        dob,
        uid
      );
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

// Creating a database for the users
const createUser = async (
  firstName,
  lastName,
  country,
  phoneNum,
  homeAddress,
  aptFloor,
  email,
  dob,
  userId
) => {
  const userName = `${firstName} ${lastName}`.toLowerCase();

  const userData = {
    firstName,
    lastName,
    userName,
    country,
    phoneNum,
    homeAddress,
    aptFloor,
    email,
    dob,
    userId,
    signUpDate: new Date().toISOString(),
  };

  const db = getDatabase();
  const dbRef = ref(db);
  const childRef = child(dbRef, `users/${userId}`);
  try {
    await set(childRef, userData);
  } catch (error) {
    console.log(error.code);
  }
  return userData;
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("hi");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("hi");
        console.log(errorMessage);
      });
  };
};
