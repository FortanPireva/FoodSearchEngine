import React, { useState, useEffect, useContext, createContext } from "react";

import Firebase from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import UserModel from "../models/UserModel";
import { where, collection, query, getDocs } from "firebase/firestore";
import { dialogClasses } from "@mui/material";
const firebase = Firebase.instance;

console.log(firebase);
const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const setFirebaseError = (e) => {
    let error = "";
    switch (e.code) {
      case "auth/user-not-found":
        error = "Email not found";
        break;
      case "auth/email-already-exists":
        error = "Email already exists";
        break;
      case "auth/invalid-password":
        error = "Invalid password";
        break;
      default:
        error = e.code;
    }
    setError(error);
  };

  async function findUserById(uid) {
    console.log(uid);
    let q = query(
      collection(firebase.firestore(), "users"),
      where("userId", "==", uid)
    );
    let qSnap = await getDocs(q);
    let doc = null;
    qSnap.forEach((docum) => {
      doc = {
        id: docum.id,
        ...docum.data(),
      };
    });
    return doc;
  }
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return signInWithEmailAndPassword(firebase.auth(), email, password)
      .then(async (response) => {
        console.log(response.user);
        let user = await findUserById(response.user.uid);
        console.log(user);

        if (user) {
          setUser(user);
          setLoggedIn(true);
          return user;
        }
      })
      .catch((e) => {
        setFirebaseError(e);
      });
  };
  const signup = (email, password, firstName, lastName, phoneNumber) => {
    return createUserWithEmailAndPassword(firebase.auth(), email, password)
      .then((response) => {
        let user = response.user;
        user.firstName = firstName;
        user.lastName = lastName;
        user.phoneNumber = phoneNumber;
        let userModel = new UserModel(user);
        userModel.save().then((savedUser) => {
          setUser(savedUser);
          return savedUser;
        });
      })
      .catch((e) => {
        setFirebaseError(e);
      });
  };
  const signout = () => {
    return signOut(firebase.auth())
      .then(() => {
        setUser(false);
        setLoggedIn(false);
      })
      .catch((e) => {
        setFirebaseError(e);
      });
  };
  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };
  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (userImpl) => {
      if (userImpl) {
        let user = await findUserById(userImpl.uid);
        setUser(user);
        setLoggedIn(true);
        setError(null);
      } else {
        setUser(false);
        setLoggedIn(false);
        setError(null);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    loggedIn,
    error,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    findUserById,
  };
}
