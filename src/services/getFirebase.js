import firebase from 'firebase/app'
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAz3J7mAXUbj2R8qZ9nNUEdFYQf6R3WbxM",
    authDomain: "rucahome-3ddc8.firebaseapp.com",
    projectId: "rucahome-3ddc8",
    storageBucket: "rucahome-3ddc8.appspot.com",
    messagingSenderId: "1029965556773",
    appId: "1:1029965556773:web:fec3c82b94dd8f6ef923cc"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
    return firebase.firestore(app);
  }