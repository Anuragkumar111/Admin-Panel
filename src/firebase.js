import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC06BWJcefMcjgsYp3feuX5lSRwlyUg2Pg",
  authDomain: "admi-panel-1eadc.firebaseapp.com",
  projectId: "admi-panel-1eadc",
  storageBucket: "admi-panel-1eadc.appspot.com",
  messagingSenderId: "97355166209",
  appId: "1:97355166209:web:a6a303942322a5e0828600",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
