import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChs9IgxdPQA63nZANcSlZgEm-WBCClPW0",
  authDomain: "media-cf8f1.firebaseapp.com",
  projectId: "media-cf8f1",
  storageBucket: "media-cf8f1.appspot.com",
  messagingSenderId: "910373326352",
  appId: "1:910373326352:web:f4b3520bbb632ffffcc495",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
