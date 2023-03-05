import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
    authDomain: "mochismittens-6990d.firebaseapp.com",
    projectId: "mochismittens-6990d",
    storageBucket: "mochismittens-6990d.appspot.com",
    messagingSenderId: "322658295689",
    appId: "1:322658295689:web:2cd52e048d857bc7634b58",
    measurementId: "G-PZ1V96WY3W"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore()