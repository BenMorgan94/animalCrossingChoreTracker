import * as firebase from "firebase";
import { toast } from "./toast";

const config = {
  apiKey: "AIzaSyDBRDBhYuRyq-pGwNq2yZ4wF1m71LtBd8k",
  authDomain: "animalcrossingapp-924f2.firebaseapp.com",
  databaseURL: "https://animalcrossingapp-924f2.firebaseio.com",
  projectId: "animalcrossingapp-924f2",
  storageBucket: "animalcrossingapp-924f2.appspot.com",
  messagingSenderId: "322796071500",
  appId: "1:322796071500:web:03fdd8ae620944787662e9",
  measurementId: "G-3347FR5XDG",
};

firebase.initializeApp(config);

export async function loginUser(email: string, password: string) {
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(result);
    return true;
  } catch (error) {
    toast(error.message, 4000);
    return false;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(result);
    return true;
  } catch (error) {
    toast(error.message, 4000);
    return false;
  }
}
