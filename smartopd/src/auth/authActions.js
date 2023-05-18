import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebaseConfig";

import { child, getDatabase, ref, set, update } from "firebase/database";
import { SuccessPopUp } from "../components/SweetAlert";
import { useContext } from "react";
import { MainContext } from "../context/ContextProvider";

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

  //this sets userData to the localStorage
  localStorage.setItem(`userData${userId}`, JSON.stringify(userData));
  console.log(firstName);

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

// export const signIn = (email, password) => {
//   const auth = getAuth(app);
//   let userEmail;

//   const loginUser = signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;

//       // ...
//       SuccessPopUp("LogIn successfully", "Click okay to continue", "success");

//       return user.email;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("hi");
//       console.log(errorMessage);
//       SuccessPopUp("LogIn Failed", errorMessage, "error");
//       return null;
//     });
//   console.log(loginUser);
// };

export const signOUt = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      SuccessPopUp("LogOut successfully", "Click okay to continue", "success");
    })
    .catch((error) => {
      console.log(error);
    });
};
