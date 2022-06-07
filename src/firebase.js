import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7VdMXhbBc_OlswKrH1I29cNf_kUT9sSM",
  authDomain: "msgapp-57f26.firebaseapp.com",
  projectId: "msgapp-57f26",
  storageBucket: "msgapp-57f26.appspot.com",
  messagingSenderId: "162536515094",
  appId: "1:162536515094:web:d82979c897277b56c87737",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
