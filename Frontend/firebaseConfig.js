import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzGD1AZ5hj-Qd48FWaeKtciHK2X_4X_JM",
  authDomain: "dishdiscover-5fe42.firebaseapp.com",
  databaseURL: "https://dishdiscover-5fe42-default-rtdb.firebaseio.com",
  projectId: "dishdiscover-5fe42",
  storageBucket: "dishdiscover-5fe42.appspot.com",
  messagingSenderId: "962319179659",
  appId: "1:962319179659:web:e5396ed4681d6a2620198e",
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
