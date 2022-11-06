import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
let singleInstance = null;
class Firebase {
  constructor() {
    const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECTID;
    const CONFIG = {
      apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
      authDomain: PROJECT_ID + ".firebaseapp.com",
      // databaseURL: "https://" + PROJECT_ID + "-default-rtdb.firebaseio.com",
      projectId: PROJECT_ID,
      storageBucket: PROJECT_ID + ".appspot.com",
      appId: process.env.REACT_APP_FIREBASE_APPID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    };

    this.firebaseInstance = initializeApp(CONFIG);
    this.firebaseAuth = getAuth(this.firebaseInstance);
    this.firebaseAuth.useDeviceLanguage();
    this.firebaseFirestore = getFirestore(this.firebaseInstance);

    this.firebaseStorage = getStorage(this.firebaseInstance);
  }
  static get instance() {
    if (!singleInstance) singleInstance = new Firebase();
    return singleInstance;
  }
  auth() {
    return this.firebaseAuth;
  }
  firestore() {
    return this.firebaseFirestore;
  }
}
export default Firebase;

// const firebaseConfig = {
//     apiKey: "AIzaSyBEcRz8u16zcLlzpQEjb9cCM28CZ_TSwrk",
//     authDomain: "foodsearch-927fe.firebaseapp.com",
//     projectId: "foodsearch-927fe",
//     storageBucket: "foodsearch-927fe.appspot.com",
//     messagingSenderId: "781665266829",
//     appId: "1:781665266829:web:4d19c5842f4935cb65c6c4",
//     measurementId: "G-89XHYTWZ0Y"
//   };
