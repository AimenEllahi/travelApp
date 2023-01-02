// Import the functions you need from the SDKs you need
import { firebase } from "@firebase/app";
import "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9htJK2GKwyFbNKpspJ1DaOBQb9Wm-zC8",
  authDomain: "travelapp-285c7.firebaseapp.com",
  projectId: "travelapp-285c7",
  storageBucket: "travelapp-285c7.appspot.com",
  messagingSenderId: "287803521229",
  appId: "1:287803521229:web:47f86022ac07a498e21184",
  measurementId: "G-KQWPXSB9BR",
};

// Initialize Firebase
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

//auth
const auth = firebase.auth();

export { auth };