import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCg6vWV5IsT41OgfL9FJr6bCuDt1kKVcU4",
  authDomain: "code-commerce-774df.firebaseapp.com",
  databaseURL:
    "https://code-commerce-774df-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "code-commerce-774df",
  storageBucket: "code-commerce-774df.appspot.com",
  messagingSenderId: "67228907818",
  appId: "1:67228907818:web:ebbe6e7958402a36b64653",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
