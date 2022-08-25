import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
// import firebase from "firebase/compat/app";
// import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBk-rLQXCJs5HcOPfHQhMaq93pgdGgHBpo",
  authDomain: "new-comm-fb6c0.firebaseapp.com",
  projectId: "new-comm-fb6c0",
  storageBucket: "new-comm-fb6c0.appspot.com",
  messagingSenderId: "705275442696",
  appId: "1:705275442696:web:b59dd3b7ad7d6177f343bd",
  measurementId: "G-HXCFC3WRZB"
};
const  app=initializeApp(firebaseConfig);
const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
// export const fs=firebase.firestore();
export default auth;