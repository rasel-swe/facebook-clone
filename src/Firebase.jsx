import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7e2SdQ8GZ0S3ozvTcwn32YQhNgkMu_LQ",
  authDomain: "facebook-clone-fc27e.firebaseapp.com",
  projectId: "facebook-clone-fc27e",
  storageBucket: "facebook-clone-fc27e.appspot.com",
  messagingSenderId: "293007443464",
  appId: "1:293007443464:web:342fa610fa12fed08573bd",
  measurementId: "G-873L4E1K40",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
