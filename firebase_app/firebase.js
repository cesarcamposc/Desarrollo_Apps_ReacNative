// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDswPnbcgpiYZ0LKkmpDR5yZE3oUzkQRnU",
  authDomain: "react-native-firebase-a57a6.firebaseapp.com",
  projectId: "react-native-firebase-a57a6",
  storageBucket: "react-native-firebase-a57a6.appspot.com",
  messagingSenderId: "82566184125",
  appId: "1:82566184125:web:d97fcf7236ad6c314a4bd4"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// export {auth};

firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
export {auth};