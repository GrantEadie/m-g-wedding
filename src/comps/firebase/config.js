import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyAPtGR2-LRPhMAD8Nt4qUrKvQ1omNdWrrk",
  authDomain: "m-g-wedding.firebaseapp.com",
  projectId: "m-g-wedding",
  storageBucket: "m-g-wedding.appspot.com",
  messagingSenderId: "669573244708",
  appId: "1:669573244708:web:793e8a1e1c6b84e21835b1",
  measurementId: "G-KTK0JHV87R",
};
firebase.initializeApp(config);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
