import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsz6q1MSErdVCG-SMJjk-q5uLwOhIJ6xg",
  authDomain: "react-2022-3c233.firebaseapp.com",
  projectId: "react-2022-3c233",
  storageBucket: "react-2022-3c233.appspot.com",
  messagingSenderId: "163674010250",
  appId: "1:163674010250:web:77135092bbd4530671b373",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
