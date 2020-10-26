import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlFHRO65V0hPZ414l4kTRMLujOEPFvQj8",
    authDomain: "react-blog-app-afeef.firebaseapp.com",
    databaseURL: "https://react-blog-app-afeef.firebaseio.com",
    projectId: "react-blog-app-afeef",
    storageBucket: "react-blog-app-afeef.appspot.com",
    messagingSenderId: "486955239446",
    appId: "1:486955239446:web:2acb3dd5291c185d824d37",
    measurementId: "G-LPDLKK4SH5"
  });
  const db = firebaseApp.firestore()
  export default db;