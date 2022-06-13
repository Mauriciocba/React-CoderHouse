
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBzCrysNE7M20GfX0jf2tMetgtiecvlcNo",
  authDomain: "react-proyecto-9892f.firebaseapp.com",
  projectId: "react-proyecto-9892f",
  storageBucket: "react-proyecto-9892f.appspot.com",
  messagingSenderId: "194239066865",
  appId: "1:194239066865:web:4407190cd45d320f182f50"
};


const app = initializeApp(firebaseConfig);

export const basedatos = getFirestore(app)
export const auth = getAuth(app)