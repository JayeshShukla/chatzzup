import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjCvD_4SCwOlh5rP-yLoU5zhBvmpWSMKQ",
  authDomain: "login-singup-5ddf4.firebaseapp.com",
  projectId: "login-singup-5ddf4",
  storageBucket: "login-singup-5ddf4.appspot.com",
  messagingSenderId: "1076219574170",
  appId: "1:1076219574170:web:28def90c888f8a1e026c23"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
