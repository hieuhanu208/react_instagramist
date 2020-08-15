import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBRv3VhVqynlNYjCSO0lUfHkSdPayqyyI",
    authDomain: "instagramist-326e5.firebaseapp.com",
    databaseURL: "https://instagramist-326e5.firebaseio.com",
    projectId: "instagramist-326e5",
    storageBucket: "instagramist-326e5.appspot.com",
    messagingSenderId: "591477159815",
    appId: "1:591477159815:web:8f350251779cea17194522",
    measurementId: "G-76GVCZP7XX"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth ,storage};

