// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // api key is in env
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider();

export { db, firebaseApp };
